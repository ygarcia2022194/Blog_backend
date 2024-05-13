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
            image: "https://www.google.com/imgres?q=pagina%20html&imgurl=https%3A%2F%2Fwww.neolo.com%2Fblog%2Fwp-content%2Fuploads%2F2020%2F11%2Fhtml-pagina-1.jpg&imgrefurl=https%3A%2F%2Fwww.neolo.com%2Fblog%2Fcomo-crear-una-pagina-web-desde-cero-en-html.php&docid=gfSFzU9SMe17hM&tbnid=JsnqxXDZfkLDlM&vet=12ahUKEwjQmvTJu_-FAxUGSDABHd_VCmUQM3oECC0QAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwjQmvTJu_-FAxUGSDABHd_VCmUQM3oECC0QAA",
            link: "https://github.com/ygarcia2022194/Agenda_Web.git"
        })

        const publication2 = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Sistema de adopción de mascotas",
            categoria: "Taller",
            texto: "Proyecto de adopcion de mascotas deberá completar el proyecto visto en clase denominado Adopción de mascotas.",
            tools: "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            image: "https://www.google.com/imgres?q=aplicacion%20de%20adopcion%20de%20mascotas&imgurl=https%3A%2F%2Fbloygo.yoigo.com%2Fembed%2F3ee44480bea185ef3b224cad992bf2d72981659519640%2Fchuby-mascotas.jpg.jpg%3Fimagick%3D1%26size%3D750&imgrefurl=https%3A%2F%2Fbloygo.yoigo.com%2Fmejores-aplicaciones-para-adoptar-perros-y-gatos%2F&docid=mUzxIvyk12dCrM&tbnid=C3CoRnzUWF-GvM&vet=12ahUKEwihqsDRvf-FAxXUVTABHea3B64QM3oECFwQAA..i&w=859&h=483&hcb=2&ved=2ahUKEwihqsDRvf-FAxXUVTABHea3B64QM3oECFwQAA",
            link: "https://github.com/ygarcia2022194/Laboratorio-2_api.git"
        })
        const publication3 = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Proyecto Gestor de Empresas",
            categoria: "Taller",
            texto: "se requiere la creación de una API robusta utilizando Node.js, Express y MongoDB. Esta API permitirá a las empresas registrar sus datos, incluyendo información crucial como su nivel de impacto, años de trayectoria y categoría empresaria",
            tools: "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            image: "https://www.google.com/imgres?q=aplicacion%20gestora%20de%20empresas&imgurl=https%3A%2F%2Fwww.yunbitsoftware.com%2Fblog%2Fwp-content%2Fuploads%2F2018%2F02%2F154092-OUD9IM-908-e1519685852364.jpg&imgrefurl=https%3A%2F%2Fwww.yunbitsoftware.com%2Fblog%2F2018%2F02%2F27%2Fsoftware-de-gestion-empresarial-y-sistemas-erp-alguna-diferencia%2F&docid=DBqIphWjl1cHSM&tbnid=fzQpshloHFFSvM&vet=12ahUKEwiRx4mZwf-FAxV7RDABHZQ4A8AQM3oECGIQAA..i&w=1980&h=1115&hcb=2&ved=2ahUKEwiRx4mZwf-FAxV7RDABHZQ4A8AQM3oECGIQAA",
            link: "https://github.com/ygarcia2022194/gestor_empresas.git"
        })
        const publication4 = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Ventas Online",
            categoria: "Taller",
            texto: "Este proyecto se centra en el desarrollo de una API web implementada en NodeJS, destinada a gestionar el registro de ventas, productos en línea y otras operaciones comerciales de una empresa.",
            tools: "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            image: "https://www.google.com/imgres?q=aplicacion%20gestora%20de%20ventas&imgurl=https%3A%2F%2Fwww.questionpro.com%2Fblog%2Fwp-content%2Fuploads%2F2022%2F02%2FPortada-gestion-de-puntos-de-venta.jpg&imgrefurl=https%3A%2F%2Fwww.questionpro.com%2Fblog%2Fes%2Fgestion-del-punto-de-venta%2F&docid=1Rf56ci5aEyNCM&tbnid=ha4owX6_KgT41M&vet=12ahUKEwiprbmfzv-FAxVIVTABHa55AuwQM3oECGUQAA..i&w=900&h=600&hcb=2&ved=2ahUKEwiprbmfzv-FAxVIVTABHa55AuwQM3oECGUQAA",
            link: "https://github.com/ygarcia2022194/Proyecto-Bimestre.git"
        })
        const publication5 = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Agenda Web",
            categoria: "Practica Supervisada",
            texto: "Creacion de pagina web con html, css, javascript de contactos, login, lista de contactos, y un TodoList de tareas.",
            tools: "Se utilizo HTML, JAVASCRIPT Y CSS",
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fagendapro.com%2Fmx%2Fagenda-online&psig=AOvVaw2PPqQzCEugwox-cUWlWV6S&ust=1715311579363000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLiyrePP_4UDFQAAAAAdAAAAABAE",
            link: "https://github.com/ygarcia2022194/Agenda_Web.git"
        })
        const publication6 = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Proyecto Control Académico",
            categoria: "Practica Supervisada",
            texto: "El proyecto consiste en una aplicación de ambiente web (solamente Backend) la cual servirá para: poder llevar el Control de Alumnos de un Centro Educativo.",
            tools: "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fagendapro.com%2Fmx%2Fagenda-online&psig=AOvVaw2PPqQzCEugwox-cUWlWV6S&ust=1715311579363000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLiyrePP_4UDFQAAAAAdAAAAABAE",
            link: "https://github.com/ygarcia2022194/Control_Academico.git"
        })
        const publication7 = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Desarrollo de aplicación web “Almacenadora”.",
            categoria: "Practica Supervisada",
            texto: "Proyecto de gestion de tareas de una almacenadora, donde se puedan agregar, listar, editar y eliminar tareas de una forma comoda para el usuario.",
            tools: "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose y react",
            image: "https://www.google.com/imgres?q=gestion%20de%20tareas&imgurl=https%3A%2F%2Fblogs.iadb.org%2Fconocimiento-abierto%2Fwp-content%2Fuploads%2Fsites%2F10%2F2016%2F09%2FTask-Management1.jpg&imgrefurl=https%3A%2F%2Fblogs.iadb.org%2Fconocimiento-abierto%2Fes%2F4-herramientas-abiertas-y-gratuitas-para-la-gestion-de-tareas-en-equipo%2F&docid=wHhn9xwxTNj2ZM&tbnid=m-pZMRnrEDDKAM&vet=12ahUKEwjP7_G01f-FAxW6goQIHRuDAS8QM3oECGIQAA..i&w=902&h=508&hcb=2&ved=2ahUKEwjP7_G01f-FAxW6goQIHRuDAS8QM3oECGIQAA",
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

