import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: 'linear-gradient(135deg, #6C47FF 0%, #00D4FF 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          fontSize: 72,
          color: 'white',
          letterSpacing: '-2px',
        }}
      >
        FD
      </div>
    ),
    { ...size }
  )
}
