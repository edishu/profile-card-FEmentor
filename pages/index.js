import Head from "next/head";

export default function Home() {
  return (
    <div
      className="min-h-screen min-w-screen 
    bg-primary bg-no-repeat bg-custom bg-pattern 
    flex justify-center items-center"
    >
      <Head>
        <title>Frontend Mentor | Profile card component</title>
        <link rel="icon" href="/favicon-32x32.png"></link>
      </Head>

      <div
        className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 h-96 rounded-xl divide-y 
       bg-gray-100 bg-pattern-card bg-repeat-x 
       text-gray-700"
      >
        <div className="h-3/4 flex flex-col justify-center items-center">
          <img
            className="mt-16 rounded-full border-4 border-gray-100"
            src="/image-victor.jpg"
            alt="Victor"
          />
          <div className="mt-6 text-center">
            <span className="text-lg font-bold mr-2">Victor Crest</span>
            <span className="text-lg font-normal text-gray-500">26</span>
            <p className="text-sm text-gray-500">London</p>
          </div>
        </div>

        <div className="h-1/4 flex justify-around">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold">80K</p>
            <p className="text-xs text-gray-500">Followers</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold">803K</p>
            <p className="text-xs text-gray-500">Likes</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold">1.4K</p>
            <p className="text-xs text-gray-500">Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
