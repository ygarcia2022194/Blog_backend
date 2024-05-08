import {response, request} from "express";
import Posting from "./posting.model.js";

export const postingPost = async(req, res) =>{
    const {titulo, categoria, texto, image} = req.body;
    const posting = new Posting({titulo, categoria, texto, image});

    await posting.save();

    res.status(200).json({
        posting
    });
}

export const postingGet = async (req = request, res = response)=>{
    const {limite, desde} = req.query;
    const query = {estado: true};

    const [total, posting] = await Promise.all([
        Posting.countDocuments(query),
        Posting.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        posting
    });
}

export const getPostById = async (req, res)=>{
    const {id} = req.params;
    const post = await Posting.findOne({_id: id});
    res.status(200).json({
        post
    });
}

