import { search } from "../../lib/redis";


export default async function handler(req, res){
    const q = req.query.q;
    const search =  await search(q)
    res.status(200).json({search})
}