import express from 'express';
import userRoutes from '../routes/usuarios';



class Server {

    private app: express.Application;
    private port:string;
    private apiPaths={
        usuarios:'/api/usuarios'
    }

    constructor() {
        this.app=express();
        this.port=process.env.PORT || '8081';
    
        //Middlewares

        //Rutas de mi aplicacion     
        this.routes();
    }
    routes(){
        this.app.use(this.apiPaths.usuarios,userRoutes)
    }


   /*  middlewares(){
        this.app.use(express.static():express.application)
    }

    routes(){
        this.app.get('/',(req,res)=>{
            res.json({
                ok:true,
                msg:'hola get'
        })
    })
   } */


    listen() {
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
    }
}

export default Server;