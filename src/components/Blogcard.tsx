import React from "react";
import Image from "next/image";
import {  CardContent, CardHeader, CardTitle } from "../components/ui/card";


interface BlogCardProps {
  post: { id: string; title: string; description: string; date: string; imageurl: string };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <CardHeader
    className={`p-4 ${isDarkBackground ? "bg-white text-black":"bg-cyan-200 text-slate-800"} rounded-lg transition-transform  transform hover: shadow-xl duration-300`}>
    
      
  
    
     <Image
        src={post.imageurl}
       alt={post.title}
       layout="fill"
       
       
        className="w-full h-48 object-cover rounded-t-lg"></Image>
      
      <CardTitle className="text-xl font-medium mt-4 text-center">
        {post.title}
      </CardTitle>
      <br />
     <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>

      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/posts/${post.id}`}
          className={`w-full px-6 py-2 rounded text-white ${
            isDarkBackground
              ? "bg-black hover:bg-gray-700"
              : "bg-blue-600 hover:bg-blue-500"
          }`}
        >
          Read More
        </a>
     </div>
    </CardHeader>
  );
}
