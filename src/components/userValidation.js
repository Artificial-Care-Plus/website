/**
 * @type {Map<string, string>} users
 */
export const tokens = new Map()

export function createUserToken(email) {
    const token = crypto.randomUUID()
    tokens.set(email, token)
    return token
}
export function revalidateUser(email, token) {
    return tokens.get(email) === token ? crypto.randomUUID() : null
}
