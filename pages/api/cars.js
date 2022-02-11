
import {createForm } from '../../lib/redis';

export default async function handler(req, res)  {
    const id = await createForm(req.body);
    console.log(id)
    res.status(200).json({ id })
}