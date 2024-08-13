import React from "react";
import Head from "next/head";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <Head>
        <title>Blog - My Website</title>
        <meta name="description" content="My blog page" />
      </Head>
      <div>
        <h1>Blog</h1>
        <p>Welcome to my blog page! we will be posting content very soon!!!</p>
        {/* Add your blog content here */}
        <Link href="/">
          <p
            style={{
              display: "inline-block",
              padding: "10px 20px",
              marginTop: "20px",
              backgroundColor: "#0070f3",
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            Back to my portfolio
          </p>
        </Link>
      </div>
    </>
  );
};

export default Page;
