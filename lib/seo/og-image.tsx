import { ImageResponse } from '@vercel/og'

export const OG_IMAGE_SIZE = {
    width: 1200,
    height: 630,
}

interface OGImageProps {
    title: string
    description?: string
    category?: string
}

export async function generateOGImage({ title, description, category }: OGImageProps) {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0A0E27',
                    backgroundImage: 'radial-gradient(circle at 25px 25px, #1a1f3a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1f3a 2%, transparent 0%)',
                    backgroundSize: '100px 100px',
                    padding: '80px',
                }}
            >
                {/* Logo/Brand */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '40px',
                    }}
                >
                    <div
                        style={{
                            fontSize: '48px',
                            fontWeight: 'bold',
                            background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            display: 'flex',
                        }}
                    >
                        MZHub
                    </div>
                </div>

                {/* Category Tag */}
                {category && (
                    <div
                        style={{
                            fontSize: '20px',
                            color: '#9CA3B8',
                            textTransform: 'uppercase',
                            letterSpacing: '4px',
                            marginBottom: '24px',
                            display: 'flex',
                        }}
                    >
                        {category}
                    </div>
                )}

                {/* Title */}
                <div
                    style={{
                        fontSize: '72px',
                        fontWeight: 'bold',
                        color: '#FFFFFF',
                        textAlign: 'center',
                        lineHeight: '1.2',
                        marginBottom: description ? '32px' : '0',
                        maxWidth: '90%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    {title}
                </div>

                {/* Description */}
                {description && (
                    <div
                        style={{
                            fontSize: '28px',
                            color: '#9CA3B8',
                            textAlign: 'center',
                            lineHeight: '1.4',
                            maxWidth: '80%',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        {description}
                    </div>
                )}

                {/* Bottom accent line */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        height: '8px',
                        background: 'linear-gradient(90deg, #D4AF37 0%, #F4E5C3 100%)',
                        display: 'flex',
                    }}
                />
            </div>
        ),
        {
            ...OG_IMAGE_SIZE,
        }
    )
}
