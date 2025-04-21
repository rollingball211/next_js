import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req : NextApiRequest,
    res : NextApiResponse
){
    try{
        await res.revalidate('/') //응답을 받았을 때 어떤 페이지 revalidate?
        return res.json({ revalidate : true});
    } catch (err) {
        res.status(500).send("Revalidation failed"); 
    }
}