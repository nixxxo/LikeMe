import Head from 'next/head'
import { getServerSession } from "next-auth/next"
import { authOptions } from './api/auth/[...nextauth]'
import { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import React from "react";
import { ImageTrailHero } from '../components/Hero';
import Features from '../components/Features';
import { TabsFAQ } from '../components/Faq';


export default function Home() {

  return (
    <>
      <Head>
        <title>LikeMe</title>
        <meta name="description" content="Buy Exposure, Get Famous." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-custom-bg min-h-screen">
        <ImageTrailHero/>
        <Features/>
        <TabsFAQ/>
        <Footer/>
      </div>
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      session: await getServerSession(req, res, authOptions)
    }
  }
}
