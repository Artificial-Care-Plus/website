import { promises as fs } from 'fs'

async function getUsers() {
    try {
        const file = await fs.readFile('./src/app/api/users.json', 'utf8')
        return JSON.parse(file)
    } catch {
        const users = {
            users: [],
        }
        await fs.writeFile('./src/app/api/users.json', JSON.stringify(users))
        return users
    }
}
function updateUsers(users) {
    return fs.writeFile('./src/app/api/users.json', JSON.stringify(users))
}

export async function createUserToken(email) {
    const users = await getUsers()
    const token = crypto.randomUUID()
    users.users[email] = token
    await updateUsers(users)
    return token
}
export async function revalidateUser(email, token) {
    const users = await getUsers()
    console.log(users.users, email, token)
    if (users.users[email] === token) {
        users.users[email] = crypto.randomUUID()
        await updateUsers(users)
        return users.users[email]
    }
    return false
}
