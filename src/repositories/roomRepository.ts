import {pool} from "../database/db";
import { RowDataPacket } from "mysql2";
import { RoomReserve, Rooms } from "../models/room";

async function availables(order:RoomReserve): Promise<Rooms | null> {
    const sql = 
    `
        SELECT * FROM quartos q
        WHERE q.disponivel = 1
        AND (q.qnt_cama_casal * 2 + q.qnt_cama_solteiro) >= ?
        AND q.id NOT IN (
            SELECT r.quarto_id 
            FROM reservas r
            WHERE (r.inicio <= ? AND r.fim >= ?))
    `;

    const [rooms] = await pool.query<Rooms[]>(sql, [
        order.quantidade,
        order.inicio,
        order.fim
    ])
    return rooms.length ? rooms : null
    
}

async function searchImagesById(id:number) {
    const sql = `
        SELECT i.nome FROM imagens_quartos iq
        JOIN imagens i ON iq.imagem_id = i.id
        WHERE iq.quarto_id = ?
    `;

    const [imagens] = await pool.query<RowDataPacket[]>(sql, [id])
    return imagens.map((img) => img.nome)
}

export default {
    availables, searchImagesById
}