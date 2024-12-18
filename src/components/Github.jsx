import React, { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import { FaGithub } from "react-icons/fa";

const Github = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dummy data
  const dummyRepos = [
    {
      id: 1,
      name: "Project-1",
      description: "This is Project 1.",
      html_url: "https://github.com/aman-yadav-codes/project-1",
    },
    {
      id: 2,
      name: "Project-2",
      description: "This is Project 2.",
      html_url: "https://github.com/aman-yadav-codes/project-2",
    },
    {
      id: 3,
      name: "Project-3",
      description: "This is Project 3.",
      html_url: "https://github.com/aman-yadav-codes/project-3",
    },
    {
      id: 4,
      name: "Project-4",
      description: "This is Project 4.",
      html_url: "https://github.com/aman-yadav-codes/project-4",
    },
    {
      id: 5,
      name: "Project-5",
      description: "This is Project 5.",
      html_url: "https://github.com/aman-yadav-codes/project-5",
    },
  ];

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/aman-yadav-codes/repos`
        );
        const data = await response.json();
        if (response.ok) {
          setRepos(data); // Set real data
        } else {
          throw new Error("Failed to fetch repositories");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchGithubRepos();
  }, []);

  if (loading) {
    // Show PacmanLoader while loading
    return (
      <div className="flex justify-center text-center flex-col items-center h-screen">
        <PacmanLoader
          size={50}
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
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-8 mt-20 bg-gray-100 dark:bg-gray-950 rounded-lg shadow-lg my-4 max-w-7xl mx-auto text-center font-sans text-gray-800">
      <h1 className="text-8xl font-bold text-black dark:text-white flex justify-center items-center">
        <FaGithub />
      </h1>

      <h1 className="text-4xl font-bold text-orange-500 mb-6">
        My GitHub Repositories 📂
      </h1>
      <p className="text-lg dark:text-white leading-relaxed mb-4">
        Below are all the repositories I have on GitHub. Click on any card to go
        to the repository.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Displaying repos dynamically or using dummy data */}
        {repos.length > 0
          ? repos.map((repo) => (
              <div
                key={repo.id}
                className="bg-white p-6 rounded-lg hover:scale-110 shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
                onClick={() => window.open(repo.html_url, "_blank")}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {repo.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {repo.description || "No description available."}
                </p>
                <p className="text-sm text-blue-500 mt-4">Go to Repository →</p>
              </div>
            ))
          : // Fallback to dummy data if repos are empty
            dummyRepos.map((repo) => (
              <div
                key={repo.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:scale-110 shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
                onClick={() => window.open(repo.html_url, "_blank")}
              >
                <h3 className="text-2xl dark:text-white font-semibold text-gray-800 mb-2">
                  {repo.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {repo.description || "No description available."}
                </p>
                <p className="text-sm text-blue-500 mt-4">Go to Repository →</p>
              </div>
            ))}
      </div>

      <p className="text-base text-gray-500 dark:text-gray-400 mt-6 italic">
        Explore my repositories and contribute! 🌱
      </p>
    </div>
  );
};

export default Github;
