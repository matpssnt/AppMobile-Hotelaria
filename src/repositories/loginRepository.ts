import {pool} from "../database/db"

async function validateLogin(email: string) {
    const sql = `SELECT clientes.nome, clientes.email, clientes.senha, cargos.nome
    AS cargos
    FROM clientes
    JOIN cargos ON cargos.id = clientes.cargo_id
    WHERE clientes.email = ?`

    const [rows] = await pool.query(sql, [email])
    return rows.length ? rows[0] : null
}

export default {
    validateLogin
}