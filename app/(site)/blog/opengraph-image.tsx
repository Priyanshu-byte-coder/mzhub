import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Image metadata
export const alt = 'MZhub Blog - Insights on Spiritual Technology'
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
                    background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)',
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
                        fontSize: 58,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '20px',
                        lineHeight: 1.2,
                        background: 'linear-gradient(90deg, #fde68a, #fbbf24)',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    Blog
                </div>

                {/* Subtitle */}
                <div
                    style={{
                        fontSize: 34,
                        textAlign: 'center',
                        color: '#c7d2fe',
                        maxWidth: '900px',
                        lineHeight: 1.3,
                    }}
                >
                    Spiritual Technology Insights
                </div>

                {/* Description */}
                <div
                    style={{
                        fontSize: 26,
                        textAlign: 'center',
                        color: '#a5b4fc',
                        maxWidth: '800px',
                        marginTop: '20px',
                        lineHeight: 1.4,
                    }}
                >
                    Expert perspectives on AI, spirituality, and faith-tech integration
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
