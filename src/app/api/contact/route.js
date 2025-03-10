import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactEmailTemplate from '@/components/email/ContactEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Kérés adatainak feldolgozása
    const formData = await request.json();
    const { name, email, phone, message } = formData;
    
    // Alap validáció
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Hiányzó kötelező mezők (név, email, üzenet)' },
        { status: 400 }
      );
    }

    // Email küldése csak a weboldal tulajdonosának
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'no-reply@studiobromo.hu',
      to: [process.env.ADMIN_EMAIL || 'hello@studiobromo.hu'],
      subject: `Új kapcsolatfelvétel: ${name}`,
      react: ContactEmailTemplate({
        name,
        email,
        phone,
        message,
      }),
    });

    // Sikeres válasz
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email küldési hiba:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}