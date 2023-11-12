import Head from 'next/head';
import { getServerSession } from "next-auth/next";
import { authOptions } from './api/auth/[...nextauth]';
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function SignIn() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();

  const handleSignIn = async () => {
    await signIn("google", { callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard` });
    router.push("/dashboard"); // Redirect to the dashboard after successful sign-in
  };

  return (
    <>
      <Head>
        <title>Sign In - LikeMe</title>
        <meta name="description" content="Sign in to LikeMe to access your account." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          {/* Centered content */}
          <div className='text-center'>
            {!session && !loading && (
              <>
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Sign In</h1>
                <button onClick={() => signIn("google")} className="bg-custom-accent text-white font-semibold rounded-md px-6 py-3 hover:bg-opacity-80">Sign In with Google</button>
              </>
            )}
            {session && (
              <>
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Signed in as {session.user.email}</h1>
                <button className="bg-custom-accent text-white font-semibold rounded-md px-6 py-3 hover:bg-opacity-80" onClick={() => signOut()}>Sign Out</button>
              </>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

