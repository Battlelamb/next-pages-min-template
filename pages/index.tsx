import { Container } from "@mantine/core"
import Base from "../components/Base/Base"
import { NextSeo } from 'next-seo'

export default function IndexPage() {
  return (
    <Container fluid style={{ margin: 0, padding: 0, width: '100%' }}>
      <NextSeo
        title="AltayChain - Your Trusted Partner for Quality, Price, Supply, and Service"
        description="AltayChain is established to provide the finest commodity products. We pride ourselves in manufacturing and delivering the highest quality commodities. We also make sure all our products undergo accredited independent quality assurance inspection testing. With AltayChain, you're not just choosing a supplier; you're choosing a partner in success."
      />
      <Base />
    </Container>
  )
}
