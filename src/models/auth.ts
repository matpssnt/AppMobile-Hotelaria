import { RowDataPacket } from "mysql2"

export type login = RowDataPacket & {
    id: number,
    nome: string,
    email: string,
    senha: string,
    cargo: string
}

export type register = {
    nome: string,
    email: string,
    telefone: string,
    cpf: string,
    senha: string
}