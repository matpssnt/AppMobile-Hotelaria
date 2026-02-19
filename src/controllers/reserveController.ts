import { Request, Response, NextFunction } from "express";
import reserveRepository from "../repositories/reserveRepository";


async function fixDateHour(data:string, hour:number) {
    let newDate = new Date(data);
    newDate.setHours(hour, 0, 0, 0);
    return newDate;
}


async function createOrder(req:Request, res: Response, next:NextFunction) {
    const token = req.payload;
    const {pagamento, quartos} = req.body;

    if (!token || !pagamento || !quartos) {
        return res.status(400).json({error: "Dados incompletos!"})
    }

    try {
        const dataOrder = {
            cliente_id: token.id,
            pagamento: pagamento
        }
        const pedidoID = await reserveRepository.makeOrder(dataOrder);

        if (!pedidoID) {
            throw new Error("Erro ao criar o pedido!")
        }


        let result = [];

        for (let q of quartos) {

            q.inicio = await fixDateHour(q.inicio, 14);
            q.fim = await fixDateHour(q.fim, 12);

            const reserveID = await reserveRepository.makeReserve(pedidoID, q);
            
            if (!reserveID) {continue}

            result.push({...q, reservaID: reserveID});
            
        }
        console.log(result)

        res.status(200).json({
            message: "Reserva feita com sucesso!",
            pedidoID: pedidoID,
            reservas: result
        });

    }
    catch (error) {
        console.log(error);
        return res.status(400).json({error: "Reserva não concluída!"})
    }


}

export default {
    createOrder
}