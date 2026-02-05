import bcrypt from 'bcrypt'

const SALT = 10

export async function generateHash(senha:string) {
    return bcrypt.hash(senha, SALT)
}

export async function validateHash(senha:string, hash:string) {
    const normal_hash = hash.replace("$2y$", "$2b$")
        return bcrypt.compare(senha, normal_hash);
}
