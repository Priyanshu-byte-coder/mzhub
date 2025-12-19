const VAULT_SESSION_KEY = 'vault_authenticated_page'
const SESSION_DURATION = 30 * 60 * 1000

export function setVaultSession(page: string) {
  if (typeof window !== 'undefined') {
    const sessionData = {
      page,
      timestamp: Date.now()
    }
    sessionStorage.setItem(VAULT_SESSION_KEY, JSON.stringify(sessionData))
  }
}

export function getVaultSession(): string | null {
  if (typeof window !== 'undefined') {
    const data = sessionStorage.getItem(VAULT_SESSION_KEY)
    if (data) {
      try {
        const { page, timestamp } = JSON.parse(data)
        if (Date.now() - timestamp < SESSION_DURATION) {
          return page
        } else {
          clearVaultSession()
        }
      } catch {
        clearVaultSession()
      }
    }
  }
  return null
}

export function clearVaultSession() {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(VAULT_SESSION_KEY)
  }
}

export function isAuthenticated(requiredPage: string): boolean {
  const authenticatedPage = getVaultSession()
  return authenticatedPage === requiredPage
}
