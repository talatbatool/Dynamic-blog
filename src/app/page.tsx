import AuthorCard from '@/components/Authorcard';
import Feature  from "@/components/Feature"
import Footer from '@/components/Footer';
import Mega from "@/components/Mega";

import Navbar from '@/components/Navbar';
import React from 'react'


const page = () => {
  return (
    <div>
      <Navbar/>
      <Feature/>
      <Mega/>
      <AuthorCard/>
      <Footer/>
    </div>
  )
}

export default page
