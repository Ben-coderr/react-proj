import { useState, useEffect } from "react";
import Bloglist from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Joker", body: "lorem epsume hh ..", author: "somebody", id: 1 },
    { title: "Batman", body: "lorem epsume hh ..", author: "body", id: 2 },
    {
      title: "Spider Man",
      body: "lorem epsume hh ..",
      author: "somebody",
      id: 3,
    },
  ]);

  const HandleBlog = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    console.log(blogs);
  });

  return (
    <div className="Home">
      <Bloglist blogs={blogs} title="All Blogs" HandleBlog={HandleBlog} />
    </div>
  );
};

export default Home;
