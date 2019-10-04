import React, { Component } from "react"
import { Link } from "gatsby"
import axios from 'axios'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import { getCarro } from "../service/get";

class IndexPage extends Component {

  state = {
    carroArray: []
  }

  getAllCarro = () => {
    
    const token = '54531609b7b5a6b9c0bd3ddb75d33223'

    axios.get(`/api/v1/climate/temperature/locale/:id?token=${token}`)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  componentDidMount = async () => {
    await this.getAllCarro()
  }


  render() {
    console.log(this.state)
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <button onClick={this.getAllCarro}>teste</button>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage
