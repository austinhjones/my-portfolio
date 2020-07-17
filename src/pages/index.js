import AboutPage from "./about"
import { Container } from "../css/global-styles"
import HomePage from "./home"
import Menu from "../components/Menu"
import React from "react"

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link> <br />
  //   <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  // </Layout>

  // <div id="app">
  //   <SEO title="HOME" />
  //   Hello, world
  // </div>
  // <div style={{ width: "100%", height: "100%", backgroundColor: "#D17575" }}>
  <Container>
    {/* <Menu /> */}
    <HomePage />
    <AboutPage />
  </Container>
)

export default IndexPage
