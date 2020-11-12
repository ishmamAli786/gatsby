import React from "react"
import { Router } from "@reach/router"
import Layout from "../component/Layout";
import ProductOne from "../component/productOne";
import ProductTwo from "../component/productTwo";
import Main from "../component/main";
import {Link} from 'gatsby';

const Product = () => {
    return (
        <Layout>
            <h1>See Product</h1>
            <div>
                <Link to="/product/productOne">Product 1</Link><br></br>
                <Link to="/product/productTwo">Product 2</Link><br></br>
            </div>
            <Router basepath="/product">
                <ProductOne path="/productOne" />
                <ProductTwo path="/productTwo" />
                <Main path="/" />
            </Router>
        </Layout>
    )
}
export default Product;