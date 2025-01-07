"use client";

import React from "react";
import BlogCard from "./Blogcard";
// Removed unused imports for now: AuthorCard, Commentsection

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "HTML block of web development",
      description: "Explore the fundamentals of HTML, the backbone of every webpage.html is a relatively simple language to learnaccesible to beginners.HTML is an open standerd, mainted by the word wide web consortium(w3c), ensuring its contined development",
      date: "2024-12-26",
      imageurl: "/images/html.jpg",
      
      
    },
    {
      id: "2",
      title: "To-Do List",
      description:
        "The To-Do List project is a simple yet powerful tool designed to help users stay organized and manage their tasks effectively. This project showcases of my ability to develop functional and user-friendly applications using modern web technologies.",
      date: "2024-12-26",
      imageurl: "/images/todolist.jpg",
    },
    {
      id: "3",
      title: "Furniture Website",
      description:
        "Welcome to my furniture website project, where I aimed to design a user-friendly and visually appealing platform for furniture enthusiasts. This project showcases my skills in web development, including frontend and backend technologies, to create an engaging online shopping experience.",
      date: "2024-12-26",
      imageurl: "/images/image1.jpg",
    },
    {
      id: "4",
      title: "Portfolio",
      description:
        "The Portfolio Website project is a personal showcase designed to highlight my skills, achievements, and projects in web development and beyond. This project serves as a digital resume, offering visitors an interactive and engaging way to learn about me and my work.",
      date: "2024-12-26",
      imageurl: "/images/portfolio.jpg",
    },
    {
      id: "5",
      title: "Travel",
      description:
        "Traveling is one of life's greatest joys. Traveling is all about creating memories and experiencing the unknown. By staying prepared and flexible, you can make your trips stress-free and full of adventure.the travel become more enjoyable if everything is planned before travel",
      date: "2024-12-26",
      imageurl:"/images/travel.jpg",
    },
    {
      id:"6",
      title:"E-commerce website",
      description:"E-commerce website have become increasingly popular in pakistan, offering a conenient way to shop from the comfort of your own home. e-commerce websites can be customized to reflect a brand's unique identy and values.e-commerces websites offers lots of benifits.",
      date:"2024-12-26",
      imageurl:"/images/pizza.jpg",
      
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
