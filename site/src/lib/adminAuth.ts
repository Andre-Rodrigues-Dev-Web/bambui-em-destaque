export const ADMIN_SESSION_COOKIE = 'admin_session'
export const ADMIN_SESSION_VALUE = 'authenticated'

export function getAdminCredentials() {
  const email = process.env.ADMIN_EMAIL?.trim()
  const password = process.env.ADMIN_PASSWORD?.trim()

  if (!email || !password) {
    return null
  }

  return { email, password }
}
