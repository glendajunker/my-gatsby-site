import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend dui non metus ultricies bibendum. Cras tempor dapibus augue non finibus. Suspendisse potenti. In dui nisl, aliquet
                non orci sed, sagittis pulvinar erat. Maecenas ut magna orci. Quisque eu neque sed magna luctus varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Quisque ultricies mollis sem et ullamcorper. Etiam sem leo, gravida eu euismod id, hendrerit ac turpis. In in dui ut odio efficitur dignissim convallis eget est. Mauris
                sed felis ultricies, condimentum tortor quis, molestie nisl.
            </p>
        </Layout>
    );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
