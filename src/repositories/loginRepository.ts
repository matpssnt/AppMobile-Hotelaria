import {pool} from "../database/db"
import { login } from "../models/login"

async function validateLogin(email: string):Promise<login|null>{
    const sql = `SELECT clientes.id, clientes.nome, clientes.email, clientes.senha, cargos.nome
    AS cargo
    FROM clientes
    JOIN cargos ON cargos.id = clientes.cargo_id
    WHERE clientes.email = ?`

    const [rows] = await pool.query<login[]>(sql, [email])
    return rows.length ? rows[0] : null
}

export default {
    validateLogin
}