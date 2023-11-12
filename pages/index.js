import Head from 'next/head'
import { getServerSession } from "next-auth/next"
import { authOptions } from './api/auth/[...nextauth]'
import { Inter } from '@next/font/google'
import { FaUserFriends, FaMoneyBillWave, FaTwitter, FaBullhorn } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const faqs = [
  {
    question: "How do I sign up?",
    answer: "To sign up, click on the 'Get Started' button and follow the registration process. You will need to provide your email and create a password."
  },
  {
    question: "How can I connect my social media accounts?",
    answer: "After signing up and logging in, go to your profile settings. From there, you can link your social media accounts to your LikeMe profile."
  },
  {
    question: "How do I make a purchase?",
    answer: "Browse our services, select the one you want, and click 'Buy Now.' Follow the steps to complete the payment, and you're all set."
  },
  {
    question: "Can I become an influencer on LikeMe?",
    answer: "Yes, you can! We welcome influencers to join our platform. Contact our support team to learn more about becoming an influencer on LikeMe."
  }
];

const testimonials = [
  {
    name: "John Doe",
    comment: "I've been using LikeMe for a while, and it has significantly boosted my social media presence. Highly recommended!"
  },
  {
    name: "Jane Smith",
    comment: "LikeMe offers an easy and efficient way to get likes and tweets from famous people. It's a game-changer!"
  },
  {
    name: "Mike Johnson",
    comment: "The customer support at LikeMe is excellent. They are always there to assist and provide solutions."
  }
];

export default function Home() {

  const [testimonialVisibility, setTestimonialVisibility] = useState(Array(testimonials.length).fill(false));

  const toggleTestimonial = (index) => {
    const newVisibility = [...testimonialVisibility];
    newVisibility[index] = !newVisibility[index];
    setTestimonialVisibility(newVisibility);
  };

  return (
    <>
      <Head>
        <title>LikeMe</title>
        <meta name="description" content="Buy Exposure, Get Famous." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-custom-bg min-h-screen">
        <Header/>

        <main className="container mx-auto p-4">
          <section className="text-center">
          <img src="1.png" className='h-80 m-auto' alt="LikeMe Logo" />
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Buy Likes and Tweets from Famous People</h1>
            <p className="text-lg text-gray-600">Get noticed and boost your social media presence.</p>
            <Link href={"/sign-up"}>
              <button className="bg-custom-accent text-white font-semibold rounded-md px-6 py-2 mt-4 hover:bg-opacity-80">Get Started</button>
            </Link>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Product Cards */}
            {/* You can create product cards for your services here */}
            {/* Example:
            <div className="bg-white shadow-md p-4 rounded-md">
              <h2 className="text-xl font-semibold text-gray-800">Service Name</h2>
              <p className="text-gray-600">Service description goes here.</p>
              <button className="bg-custom-accent text-white font-semibold rounded-md px-4 py-2 mt-4 hover:bg-opacity-80">Buy Now</button>
            </div>
            */}
          </section>
          
          {/* About Section */}
          <section className="mt-8 p-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Step 1 */}
              <div className="bg-white p-4 rounded-md flex items-center">
                <FaUserFriends className="text-3xl text-custom-accent mr-4" />
                <p className="text-lg text-gray-600">Step 1: Sign up</p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-4 rounded-md flex items-center">
                <FaMoneyBillWave className="text-3xl text-custom-accent mr-4" />
                <p className="text-lg text-gray-600">Step 2: Connect social media</p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-4 rounded-md flex items-center">
                <FaTwitter className="text-3xl text-custom-accent mr-4" />
                <p className="text-lg text-gray-600">Step 3: Pay influencer</p>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-4 rounded-md flex items-center">
                <FaBullhorn className="text-3xl text-custom-accent mr-4" />
                <p className="text-lg text-gray-600">Step 4: Get famous</p>
              </div>
            </div>
          </section>
          <section className="mt-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border p-4 rounded-md shadow-md bg-white cursor-pointer">
                  <div onClick={() => toggleTestimonial(index)} className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-xl font-medium text-gray-800">{faq.question}</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 transform transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={testimonialVisibility[index] ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
                      />
                    </svg>
                  </div>
                  <p className={`text-gray-600 ${testimonialVisibility[index] ? 'block' : 'hidden'}`}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Customer Testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-4 rounded-md shadow-md">
                  <p className="text-gray-600">{testimonial.comment}</p>
                  <p className="text-gray-800 mt-2 font-semibold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

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
