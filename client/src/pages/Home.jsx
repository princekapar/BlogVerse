import React from "react";
import Navebar from "../components/Navebar";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navebar />
      <Header />
      <BlogList />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
