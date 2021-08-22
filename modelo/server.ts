import express from 'express';
import userRoutes from '../routes/usuarios';
import cors from 'cors'
import { dbConnection } from '../database/config.db';


class Server {

    private app: express.Application;
    private port:string;
    private apiPaths={
        usuarios:'/api/usuarios'
    }

    constructor() {
        this.app=express();
        this.port=process.env.PORT || '8081';

        //Conectar a base de datos 
        this.conectarDB();
        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion     
        this.routes();
    }

    //Conectar base de datos
    async conectarDB(){
       await dbConnection();
    }

    routes(){
        this.app.use(this.apiPaths.usuarios,userRoutes)
    }


    middlewares(){

        //CORS
        this.app.use(cors());

        //Lectura del body
        this.app.use(express.json())

        //carpeta publica
        this.app.use(express.static('public'))
    }

    


    listen() {
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
    }
}

export default Server;