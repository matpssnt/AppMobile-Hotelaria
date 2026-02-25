import { Request, Response, NextFunction } from "express";
import loginRepository from "../repositories/loginRepository"
import { validateHash, generateHash } from "../utils/password";
import { createJWT } from "../utils/jwt";

async function postLogin(req:Request, res:Response, next:NextFunction) {
    const {email, senha} = req.body;

    if (!email || !senha) {
        return res.status(400).json({error: "Email e Senha são obrigatórios!"})
    }

    if (email.trim() === "" || senha.trim() === "") {
        return res.status(400).json({error: "Email e senha estão vazios"})
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

        return res.status(200).json(token);
    }
    catch (error) {
        return res.status(401).json({erro: "Credenciais inválidas!"})
    }
}

async function postRegister(req:Request, res:Response, next:NextFunction) {
    const {nome, email, telefone, cpf, senha} = req.body;

    if (!nome || !email || !telefone || !cpf || !senha) {
        return res.status(400).json({error: "Os dados do cadastro são obrigatórios!"})
    }

    if (nome.trim() === "" || email.trim() === "" || telefone.trim() === "" || cpf.trim() === "" || senha.trim() === "") {
        return res.status(400).json({error: "Os dados estão vazios, preencha os dados obrigatórios"})
    }


    try {
        const passwordHash = await generateHash(senha);
        const register = {nome, email, telefone, cpf, senha:passwordHash};
        const result = await loginRepository.createRegister(register)

        if (!result) {
            throw new Error("Erro na criação do login")
        }

        const {senha:_senha, cpf:_cpf, telefone:_tel, ...cliente} = result

        const token = createJWT(cliente)
        return res.status(200).json(token)
    }
    catch (error) {
        console.log("Erro", error)
        return res.status(400).json({erro: "Erro ao criar Login"})
    }
}

export default {
    postLogin, postRegister
};

