"use client"
import React from "react";
import Commentsection from "@/components/Commentsection";
import AuthorCard from "@/components/Authorcard";
import Footer from "@/components/Footer";
const posts=[
    {

        id:"1",
        title: "HTML block of websevelopment",
        describtion :"HTML (HyperText Markup Language) is the backbone of the web, serving as the foundational language for creating and structuring websites. It defines the structure of web pages by organizing content into headings, paragraphs, images, links, and other elements, making it essential for building any website or web application. HTML is universally understood by web browsers, ensuring compatibility across devices and platforms. It also plays a crucial role in search engine optimization (SEO) by using semantic tags that help search engines understand and index content effectively. Moreover, HTML is beginner-friendly and forms the basis for integrating other web technologies like CSS for styling and JavaScript for interactivity. With its simplicity and versatility, HTML is indispensable for web development, providing a solid foundation for creating accessible, responsive, and user-friendly websites.",
        date:2024-12-26,
        image:"../images/html.jpg",
    },


   { id:"2",
    title: "todolist",
    describtion :"A To-Do List application is a simple yet powerful tool designed to help users organize and manage their daily tasks efficiently. It provides a user-friendly interface where individuals can create, edit, and prioritize tasks, ensuring nothing important is overlooked. By offering features such as task categorization, deadlines, and reminders, a To-Do List app enhances productivity and helps users stay on track with their goals. Whether it's for personal use, work projects, or academic responsibilities, this application simplifies task management, making it easier to break down complex activities into manageable steps. Built using modern web technologies, a To-Do List app demonstrates practical problem-solving skills and the ability to design functional, interactive, and visually appealing solutions tailored to users' needs.",
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
describtion:"Travel is an enriching experience that allows individuals to explore new places, cultures, and perspectives, creating memories that last a lifetime. It fosters personal growth by pushing people out of their comfort zones, offering opportunities to learn about different traditions, cuisines, and ways of life. Whether it's the excitement of discovering bustling cities, the serenity of nature, or the thrill of adventure, traveling opens the door to unique experiences that broaden horizons and inspire creativity. It also strengthens relationships, as shared journeys often bring friends and families closer together. By embracing the unknown, staying flexible, and being prepared, travel becomes a transformative journey filled with discovery, relaxation, and inspiration.",
date:2024-12-26,
image:"../images/travel.jpg",
},
{
  id:"6",
  title:"ecommerce website",
  describtion:"E-commerce website have become increaingly popular in pakistan, offering a convenient way to shop from  the comfort of your own home.e-commerce websites can be customized to reflect a brand's unique identity and value.",
image:"../images/image1.jpg"
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
            className="w-full h-auto rounded-md mt-4"/>
            
          
        )}
  
        <div className="mt-6 text-lg text-slate-700">
          {renderParagraphs(post.describtion)}
        </div>
        <Commentsection postId={"post.id"} />
        <AuthorCard />
        <Footer/>
      </div>
    );
  }