import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

// Rota = conjunto
// Recurso = usuario
// Metodos HTTP = GET, POST, PUT, DELETE
//    GET => Buscar uma informacao (lista, item)
//    POST => Criando informacao
//    PUT => Editando uma informacao
//    DELETE => Delentando uma informacao
// Parametros
// Query Params: http://localhost:3333/users?search=tiago
// Route Params: PUT/DELETE http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users/1 (Identificar um recurso)

// M-> Model V-> View C-> Controller

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;
