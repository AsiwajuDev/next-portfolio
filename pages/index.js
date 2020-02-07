import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout title="Home">
      {/* <h1>Home</h1> */}
      <h4>Welcome to the Home</h4>
      <Link href="/about">
        <a>Go to home</a>
      </Link>
    </Layout>
  );
};

export default Index;
