import {pool} from "../database/db";

async function validateRegister(nome:string, email:string, telefone:string, cpf:string, senha:string) {
    const sql = `SELECT clientes.id, clientes.nome, clientes.email, clientes.telefone, clientes.cpf, clientes.senha, cargos.nome
        AS cargo
        FROM clientes
        JOIN cargos ON cargos.id = clientes.cargo_id
        WHERE clientes.email = ?`
}

export default {
    validateRegister
}