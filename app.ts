import dotenv from 'dotenv';

import  Server  from './modelo/server';

dotenv.config();

const server=new Server();
server.listen()


