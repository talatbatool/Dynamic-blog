"use client";
import React from "react";
import BlogCard from "@/components/Blogcard"
// Removed unused imports
// import CommentSection from "@/components/CommentSection";
// import AuthorCard from "@/components/AuthorCard";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "HTML block of web development",
      description: "Explore the fundamentals of HTML, the backbone of every webpage.",
      date: "2024-12-26",
      imageurl: "/images/html.jpg",
    },
    {
      id: "2",
      title: "To-Do List",
      description:
        "The To-Do List project is a simple yet powerful tool .",
      date: "2024-12-26",
      imageurl: "/images/todolist.jpg",
    },
    {
      id: "3",
      title: "Furniture Website",
      description:
        "Welcome to my furniture website project in next.js",
      date: "2024-12-26",
      imageurl: "/images/image1.jpg",
    },
    {
      id: "4",
      title: "Portfolio",
      description:
        "The Portfolio Website project is a personal showcase designed to highlight my skills.",
      date: "2024-12-26",
      imageurl: "/images/portfolio.jpg", // Fixed image path
    },
    {
      id: "5",
      title: "Travel",
      description:
        "Traveling is one of life's greatest joy and collecting memories.",
      date: "2024-12-26",
      imageurl: "/images/travel.jpg",
    },
    {
      id:"6",
      title:"ecommerce website",
      date: "2024-12-26",

      description:"E-commerce website increasingly popular in pakistan",
    imageurl:"/images/pizza.jpg"
    }





  ];

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the World of AI and Technology
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
