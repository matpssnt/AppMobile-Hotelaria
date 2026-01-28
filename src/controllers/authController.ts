import { Request, Response, NextFunction } from "express";

async function postLogin(req:Request, res:Response, next:NextFunction) {
    try {
        const {email, password} = req.body;

        console.log("Email: fulano@email.com");
        console.log("Password: 123456789");

        return res.status(200).json({
            message: "Dados recebidos com sucesso",
            data: {
                email,
                password
            }
        });
    }
    catch (error) {
        console.log("Erro ade login: ", error)

        res.status(400).json({
            error: "Erro ao tentar logar"
        })
    }
}

export default {
    postLogin
};

