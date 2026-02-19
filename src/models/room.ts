import { RowDataPacket } from "mysql2";

export type Rooms = RowDataPacket & {
    id: number;
    nome: string;
    numero: number;
    qnt_cama_casal: number;
    qnt_cama_solteiro: number;
    preco: number;
    disponivel: number;
}

export type RoomReserve = {
    inicio: string;
    fim: string;
    quantidade: number;
}