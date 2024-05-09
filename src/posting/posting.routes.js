import { Router } from "express";
import { check } from "express-validator";
import { postingPost, getPostById, postingGet } from "./posting.controller.js";

const router = Router()

router.post(
    '/',
    [
        check('titulo', 'El titulo es necesario').not().isEmpty(),
        check('categoria', 'la categoria es necesaria').not().isEmpty(),
        check('texto', 'El texto es necesario').not().isEmpty(),
        check('image', 'la imagen es necesaria').isURL()
    ], postingPost)

router.get('/', postingGet)

router.get('/:id', getPostById)

export default router;