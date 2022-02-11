import { createfeedbackForm } from "../../lib/redis";

export default async function handler(req, res) {
    const ids = await createfeedbackForm(req.body);
    console.log(ids)
    res.status(200).json({ids})
}