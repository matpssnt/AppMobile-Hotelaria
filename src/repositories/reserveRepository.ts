import {pool} from "../database/db";
import { ResultSetHeader, RowDataPacket } from "mysql2";

async function makeOrder(data:any) {
    const sql = `
        INSERT INTO pedidos (usuario_id, cliente_id, pagamento) 
        VALUES (?, ?, ?);
    `;

    try {
        const [result] = await pool.query<ResultSetHeader>(sql, [
            4,
            data.cliente_id,
            data.pagamento
        ]);

        return result.insertId;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

async function makeReserve(idPedido:number, room:any) {
    const sql = `
        INSERT INTO reservas (pedido_id, quarto_id, adicional_id, fim, inicio) 
        VALUES (?, ?, ?, ?, ?);
    `;

    try {
        const [result] = await pool.query<ResultSetHeader>(sql, [
            idPedido,
            room.id,
            2,
            room.fim,
            room.inicio
        ]);
        return result.insertId;
    }
    catch (error) {
        console.log("Erro ao reservar o quarto:", error);
        return null;
    }
}

export default {
    makeOrder, makeReserve
}