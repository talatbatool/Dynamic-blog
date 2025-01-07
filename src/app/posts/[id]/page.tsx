"use client"
import React from "react";
import Commentsection from "@/components/Commentsection";
import AuthorCard from "@/components/Authorcard";
import Footer from "@/components/Footer";
const posts=[
    {

        id:"1",
        title: "HTML block of websevelopment",
        describtion :"explore the fundamental of html,the  backbone of every webpage",
        date:2024-12-26,
        image:"../images/html.jpg",
    },


   { id:"2",
    title: "todolist",
    describtion :"The To-Do List project is a simple yet powerful tool designed to help users stay organized and manage their tasks effectively. This project highlights the importance of productivity and showcases my ability to develop functional and user-friendly applications using modern web technologies",
    date:2024-12-26,
    image:"../images/todolist.jpg",
},
{
id:"3",
title: "furniture website",
describtion :"Welcome to my furniture website project, where I aimed to design a user-friendly and visually appealing platform for furniture enthusiasts. This project showcases my skills in web development, including frontend and backend technologies, to create an engaging online shopping experience",
date:2024-12-26,
image:"../images/image1.jpg",
},
{
id:"4",
title: "portfolio",
describtion :"The Portfolio Website project is a personal showcase designed to highlight my skills, achievements, and projects in web development and beyond. This project serves as a digital resume, offering visitors an interactive and engaging way to learn about me and my work.",
date:2024-12-26,
image:"/images/portfolio.png",
},


{     id:"5",
title: "travel",
describtion :"Traveling is one of life's greatest joys,Traveling is all about creating memories and experiencing the unknown. By staying prepared and flexible, you can make your trips stress-free and full of adventure.",
date:2024-12-26,
image:"../images/travel.jpg",
},
{
  id:"6",
  title:"ecommerce website",
  description:"E-commerce website have become increaingly popular in pakistan, offering a convenient way to shop from  the comfort of your own home.e-commerce websites can be customized to reflect a brand's unique identity and value."

}

]
export default function PostDetail({ params }: { params: { id: string } }) {
    const { id } = params;
    const post = posts.find((p) => p.id === id);
  
    if (!post) {
      return (
        <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
      );
    }
  
    const renderParagraphs = (description: string) => {
      return description.split("\n").map((para, index) => (
        <p key={index} className="mt-4 text-justify">
          {para.trim()}
        </p>
      ));
    };
  
    return (
      <div className="max-w-3xl mx-auto p-5">
        <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
          {post.title}
        </h1>
  
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            width={1200} // Adjust width
            height={800} // Adjust height
            className="w-full h-auto rounded-md mt-4"
            
          />
        )}
  
        <div className="mt-6 text-lg text-slate-700">
          {renderParagraphs(post.description)}
        </div>
        <Commentsection postId={post.id} />
        <AuthorCard />
        <Footer/>
      </div>
    );
  }