import { RowDataPacket } from "mysql2"

export type register = RowDataPacket & {
    id: number,
    nome: string,
    email: string,
    telefone: string,
    cpf: string,
    senha: string,
    cargo: string
}