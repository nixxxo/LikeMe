import { db } from "../prismadb";
import stripe from "../../services/stripe";


export async function CreateProuct(influencer_id, type, price) {

    const influencer = await db.influencers.findUnique({
        where:{
            id:influencer_id
        }
    })

    
    const product = await stripe.products.create({
        name: parseInt(type) == 1 ? `Like from ${influencer.name}` : `Comment from ${influencer.name}`,
    });

    const product_price = await stripe.prices.create({
        unit_amount: parseInt(price)*100,
        currency: 'usd',
        product: product.id,
    });

    const product_log = await db.product.create({
        data: {
            influencer_id: influencer.id,
            product_stripe_id: product.id,
          },
    })

    return product_log;

}