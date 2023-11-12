import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    // `session` comes from `getServerSideProps` or `getInitialProps`.
    // Avoids flickering/session loading on first load.
    <SessionProvider session={session}>
      <div className="bg-bg-color">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}