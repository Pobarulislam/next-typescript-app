import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import styles from "@/styles/app.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
       <Head>
        <title>NextJS News App</title>
        <meta name="description" content="Pobarul islam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.pageContainer}>
        <Component {...pageProps} />
         </Container>
    </div>
  )
}
