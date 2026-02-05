import { Request, Response, NextFunction } from "express";
import registerRepository from "../repositories/registerRepository";
import { validateHash } from "../utils/password";

async function postRegister(req:Request, res:Response, next:NextFunction) {
    const {nome, email, telefone, cpf, senha} = req.body;

    if (!nome || !email || !telefone || !cpf || !senha) {
        return res.sendStatus(400).json({error: "Os dados do cadastro são obrigatórios!"})
    }

    if (nome.trim() === "" || email === "" || telefone.trim() === "" || cpf.trim() === "" || senha.trim() === "") {
        return res.status(401).json({error: "Os dados estão vazios, preencha os dados obrigatórios"})
    }


    try {
        const result = await registerRepository.validateRegister(nome, email, telefone, cpf, senha);
        if (!result) {
            throw new Error("Erro ao cadastrar")
        }

        const resultPassword = await validateHash(senha, result.senha)
    }
    catch {

    }
}

export default {
    postRegister
};