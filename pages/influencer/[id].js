import { GetAllInfluencersIds, GetInfluencerByName, GetInfluencerById } from "../../services/db/influencerFunctions";
import api from "../../utils/api";
import React, { useEffect, useState, Fragment } from "react";

export default function InfluencerAdmin({inflData}) {

  const [type, setType] = useState();
  const [price, setPrice] = useState();

  async function HandleCreationProduct(influencer_id) {
    try{
      const result = await api.post("/createProduct", {
        influencer_id: influencer_id,
        type:type,
        price:price
      })
    }
    catch(e){
      console.log(e)
    }
      
    }
    return (
        <>
          <h1>{inflData.name}</h1>
          <form>
            <input onChange={(e)=>setType(e.target.value)}></input>
            <input onChange={(e)=>setPrice(e.target.value)}></input>
          </form>
          <button onClick={(e)=>HandleCreationProduct(inflData.id)}>Create Product</button>
        </>
    )
  }
  
  export async function getStaticPaths() {
    const paths = await GetAllInfluencersIds();
    return {
      paths:paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }) {
    const inflData = await GetInfluencerByName(params.id);
    return {
      props: {
        inflData,
      },
    };
  }
  