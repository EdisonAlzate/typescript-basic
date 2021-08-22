import { Request, Response } from "express";

export const getUsuarios = (req: Request, res: Response) => {
    res.json({
        msg: 'getUsuarios'
    })
}

export const getUsuario = (req: Request, res: Response) => {

    const {id}=req.params;

    res.json({
        msg: 'getUsuario',
        id
    })
}

export const postUsuario = (req: Request, res: Response) => {
    
    const {body}=req;
    res.json({
        msg: 'crearUsuarios',
        body
    })
}

export const actualizarUsuario = (req: Request, res: Response) => {
    const{body}=req;
    const {id}=req.params;    
    
    res.json({
        msg: 'actualizarUsuario'
    })
}

export const eliminarUsuario = (req: Request, res: Response) => {
    
    const {id}=req.params;    

    res.json({
        msg: 'eliminarUsuario',
        id
    })
}
