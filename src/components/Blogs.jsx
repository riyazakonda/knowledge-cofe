import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types";

const Blogs = ({ heandleBookMark, heandleBookmark }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          heandleBookMark={heandleBookMark}
          heandleBookmark={heandleBookmark}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  heandleBookMark: PropTypes.func,
  heandleBookmark: PropTypes.func,
};
export default Blogs;
