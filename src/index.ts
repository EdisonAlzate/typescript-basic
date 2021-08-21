import express from 'express';

const app = express();
const port =8001;
 
app.get('/', (req, res)=> {
    res.send('Servidor con Typescript');
});
 
app.listen(port,()=>{
    return console.log(`Server corriendo en puerto : ${port}`)
});