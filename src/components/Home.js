import { useState } from "react";
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

  return (
    <div className="Home">
      <Bloglist blogs={blogs} title="All Blogs" />
      <Bloglist
        blogs={blogs.filter((blog) => blog.author === "somebody")}
        title="All Blogs"
      />
    </div>
  );
};

export default Home;
