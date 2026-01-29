import { Request, Response, NextFunction } from "express";

async function postLogin(req:Request, res:Response, next:NextFunction) {
    try {
        console.log("Informações recebidas: ", req.body)
        return res.sendStatus(201)
    }
    catch (error) {
        console.log("Erro")
        return res.sendStatus(405)
    }
}

export default {
    postLogin
};

