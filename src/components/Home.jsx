import React, { useState } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PacmanLoader } from "react-spinners";

Modal.setAppElement("#root");

const Home = () => {
  // State to store the selected category and group
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [apidata, setapidata] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); // New state for loading

  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

 const fetchapidata = async (categoryname, by) => {
  setLoading(true);
  const url = `https://emojihub.yurace.pro/api/all/${by}/${categoryname}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data || Object.keys(data).length === 0) {
      toast.error("No data found! Please try again.");
    } else {
      setapidata(data);
    }
  } catch (error) {
    toast.error("Something went wrong! Please try again.");
  } finally {
    setLoading(false);
  }

};

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedGroup(null);
    fetchapidata(category, "category");
    setIsOpen(true);
  };

  // Function to handle group selection
  const handleGroupClick = (group) => {
    setSelectedGroup(group);
    setSelectedCategory(null);
    fetchapidata(group, "group");
    setIsOpen(true);
  };

  const categories = [
    {
      name: "smileys-and-people",
      groups: [
        "body",
        "cat-face",
        "clothing",
        "creature-face",
        "emotion",
        "face-negative",
        "face-neutral",
        "face-positive",
        "face-role",
        "face-sick",
        "family",
        "monkey-face",
        "person",
        "person-activity",
        "person-gesture",
        "person-role",
        "skin-tone",
      ],
    },
    {
      name: "animals-and-nature",
      groups: [
        "animal-amphibian",
        "animal-bird",
        "animal-bug",
        "animal-mammal",
        "animal-marine",
        "animal-reptile",
        "plant-flower",
        "plant-other",
      ],
    },
    {
      name: "food-and-drink",
      groups: [
        "dishware",
        "drink",
        "food-asian",
        "food-fruit",
        "food-prepared",
        "food-sweet",
        "food-vegetable",
      ],
    },
    { name: "travel-and-places", groups: ["travel-and-places"] },
    { name: "activities", groups: ["activities"] },
    { name: "objects", groups: ["objects"] },
    { name: "symbols", groups: ["symbols"] },
    { name: "flags", groups: ["flags"] },
  ];

  return (
    <>
      <div className="w-full py-6 mt-20  ">
        <div className="max-w-7xl mx-auto dark:bg-gray-950 bg-slate-200 py-4 rounded-3xl border-b-8 dark:border-slate-300 border-gray-500 px-4">
          <h2 className="text-2xl dark:text-white font-bold capitalize mb-4">
            🔍Search by Category
          </h2>
          {/* Category Cards for Search Results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(category.name)} // Pass category name to handler
                className="relative bg-white dark:bg-gray-800  rounded-lg shadow-md p-4 hover:scale-105 transition-transform cursor-pointer group"
              >
                {/* Category Title */}
                <h3 className="text-xl group-hover:text-black dark:text-white capitalize text-center font-bold text-gray-800 z-10 relative">
                  {category.name}
                </h3>
                {/* The fill effect */}
                <div className="absolute inset-0 rounded-lg bg-gray-300 transform scale-y-0 group-hover:scale-y-100 transition-all duration-500 origin-left z-0"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search by Groups */}
      <div className="w-full py-6 mt-6">
        <div className="max-w-7xl dark:bg-gray-950 bg-slate-200 border-b-8 py-4 rounded-3xl dark:border-slate-300 border-gray-500 mx-auto px-4">
          <h2 className="text-2xl dark:text-white font-bold capitalize mb-4">
            🔍Search by Groups
          </h2>
          {/* Group Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative dark:bg-gray-800 bg-white text-black rounded-lg shadow-md p-4 hover:scale-105 transition-transform cursor-pointer group"
              >
                {/* Group Title */}
                <h3 className="text-xl dark:text-white group-hover:text-black  capitalize text-center font-semibold text-gray-800 mb-4 z-10 relative">
                  {category.name}
                </h3>
                {/* Hover Fill Effect */}
                <div className="absolute  inset-0 rounded-lg  bg-gray-300 transform scale-y-0 group-hover:scale-y-100 transition-all duration-500 origin-left z-0"></div>
                {/* Group Badges */}
                <div className="flex flex-wrap gap-2 justify-center relative z-10">
                  {category.groups.map((group, groupIndex) => (
                    <span
                      key={groupIndex}
                      onClick={() => handleGroupClick(group)} // Pass group name to handler
                      className="bg-customblue2 dark:bg-gray-600 capitalize text-white px-4 py-2 rounded-2xl text-sm font-medium cursor-pointer dark:hover:bg-black hover:bg-customblue transition"
                    >
                      {group}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="About Modal"
        className="fixed  top-1/2 outline-none left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-gray-800 bg-white rounded-lg shadow-xl w-full sm:w-[80%] lg:w-[60%] xl:w-[80%] h-[90vh] z-50 overflow-auto transition-all duration-300"
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40"
      >
        <h2 className="text-2xl sticky rounded-bl-xl rounded-br-xl  dark:rounded-tl-xl dark:rounded-tr-xl  dark:bg-black dark:m-1 bg-gray-700 text-white font-semibold uppercase p-3 flex justify-between items-center">
          <span>{selectedCategory || selectedGroup}</span>
          <span className="flex-grow hidden md:inline  text-xl capitalize text-center">
            Click <span className="text-yellow-400 text-2xl">Emoji</span> to
            Copy 📋
          </span>
        </h2>

        <div className="flex flex-wrap gap-5 mx-4 my-6 justify-center">
          {loading ? (
            <div className="w-full min-h-screen flex justify-center items-center">
              <div className="relative" style={{ top: "-10%" }}>
                <PacmanLoader
                  size="50"
                  className=" text-white"
                  color={
                    window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? "#FFFFFF"
                      : "#1F2937"
                  }
                />
                <h1 className="text-2xl dark:text-white text-center font-semibold mt-4 text-gray-800">
                  Yum Yum Yum!
                </h1>
              </div>
            </div>
          ) : (
            apidata?.map((item) => (
              <span
                key={item.name}
                onClick={() => {
                  const emoji =
                    item.htmlCode && item.htmlCode[0]
                      ? String.fromCodePoint(
                          parseInt(
                            item.htmlCode[0].replace("&#", "").replace(";", ""),
                            10
                          )
                        )
                      : "";
                  navigator.clipboard.writeText(emoji);
                  toast.success(`Emoji Copied! ${emoji}`);
                }}
                className="relative group text-4xl border bg-customLightC border-gray-300 rounded-full text-white cursor-pointer p-4 transition-all duration-300 hover:bg-gray-700 hover:scale-150"
              >
                {/* Emoji */}
                <span
                  className="text-3xl"
                  dangerouslySetInnerHTML={{
                    __html:
                      item.htmlCode && item.htmlCode[0] ? item.htmlCode[0] : "",
                  }}
                />

                {/* Tooltip */}
                <div
                  className="absolute bottom-[90%] left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block 
             bg-gray-700 text-white text-sm px-2 py-1 capitalize rounded-md z-55 whitespace-nowrap"
                >
                  {item.name}
                </div>
              </span>
            ))
          )}
        </div>

        <button
          onClick={closeModal}
          className="absolute top-2 dark:right-3 dark:top-3 right-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Close
        </button>
      </Modal>

      <ToastContainer />
    </>
  );
};

export default Home;
