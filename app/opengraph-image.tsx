import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'MZhub - AI-Powered Spiritual Platforms for Religious Institutions'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 60,
                    background: 'linear-gradient(135deg, #312e81 0%, #4c1d95 50%, #581c87 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    padding: '80px',
                }}
            >
                {/* Logo/Brand */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        marginBottom: '40px',
                    }}
                >
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 'bold',
                            background: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        MZ
                    </div>
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 'bold',
                            color: 'white',
                        }}
                    >
                        hub
                    </div>
                </div>

                {/* Main Title */}
                <div
                    style={{
                        fontSize: 48,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '24px',
                        lineHeight: 1.2,
                    }}
                >
                    AI-Powered Spiritual Platforms
                </div>

                {/* Subtitle */}
                <div
                    style={{
                        fontSize: 28,
                        textAlign: 'center',
                        color: '#e0e7ff',
                        maxWidth: '900px',
                        lineHeight: 1.4,
                    }}
                >
                    Extend your spiritual reach with AI. Preserve sacred teachings while scaling personalized guidance.
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
