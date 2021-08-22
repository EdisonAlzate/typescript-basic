import { Request, Response } from "express";
import Usuarios from "../modelo/usuario";

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

export const postUsuario =async (req: Request, res: Response) => {
    const {body}=req;
    const usuario=new Usuarios(body);
    await usuario.save()

    res.json({
        msg: 'crearUsuarios',
        usuario
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
