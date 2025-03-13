import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    const date = new Date() ; //현재 시간 객체
    res.json({time: date.toLocaleString()}); 
}

//시간 api