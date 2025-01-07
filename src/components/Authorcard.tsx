import React from "react";
import Image from "next/image";

export default function AuthorCard(){
    return(
        <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
            <div className="flex items-center animition-fadeIn">
<Image
className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
src="/images/talat.jpg"
width={300}
height={600}


alt="Author image"></Image>

            <div>
            
<h3 className="text xl font-bold">Talat Batool</h3>
<p>Web Developer{" "}</p>
</div>
        </div>
        <p className="Mt-4 text-black leading-relaxed">Talat Batool is a web Developer student at GIAIC</p>
        <div className="mt-4 flex space-x-3">
            <a href="#"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
                Twitter
            </a>
            <a href="#"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
                LinkdIn
            </a>
            <a href="#"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
                GitHub
            </a>
        </div>
        </div>
    )
}