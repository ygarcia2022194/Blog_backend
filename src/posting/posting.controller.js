import {response, request} from "express";
import Publication from "./posting.model.js";

export const publicationsPost = async (req, res) => {
    const publi = await Publication.find();

    if (publi.length === 0) {
        const publication = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Creación de página web",
            categoria: "Taller",
            texto: "Creacion de una serie de páginas HTML con su respectivo CSS, son tres vistas (documentos html).La primera página es sobre los gustos personales de una persona, Esta es la páginaprincipal en donde explica estos mismos gustos y por qué le gusta, el tiempo que se le dedica, y más información. La segunda página muestra una biografía básica y qué se espera de este año educativo, esto incluye tiempo, habilidades, etc. Para la tercera hay una pagina donde se mejora el diseño de la pagina de Kinal, basandose en ella y explicando porque ese diseño es mejor al que se tine en la pagina oficial.",
            tools: "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            imagePrincipal: "https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2020/05/Logo.png?resize=1024%2C528&ssl=1",
            link: "https://github.com/ygarcia2022194/Agenda_Web.git"
        })

        const publication2 = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Sistema de adopción de mascotas",
            categoria: "Taller",
            texto: "Este es un proyecto que tiene como objetivo principal facilitar la adopción de mascotas abandonadas y rescatadas, promoviendo la tenencia responsable de animales de compañía. Este proyecto se centra en encontrar hogares amorosos y permanentes para perros y gatos que han sido abandonados, maltratados o que se encuentran en refugios de animales. Los principales componentes de este proyecto incluyen: Plataforma de adopción en línea: Desarrollo y mantenimiento de un sitio web donde se puedan listar perfiles detallados de mascotas disponibles para adopción. Eventos de adopción: Organización de eventos periódicos de adopción en colaboración con refugios de animales, tiendas de mascotas y otros socios comunitarios. Proceso de selección de adoptantes: Establecimiento de un proceso de solicitud y selección de adoptantes para garantizar que las mascotas sean colocadas en hogares adecuados y amorosos Programas de educación y sensibilización: Implementación de programas educativos dirigidos a la comunidad sobre la importancia de la adopción responsable, el cuidado adecuado de las mascotas, la esterilización y castración, así como la prevención del abandono animal. Seguimiento post-adopción: Establecimiento de un sistema de seguimiento y apoyo post-adopción para brindar asistencia continua a los nuevos propietarios de mascotas.",
            tools: "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            imagePrincipal: "https://www.muniguate.com/wp-content/uploads/2022/02/274596183_5283312415036223_3747996292665075720_n.jpg",
            link: "https://github.com/ygarcia2022194/Laboratorio-2_api.git"
        })
        const publication3 = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Proyecto Gestor de Empresas",
            categoria: "Taller",
            texto: "El sistema gestor de empresas es una solución integral diseñada para facilitar la gestión eficiente de todos los aspectos operativos, administrativos y financieros de una empresa. Este sistema tiene como objetivo principal optimizar los procesos internos, mejorar la productividad y aumentar la rentabilidad de la empresa. y categoría empresaria. Los principales componentes de este sistema incluyen: Gestión de clientes y proveedores: Funcionalidades para registrar y gestionar la información de clientes y proveedores, incluyendo datos de contacto, historial de transacciones y comunicaciones. Gestión de inventario: Herramientas para controlar el inventario de productos y materiales, incluyendo la gestión de existencias, pedidos de compra, recepción de mercancías y seguimiento de movimientos de inventario. Gestión de ventas y facturación: Funcionalidades para gestionar el proceso de ventas, desde la generación de cotizaciones y pedidos hasta la emisión de facturas y el seguimiento de pagos pendientes. Gestión financiera: Herramientas para llevar un registro preciso de los ingresos y gastos de la empresa, así como para generar informes financieros, realizar análisis de rentabilidad y gestionar el flujo de caja. Gestión de recursos humanos: Funcionalidades para administrar el personal de la empresa, incluyendo la gestión de nóminas, el control de asistencia, la evaluación del desempeño y el seguimiento de la capacitación. Gestión de proyectos: Herramientas para planificar, organizar y supervisar proyectos, asignar tareas, gestionar recursos y realizar un seguimiento del progreso.",
            tools: "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            imagePrincipal: "https://www.yunbitsoftware.com/blog/wp-content/uploads/2018/02/154092-OUD9IM-908-e1519685852364.jpg",
            link: "https://github.com/ygarcia2022194/gestor_empresas.git"
        })
        const publication4 = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Ventas Online",
            categoria: "Taller",
            texto: "Este proyecto se centra en el desarrollo de una API web implementada en NodeJS, destinada a gestionar el registro de ventas, productos en línea y otras operaciones comerciales de una empresa. La aplicación se estructura en dos secciones principales, administrador y cliente, cada uno con funcionalidades específicas las cuales se detallan a continuación: Gestión de productos: Esta función engloba la capacidad de agregar nuevos productos a la base de datos, visualizar tanto productos individuales como el catálogo completo, editar detalles específicos de un producto, llevar un control exhaustivo del inventario, identificar productos agotados, obtener información sobre los productos más vendidos, realizar modificaciones en la información del producto, y, finalmente, eliminar un producto. • Gestión de categorías: Se refiere a la posibilidad de agregar nuevas categorías a la base de datos, visualizar todas las categorías existentes, realizar ediciones en la información de una categoría y eliminarla. En caso de que un producto esté asociado a una categoría que se requiere eliminar, el sistema asegura que el producto se transfiera automáticamente a una categoría predeterminada. • Gestión de usuarios: Esta función permite agregar nuevos usuarios, modificar el rol al que pertenecen (Administrador [ADMIN] o Cliente [CLIENT]), editar la información de un usuario (sujeto a restricciones específicas para usuarios con rol cliente), así como eliminar usuarios (también sujeto a las restricciones mencionadas). • Gestión de facturas: Involucra la capacidad de editar una factura, con validación del stock para garantizar su actualización. Además, se incluyen funcionalidades para visualizar las facturas asociadas a usuarios específicos, así como los productos detallados en una factura. Cliente: • Autenticación de Usuario: Incluye la capacidad de iniciar sesión y/o registrarse, donde el registro automático asigna al usuario el rol de cliente. El acceso a todas las funciones descritas está condicionado a la autenticación exitosa mediante usuario y contraseña. • Exploración de Productos: Permite a los usuarios visualizar el catálogo de productos más vendidos, buscar productos por nombre, explorar las categorías existentes y acceder al catálogo de productos filtrado por categoría. • Gestión de Carrito de Compras: Habilita la opción de agregar productos al carrito de compras para su posterior adquisición. • Proceso de Compra: Permite a los usuarios completar el proceso de compra, presentando una factura detallada como resultado de la transacción. • Historial de Compra: Al iniciar sesión, los usuarios pueden acceder a un historial completo de sus compras anteriores. • Gestión de perfil: Ofrece la posibilidad de editar detalles del perfil del usuario, como información personal y preferencias. • Eliminación de Cuenta: Permite a los usuarios eliminar su cuenta, sujeto a confirmación y medidas de seguridad adicionales. ",
            tools: "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            imagePrincipal: "https://ilioon.com/wp-content/uploads/2021/05/ventas-online.png",
            link: "https://github.com/ygarcia2022194/Proyecto-Bimestre.git"
        })
        const publication5 = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Agenda Web",
            categoria: "Practica Supervisada",
            texto: "Una agenda web es una herramienta en línea diseñada para ayudar a los usuarios a organizar y administrar sus actividades, eventos y tareas diarias de manera eficiente. Proporciona un espacio centralizado donde los usuarios pueden registrar, planificar y realizar un seguimiento de sus compromisos personales y profesionales desde cualquier dispositivo con acceso a Internet. Una agenda web ofrece flexibilidad y conveniencia para usuarios en movimiento al ser accesible desde cualquier lugar con conexión a Internet.",
            tools: "Se utilizo HTML, JAVASCRIPT Y CSS",
            imagePrincipal: "https://www.hubspot.com/hubfs/Imported%20sitepage%20images/schedule-meeting-ES-2.png",
            link: "https://github.com/ygarcia2022194/Agenda_Web.git"
        })
        const publication6 = new Publication({
            autor: "Yojhan Garcia",
            titulo: "Proyecto Control Académico",
            categoria: "Practica Supervisada",
            texto: "Un sistema gestor de almacenadoras es una solución informática diseñada para gestionar de manera eficiente el funcionamiento de almacenes y depósitos en diferentes tipos de empresas. Este sistema proporciona herramientas que permiten controlar y optimizar los procesos relacionados con el almacenamiento, la distribución y el seguimiento de inventario de productos. El sistema gestor de almacenadoras ofrece funcionalidades que permiten gestionar la recepción, el almacenamiento y la salida de mercancías, así como realizar un seguimiento preciso del inventario disponible en tiempo real. Además, facilita la organización y clasificación de productos en el almacén, la asignación de ubicaciones de almacenamiento, la gestión de pedidos y la preparación de envíos. Entre las características principales de un sistema gestor de almacenadoras se incluyen la generación de informes de inventario, el control de costos de almacenamiento, la optimización de rutas de distribución, la gestión de devoluciones y la integración con sistemas de gestión empresarial (ERP) u otros sistemas de información.",
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
    const { id } = req.params
    const { usuario, comment } = req.body;
    const nuevoComentario = { usuario: usuario, comment: comment};
    console.log(nuevoComentario);
await Publication.findByIdAndUpdate(id, { $push: { comentarios: nuevoComentario } });
    res.status(200).json({ message: "Comentario agregado" });
};

