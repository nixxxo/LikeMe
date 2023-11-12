import { CreateProuct } from "../../services/db/productsFunctions";

export default async function handler(req, res) {

    const data = req.body

    const product = await CreateProuct(data.influencer_id, data.type, data.price)

    try {

        if (product){
            res.status(200).json({ success: true, data:product });
        }
        else{
            res.status(200).json({ success: false });
        }
    } catch (error) {
      res.status(500).json({ success: false, error });
    }

   }