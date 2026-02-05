import { Request, Response, NextFunction } from "express";
import loginRepository from "../repositories/loginRepository"
import {validateHash} from "../utils/password";
import { createJWT } from "../utils/jwt";

async function postLogin(req:Request, res:Response, next:NextFunction) {
    const {email, senha} = req.body;

    if (!email || !senha) {
        return res.sendStatus(400).json({error: "Email e Senha são obrigatórios!"})
    }

    if (email.trim() === "" || senha.trim() === "") {
        return res.status(401).json({error: "Email e senha estão vazios"})
    }

    // Consulta no banco de dados
    try {
        const result = await loginRepository.validateLogin(email);
        if (!result) {
            throw new Error("Login incorreto!")
        }

        // Validar senha do login
        const resultPassword = await validateHash(senha, result.senha)
        if (!resultPassword) {
            throw new Error("Senha inválida!")
        }

        // Remover senha do objeto
        const {senha:_senha, ...cliente} = result

        // Cria o token do cliente
        const token = createJWT(cliente);

        return res.status(200).json({token});
    }
    catch (error) {
        console.log(error)
        return res.status(402).json({erro: "Credenciais inválidas!"})
    }
}

export default {
    postLogin
};

