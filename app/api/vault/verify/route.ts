import { NextRequest, NextResponse } from 'next/server'

// Passkey configuration - mapped from environment variables
const VAULT_PAGES = {
    partnership: {
        path: '/vault/partnership',
        envKey: 'VAULT_PASSKEY_PARTNERSHIP'
    },
    community: {
        path: '/vault/community',
        envKey: 'VAULT_PASSKEY_COMMUNITY'
    },
    government: {
        path: '/vault/government',
        envKey: 'VAULT_PASSKEY_GOVERNMENT'
    },
    talent: {
        path: '/vault/talent',
        envKey: 'VAULT_PASSKEY_TALENT'
    },
    investors: {
        path: '/vault/investors',
        envKey: 'VAULT_PASSKEY_INVESTORS'
    }
}

export async function POST(request: NextRequest) {
    try {
        const { passkey } = await request.json()

        if (!passkey || typeof passkey !== 'string') {
            return NextResponse.json(
                { error: 'Passkey is required' },
                { status: 400 }
            )
        }

        const normalizedPasskey = passkey.toUpperCase().trim()

        // Check each vault page's passkey from environment variables
        for (const [page, config] of Object.entries(VAULT_PAGES)) {
            const storedPasskey = process.env[config.envKey]

            if (storedPasskey && normalizedPasskey === storedPasskey.toUpperCase()) {
                return NextResponse.json({
                    success: true,
                    path: config.path,
                    page: page
                })
            }
        }

        // Invalid passkey
        return NextResponse.json(
            { error: 'Invalid passkey. Please try again.' },
            { status: 401 }
        )
    } catch {
        return NextResponse.json(
            { error: 'An error occurred. Please try again.' },
            { status: 500 }
        )
    }
}
