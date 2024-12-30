import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const navigate = useNavigate();

  // List of available courses
  const courseList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Node",
    "Next",
    "Express",
    "MongoDB",
    "Docker",
  ];

  // Handle search input change
  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter suggestions based on query
    if (query) {
      const suggestions = courseList.filter((course) =>
        course.toLowerCase().startsWith(query.toLowerCase())
      );
      setFilteredSuggestions(suggestions);
    } else {
      setFilteredSuggestions([]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setFilteredSuggestions([]);
  };

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    const sanitizedQuery = searchQuery.trim().toLowerCase();
    const courseRoutes = {
      html: "/html1",
      css: "/css1",
      javascript: "/javascript",
      react: "/react1",
      tailwind: "/tailwind",
      node: "/nodejs",
      next: "/nextjs",
      express: "/expressjs",
      mongodb: "/mongodb",
      docker: "/docker",
    };

    const navigateTo = courseRoutes[sanitizedQuery];
    if (navigateTo) {
      navigate(navigateTo);
    } else {
      alert("Course not found! Try searching for another course.");
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-[#001A6E] via-[#074799] to-[#009990] py-24 px-4 text-center w-full">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-4">
          Find the Best Courses for You
        </h1>
        <p className="text-gray-200 dark:text-gray-400 mb-8">
          Discover, Learn, and Upskill with our wide range of courses
        </p>
        <form
          onSubmit={handleSearch}
          className="relative flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6"
        >
          <Input
            type="text"
            placeholder="Search Courses (e.g., HTML, CSS)"
            className="flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 dark:hover:bg-blue-800"
          >
            Search
          </Button>
          {filteredSuggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg z-10 rounded-b-md">
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer text-gray-900 dark:text-gray-100"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </form>
        <Button className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-600 rounded-full hover:bg-gray-300">
          Explore Courses
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
