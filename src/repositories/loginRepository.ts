import { QueryResult, ResultSetHeader } from "mysql2"
import {pool} from "../database/db"
import { login, register } from "../models/auth"

async function validateLogin(email: string):Promise<login|null>{
    const sql = `SELECT clientes.id, clientes.nome, clientes.email, clientes.senha, cargos.nome
    AS cargo
    FROM clientes
    JOIN cargos ON cargos.id = clientes.cargo_id
    WHERE clientes.email = ?`

    const [rows] = await pool.query<login[]>(sql, [email])
    return rows.length ? rows[0] : null
}

async function createRegister(register:register): Promise<login|null> {
    const sql = `
        INSERT INTO clientes (nome, email, telefone, cpf, senha)
        VALUES (?, ?, ?, ?, ?)
    `;

    const [result] = await pool.query<ResultSetHeader>(sql, [
        register.nome, 
        register.email, 
        register.telefone, 
        register.cpf, 
        register.senha,
    ]);
    if (result.insertId) {
        const sucess:login = {id:result.insertId, ...register, cargo: "cliente"} as login
        return sucess
    }
    return null;
}

export default {
    validateLogin, createRegister
}