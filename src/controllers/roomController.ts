import { Request, Response, NextFunction } from "express";
import roomRepository from "../repositories/roomRepository";

async function available(req:Request, res:Response, next:NextFunction) {
    const {inicio, fim, quantidade} = req.body;

    if (!inicio || !fim || !quantidade) {
        return res.status(400).json({error: "Preencha os campos para consulta!"})
    }
    
    const data = {inicio, fim, quantidade}
    try {
        let quartos = await roomRepository.availables(data);

        if (!quartos) { throw new Error("Erro ao buscar os quartos!")}

        for (let q of quartos) {
            const imagens = await roomRepository.searchImagesById(q.id);
            q.imagens = imagens
        }

        res.status(200).json(quartos);

    }
    catch (error) {
        console.log(error)
        return res.status(400).json({erro: "Erro ao buscar os quartos!"})
    }
}

export default {
    available
}
