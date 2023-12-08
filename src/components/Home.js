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

  const [name, setName] = useState("abdenour");

  useEffect(() => {
    // only runs on re render
    console.log("runing ..");
    console.log({ name });
  }, [name]);
  // ,[] => means runs once

  return (
    <div className="Home">
      <Bloglist blogs={blogs} title="All Blogs" HandleBlog={HandleBlog} />
      <button onClick={() => setName("Benkorich")}>Change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
