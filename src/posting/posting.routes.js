import { Router } from "express";
import { check } from "express-validator";
import { publicationsGet, publicationsPut, publicationsGetById } from "./posting.controller.js";

const router = Router();

router.get('/posting', publicationsGet);

router.get('/posting/:id', publicationsGetById);

router.put('/posting/:id', [
    check('id', 'No es un ID válido').isMongoId(),
], publicationsPut);

export default router;

