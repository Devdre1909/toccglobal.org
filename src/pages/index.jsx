import React from "react";
import Logo from "../components/Logo/logo";

const Home = () => {
  return (
    <div className="h-full container flex p-5 items-center justify-between flex-1 mx-auto flex-col">
      <div>
        <Logo color="black" className="w-48" />
      </div>
      <div className="text-center">
        <h1 className="md:text-6xl text-4xl font-bold text-center">
          Truth Outreach Christian Centre
        </h1>
        <p>
          Website under construction. Please check back later for updates. You
          can check our social media pages
        </p>
        <div className="grid md:grid-cols-2 mt-6 gap-5 max-w-4xl mx-auto">
          <a
            href="https://bit.ly/toccfbg"
            className="border text-left bg-gray-200 p-3 rounded"
          >
            <h2 className="font-bold">Facebook</h2>
            <p className="text-sm">
              Get the latest updates on our Facebook page. Follow up events,
              live streams, and more.
            </p>
          </a>
          <a
            href="https://bit.ly/tocciga"
            className="border text-left bg-gray-200 p-3 rounded"
          >
            <h2 className="font-bold">Instagram</h2>
            <p className="text-sm">
              Get the latest updates on our Instagram page. Follow up events.
            </p>
          </a>
          <a
            href="https://bit.ly/tocctg"
            className="border text-left bg-gray-200 p-3 rounded"
          >
            <h2 className="font-bold">Telegram</h2>
            <p className="text-sm">
              Listen to our pre-recorded sermons on our Telegram channel.
            </p>
          </a>
          <a
            href="https://www.tiktok.com/@toccglobal?lang=en"
            className="border text-left bg-gray-200 p-3 rounded"
          >
            <h2 className="font-bold">TikTok</h2>
            <p className="text-sm">
              Listen to short clips of our sermons on our TikTok channel.
            </p>
          </a>
        </div>
      </div>
      <div className="bg-black p-5 w-full rounded-md shadow">
        <p></p>
        <p className="text-white/90 text-center text-sm">
          ...revealing JESUS to the ends of the earth.
        </p>
      </div>
    </div>
  );
};

export default Home;
