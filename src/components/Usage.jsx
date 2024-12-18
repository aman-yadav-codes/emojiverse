import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Usage = () => {
  return (
    <div className="p-8 mt-20 bg-gray-100 dark:bg-gray-950 rounded-lg shadow-lg my-4 max-w-7xl mx-auto text-center font-sans text-gray-800">
      <h1 className="text-4xl font-bold text-orange-500 mb-6">
        How to Use Emojiverse Emojis 📋
      </h1>

      <p className="text-lg dark:text-white leading-relaxed mb-4">
        Welcome to Emojiverse! Here's a simple guide on how to find and use your
        favorite emojis from our vast collection.
      </p>

      {/* Step 1 */}
      <div className="mb-6">
        <h3 className="text-2xl dark:text-white font-semibold text-gray-700 mb-2">
          Step 1: Choose Your Category or Class
        </h3>
        <p className="text-lg dark:text-white leading-relaxed mb-4">
          Start by browsing through the available emoji categories on the
          homepage. Select a category or class that best fits the emoji you're
          looking for.
        </p>
      </div>

      {/* Step 2 */}
      <div className="mb-6">
        <h3 className="text-2xl dark:text-white font-semibold text-gray-700 mb-2">
          Step 2: Find Your Favorite Emoji
        </h3>
        <p className="text-lg leading-relaxed dark:text-white mb-4">
          Once you've selected a category, scroll through the list and find the
          emoji that suits your needs. We have a wide variety for every
          occasion!
        </p>
      </div>

      {/* Step 3 */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-white mb-2">
          Step 3: Click to Copy
        </h3>
        <p className="text-lg leading-relaxed dark:text-white mb-4">
          After choosing your emoji, simply click on it to copy it to your
          clipboard. Then you can paste it anywhere you want—be it in chats,
          posts, or anywhere else!
        </p>
      </div>

      {/* Emoji Example with Tooltip */}
      <div className="mb-6">
        <h3 className="text-2xl dark:text-white font-semibold text-gray-700 mb-2">
          Emoji Example
        </h3>
        <span className="text-yellow-400 text-3xl"> {`Hover me => `}</span>
        <div className="text-yellow-400 text-3xl mb-4 group relative inline-block">
          <span
            onClick={(e) => {
              navigator.clipboard.writeText(`😊`);
              toast.success(`Emoji Copied! 😊`);

            }}
            className="text-yellow-400 text-4xl cursor-pointer"
          >
            {" "}
            😊
          </span>
          {/* Tooltip */}
          <div className="absolute bottom-[110%] left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm px-2 py-1 capitalize rounded-md z-10 whitespace-nowrap">
            Click to Copy
          </div>
        </div>
        <p className="text-lg dark:text-white leading-relaxed mb-4">
          Here’s an example emoji you can copy and use in your chats or
          projects.
        </p>
      </div>

      {/* Final Call to Action */}
      <p className="text-base dark:text-gray-400 text-gray-500 mt-6 italic">
        Explore. Choose. Express. ✨
      </p>
      <ToastContainer />
    </div>
  );
};

export default Usage;
