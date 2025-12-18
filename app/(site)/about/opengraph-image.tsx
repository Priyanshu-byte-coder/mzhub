import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Image metadata
export const alt = 'About MZhub - Bridging Ancient Wisdom with Modern Technology'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
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
                        marginBottom: '50px',
                    }}
                >
                    <div
                        style={{
                            fontSize: 70,
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
                            fontSize: 70,
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
                        fontSize: 56,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '24px',
                        lineHeight: 1.2,
                        maxWidth: '1000px',
                    }}
                >
                    About Us
                </div>

                {/* Subtitle */}
                <div
                    style={{
                        fontSize: 36,
                        textAlign: 'center',
                        color: '#fde68a',
                        marginBottom: '20px',
                        lineHeight: 1.3,
                    }}
                >
                    Bridging Ancient Wisdom
                </div>
                <div
                    style={{
                        fontSize: 36,
                        textAlign: 'center',
                        color: '#fde68a',
                        lineHeight: 1.3,
                    }}
                >
                    with Modern Technology
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
