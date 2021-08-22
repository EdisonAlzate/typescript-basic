import { Router } from "express";
import { actualizarUsuario, eliminarUsuario, getUsuario, getUsuarios, postUsuario } from '../controllers/usuarios.controllers';

const router=Router();

router.get('/',          getUsuarios);
router.get('/:id',       getUsuario);
router.post('/',         postUsuario);
router.put('/:id',       actualizarUsuario);
router.delete('/:id',    eliminarUsuario);

export default router;