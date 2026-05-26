import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Google Sheets Web App URL - you'll need to replace this with your actual URL
    const GOOGLE_SHEETS_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || '';

    if (!GOOGLE_SHEETS_URL) {
      throw new Error('Google Sheets URL not configured');
    }

    // Send data to Google Sheets
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        timestamp: new Date().toISOString(),
      }),
    });

    const result = await response.text();
    console.log('Google Sheets response:', result);

    if (!response.ok) {
      throw new Error(`Failed to submit to Google Sheets: ${result}`);
    }

    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
