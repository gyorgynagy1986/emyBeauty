import { NextResponse } from 'next/server';
import {Resend}  from 'resend';
import AppointmentEmailTemplate from '@/components/email/ReservationTemplate';
import ConsultationEmailTemplate from '@/components/email/Consultation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Kérés adatainak feldolgozása
    const formData = await request.json();
    const { name, email, phone, service, message, bookingType } = formData;
    
    // Validáció
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Kötelező mezők hiányoznak' },
        { status: 400 }
      );
    }
    
    // Email tárgy meghatározása
    const subject = bookingType === 'Időpontfoglalás szolgáltatásra'
      ? 'Időpontfoglalás visszaigazolás - EmyBeautyEstetics™️'
      : 'Konzultációs igény visszaigazolása - EmyBeautyEstetics™️';
    
    // Email sablon kiválasztása
    const EmailTemplate = bookingType === 'Időpontfoglalás szolgáltatásra'
      ? AppointmentEmailTemplate
      : ConsultationEmailTemplate;
    
    // Email küldése
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM, 
      to: [email], // Ügyfél email
      subject: subject,
      react: EmailTemplate({ 
        name, 
        email, 
        phone, 
        service, 
        message 
      }),
    });
    
    // Sikeres válasz
    return NextResponse.json({ success: true, data });
  } catch (error) {
    // Hiba kezelése
    console.error('Email küldési hiba:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}