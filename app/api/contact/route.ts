import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, business, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'FDveloper <onboarding@resend.dev>',
      to: ['contacto.fdveloper@gmail.com'],
      replyTo: email,
      subject: `Nueva consulta de ${name} — FDveloper`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0a0a; color: #ffffff; border-radius: 12px;">
          <h2 style="color: #a855f7; margin-bottom: 24px;">📩 Nueva consulta desde fdveloper.com</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 140px;">Nombre</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #a855f7;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Negocio</td>
              <td style="padding: 8px 0;">${business || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Servicio</td>
              <td style="padding: 8px 0;">${service || '—'}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #1a1a1a; border-radius: 8px; border-left: 3px solid #a855f7;">
            <p style="color: #888; margin: 0 0 8px;">Mensaje:</p>
            <p style="margin: 0; line-height: 1.6;">${message}</p>
          </div>
          <p style="margin-top: 32px; font-size: 12px; color: #555; text-align: center;">
            FDveloper · fdveloper.com · Respondé directo a este email para contactar al cliente
          </p>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
