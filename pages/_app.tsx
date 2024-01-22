import "@mantine/core/styles.css"
import '@mantine/carousel/styles.css'
import Head from "next/head"
import { MantineProvider } from "@mantine/core"
import { theme } from "../theme"

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>AltayChain - Your Trusted Partner for Quality, Price, Supply, and Service</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon-16x16.png" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  )
}
