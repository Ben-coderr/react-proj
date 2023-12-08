import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Joker", body: "lorem epsume hh ..", author: "somebody", id: 1 },
    { title: "Batman", body: "lorem epsume hh ..", author: "somebody", id: 2 },
    {
      title: "Spider Man",
      body: "lorem epsume hh ..",
      author: "somebody",
      id: 3,
    },
  ]);

  return (
    <div className="Home">
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
