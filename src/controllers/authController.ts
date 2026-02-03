import { Request, Response, NextFunction } from "express";
import loginRepository from "../repositories/loginRepository"

async function postLogin(req:Request, res:Response, next:NextFunction) {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.sendStatus(400).json({error: "Email e Senha são obrigatórios!"})
    }

    if (email.trim() === "" || password.trim() === "") {
        return res.status(400).json({error: "Email e senha estão vazios"})
    }

    try {
        const result = await loginRepository.validateLogin(email);
        if (!result) {
            throw new Error()
        }
        
        console.log(result.email)
        console.log(result.senha)
        return res.sendStatus(200);
    }
    catch (error) {
        return res.status(401).json({erro: "Credenciais inválidas!"})
    }
}

export default {
    postLogin
};

