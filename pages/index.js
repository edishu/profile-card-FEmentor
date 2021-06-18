import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-pattern-top flex justify-center items-center">
      <Head>
        <title>Frontend Mentor | Profile card component</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="w-1/4 h-96 bg-gray-100 rounded-xl">
        <div className="h-4/5 flex flex-col justify-center items-center">
          <img className="rounded-full" src="/image-victor.jpg" alt="Victor" />
          <div className="mt-8 text-center">
            <span className="text-lg font-bold mr-2">Victor Crest</span>
            <span className="text-lg font-normal text-gray-500">26</span>
            <div>London</div>
          </div>
        </div>

        <div>
          <span>
            <div>80K</div> <div>Followers</div>
          </span>
          <span>
            <div>803K</div> <div>Likes</div>
          </span>
          <span>
            <div>1.4K </div> <div>Photos</div>
          </span>
        </div>
      </div>
    </div>
  );
}
