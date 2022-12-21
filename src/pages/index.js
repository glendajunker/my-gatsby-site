import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby tutorial.</p>
            <StaticImage alt="audibene logo" src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"></StaticImage>
        </Layout>
    );
};

export const Head = () => (
    <>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
    </>
);

export default IndexPage;
