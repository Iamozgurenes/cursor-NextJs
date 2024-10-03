import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()
    console.log('Received data:', { name, email, message })

    // Burada e-posta gönderme işlemi

    return NextResponse.json({ message: 'E-posta başarıyla gönderildi' }, { status: 200 })
  } catch (error) {
    console.error('API error:', error)
    if (error instanceof Error) {
      return NextResponse.json({ error: 'E-posta gönderilemedi', details: error.message }, { status: 500 })
    }
    return NextResponse.json({ error: 'E-posta gönderilemedi' }, { status: 500 })
  }
}
