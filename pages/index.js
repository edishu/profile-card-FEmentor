import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Mentor | Profile card component</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      Victor Crest 26 London 80K Followers 803K Likes 1.4K Photos
      <div>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer noopener"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}
