
import { db } from "../prismadb"

export async function GetInfluencerById(id) {
    const influencers = await db.influencers.findUnique({
        where:{
            id:id
        }
    })

    return influencers
}

export async function GetInfluencerByName(name) {
    const influencers = await db.influencers.findMany({
        where:{
            name:{
                contains: name,
                mode: 'insensitive'
            },
        }
    })

    return influencers[0]
}

export async function GetAllInfluencersIds() {
    const influencers = await db.influencers.findMany({})

    var paths = []

    for await (const influencer of influencers) {
        paths.push( {params: { id: influencer.name.toLowerCase() }})
      }

    console.log("🚀 ~ file: getInfluencers.js:27 ~ GetAllInfluencersIds ~ paths", paths)
    return paths
}

