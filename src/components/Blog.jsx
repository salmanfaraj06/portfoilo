import React, { useEffect, useState } from "react";
import Img from "./img";
import Text from "./text";
import { FaExternalLinkAlt } from "react-icons/fa";

const sample = "https://assets.website-files.com/5c786a3053663924fae79957/5d7f3e6fcad517ea25cea8f4_Medium%402x.png";

const BlogCard = ({ blog }) => (
  <div className="flex flex-col bg-white-A700 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
    <Img className="h-52 sm:h-40 w-auto object-cover rounded-t-lg" src={blog.image || sample} alt={blog.title} />
    <div className="flex flex-col p-5">
      <Text className="text-xl text-black-900 mb-2" size="txtSoraBold32">{blog.title}</Text>
      <Text className="text-sm text-black-900 mb-4" size="txtSoraRegular16">{blog.date}</Text>
      <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-black flex items-center hover:text-blue-500">
        <span>Read More</span>
        <FaExternalLinkAlt className="ml-2" />
      </a>
    </div>
  </div>
);

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const CORS_PROXY = "https://api.allorigins.win/raw?url=";
        const url = `${CORS_PROXY}https://medium.com/feed/@salman.faraj06`;

        const response = await fetch(url);
        const text = await response.text();

        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");
        const items = xml.querySelectorAll("item");

        const blogPosts = Array.from(items).map((item) => {
          const title = item.querySelector("title")?.textContent || "No title";
          const date = new Date(
            item.querySelector("pubDate")?.textContent || Date.now()
          ).toLocaleDateString();
          const link = item.querySelector("link")?.textContent || "#";

          return {
            title,
            date,
            link,
            image: sample, // Default image as Medium RSS does not provide images
          };
        });

        setBlogs(blogPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div id="blogs" className="bg-black-900 flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 py-[60px] w-full">
      <div className="flex flex-col gap-5 items-start justify-start max-w-7xl mx-auto sm:px-5 w-full">
        <div className="flex flex-row gap-4 items-center justify-center py-5 my-5 w-full">
          <Text className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px] w-auto" size="txtSoraRegular48WhiteA700">
            My
          </Text>
          <Text className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px] w-auto" size="txtSoraExtraBold48WhiteA700">
            Blogs
          </Text>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-10 w-full">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
