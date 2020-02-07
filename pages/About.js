import Link from "next/link";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="About">
      {/* <h1>About</h1> */}
      <Link href="/">
        <a>Go to home</a>
      </Link>
      <p> Testing About</p>
      <img src="/static/javascript.png" alt="javascript-logo" />
    </Layout>
  );
};

export default About;
