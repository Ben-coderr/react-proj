const Bloglist = ({ blogs, title, HandleBlog }) => {
  //   const blogs = props.blogs;
  //   const title = props.title;
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
          <button onClick={() => HandleBlog(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
