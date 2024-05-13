import {response, request} from "express";
import Publication from "./posting.model.js";

export const publicationsPost = async (req, res) => {
    const publi = await Publication.find();

    if (publi.length === 0) {
        const publication = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Creación de página web",
            categoria: "Taller",
            texto: "Se realizo una api con nodejsy express de un registro de ventas que se le añadio un carrito de compras y un login",
            tools: "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            imagePrincipal: "https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2020/05/Logo.png?resize=1024%2C528&ssl=1",
            link: "https://github.com/ygarcia2022194/Agenda_Web.git"
        })

        const publication2 = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Sistema de adopción de mascotas",
            categoria: "Taller",
            texto: "Proyecto de adopcion de mascotas deberá completar el proyecto visto en clase denominado Adopción de mascotas.",
            tools: "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            imagePrincipal: "https://www.muniguate.com/wp-content/uploads/2022/02/274596183_5283312415036223_3747996292665075720_n.jpg",
            link: "https://github.com/ygarcia2022194/Laboratorio-2_api.git"
        })
        const publication3 = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Proyecto Gestor de Empresas",
            categoria: "Taller",
            texto: "se requiere la creación de una API robusta utilizando Node.js, Express y MongoDB. Esta API permitirá a las empresas registrar sus datos, incluyendo información crucial como su nivel de impacto, años de trayectoria y categoría empresaria",
            tools: "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            imagePrincipal: "https://www.yunbitsoftware.com/blog/wp-content/uploads/2018/02/154092-OUD9IM-908-e1519685852364.jpg",
            link: "https://github.com/ygarcia2022194/gestor_empresas.git"
        })
        const publication4 = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Ventas Online",
            categoria: "Taller",
            texto: "Este proyecto se centra en el desarrollo de una API web implementada en NodeJS, destinada a gestionar el registro de ventas, productos en línea y otras operaciones comerciales de una empresa.",
            tools: "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            imagePrincipal: "https://ilioon.com/wp-content/uploads/2021/05/ventas-online.png",
            link: "https://github.com/ygarcia2022194/Proyecto-Bimestre.git"
        })
        const publication5 = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Agenda Web",
            categoria: "Practica Supervisada",
            texto: "Creacion de pagina web con html, css, javascript de contactos, login, lista de contactos, y un TodoList de tareas.",
            tools: "Se utilizo HTML, JAVASCRIPT Y CSS",
            imagePrincipal: "https://www.hubspot.com/hubfs/Imported%20sitepage%20images/schedule-meeting-ES-2.png",
            link: "https://github.com/ygarcia2022194/Agenda_Web.git"
        })
        const publication6 = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Proyecto Control Académico",
            categoria: "Practica Supervisada",
            texto: "El proyecto consiste en una aplicación de ambiente web (solamente Backend) la cual servirá para: poder llevar el Control de Alumnos de un Centro Educativo.",
            tools: "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            imagePrincipal: "https://www.controlacademico.com/images/logonewca.png",
            link: "https://github.com/ygarcia2022194/Control_Academico.git"
        })
        const publication7 = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Desarrollo de aplicación web “Almacenadora”.",
            categoria: "Practica Supervisada",
            texto: "Proyecto de gestion de tareas de una almacenadora, donde se puedan agregar, listar, editar y eliminar tareas de una forma comoda para el usuario.",
            tools: "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose y react",
            imagePrincipal: "https://d29jy8ovkd5kcx.cloudfront.net/wp-content/uploads/2021/12/20142135/Software-de-gestion-de-almacenes.jpg",
            link: "https://github.com/jjimenez2022152/Backend_Almacenadora.git"
        })
        await publication.save();
        await publication2.save();
        await publication3.save();
        await publication4.save();
        await publication5.save();
        await publication6.save();
        await publication7.save();
    } else {
        console.log('Publications already exist');
    };
};

export const publicationsGet = async (req, res) => {
    const publications = await Publication.find();
    res.json(publications);
};

export const publicationsGetById = async (req, res) => {
    const { id } = req.params;
    const publication = await Publication.findById(id);
    res.json(publication);

}

export const publicationsPut = async (req, res) => {
    const { id} = req.params;
    const { _id, author, title, texto, tools, image, link, ...rest} = req.body;
    const addComment = { ...rest};
    await Publication.findByIdAndUpdate(id, { $push: { comments: addComment } });
    res.status(200).json({ msg: "Comment added" });
};

