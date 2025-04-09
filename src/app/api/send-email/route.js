import { NextResponse } from "next/server";
import { Resend } from "resend";
import AppointmentEmailTemplate from "@/components/email/ReservationTemplate";
import ConsultationEmailTemplate from "@/components/email/Consultation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Kérés adatainak feldolgozása
    const formData = await request.json();
    // Kivesszük a szükséges mezőket
    const { 
      name, 
      email, 
      phone, 
      city, 
      service, 
      message, 
      bookingType, 
      date, 
      time,
      consent,
      requiresDeposit 
    } = formData;

    // Alap validáció - ezek minden esetben kötelezők
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Kötelező mezők hiányoznak (név, email, telefon)!" },
        { status: 400 }
      );
    }

    // Ha 'Időpontfoglalás szolgáltatásra' lett kiválasztva, akkor date, time és city is kell
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

    // Időpontfoglalásnál a város is kötelező
    if (bookingType === "Időpontfoglalás szolgáltatásra" && !city) {
      return NextResponse.json(
        { error: "Város megadása kötelező időpontfoglalás esetén!" },
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
        city,
        service,
        message,
        appointmentDate,
        requiresDeposit,
        consent,
        isAdminNotification: false
      }),
    });

    // Értesítés a szalon részére - Admin verzió küldése (kevesebb információval)
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: [process.env.ADMIN_EMAIL || "info@emybeautyestetics.hu"],
      subject:
        bookingType === "Időpontfoglalás szolgáltatásra"
          ? `Új időpontfoglalás: ${name} - ${city}`
          : `Új konzultációs igény: ${name}`,
      react: EmailTemplate({
        name,
        email,
        phone,
        city,
        service,
        message,
        appointmentDate,
        requiresDeposit,
        consent,
        isAdminNotification: true
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