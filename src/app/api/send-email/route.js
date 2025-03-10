import { NextResponse } from "next/server";
import { Resend } from "resend";
import AppointmentEmailTemplate from "@/components/email/ReservationTemplate";
import ConsultationEmailTemplate from "@/components/email/Consultation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Kérés adatainak feldolgozása
    const formData = await request.json();
    // Kivesszük külön a date és time mezőket
    const { name, email, phone, service, message, bookingType, date, time } =
      formData;

    // Alap validáció - ezek minden esetben kötelezők
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Kötelező mezők hiányoznak (név, email, telefon)!" },
        { status: 400 }
      );
    }

    // Ha 'Időpontfoglalás szolgáltatásra' lett kiválasztva, akkor date és time is kell
    let appointmentDate = "";
    if (date && time) {
      // Összefűzzük a dátumot és az időt
      appointmentDate = `${date} ${time}`;
    } else if (bookingType === "Időpontfoglalás szolgáltatásra") {
      // Időpontfoglalás esetén kötelező a dátum és idő megadása
      return NextResponse.json(
        { error: "Dátum és idő megadása kötelező időpontfoglalás esetén!" },
        { status: 400 }
      );
    }

    // Email tárgy
    const subject =
      bookingType === "Időpontfoglalás szolgáltatásra"
        ? "Időpontfoglalás visszaigazolás - EmyBeautyEstetics™️"
        : "Konzultációs igény visszaigazolása - EmyBeautyEstetics™️";

    // Email sablon
    const EmailTemplate =
      bookingType === "Időpontfoglalás szolgáltatásra"
        ? AppointmentEmailTemplate
        : ConsultationEmailTemplate;

    // Email küldése az ügyfélnek
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: [email],
      subject,
      react: EmailTemplate({
        name,
        email,
        phone,
        service,
        message,
        appointmentDate,
      }),
    });

    // Értesítés a szalon részére
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: [process.env.ADMIN_EMAIL || "info@emybeautyestetics.hu"],
      subject:
        bookingType === "Időpontfoglalás szolgáltatásra"
          ? `Új időpontfoglalás: ${name}`
          : `Új konzultációs igény: ${name}`,
      react: EmailTemplate({
        name,
        email,
        phone,
        service,
        message,
        appointmentDate,
        isAdminNotification: true,
      }),
    });

    // Sikeres válasz
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email küldési hiba:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
