import PropTypes from "prop-types";

import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, heandleBookMark, heandleBookmark }) => {
  const {
    id,
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="">
      <div className="mb-20 border-b-2 border-white shadow rounded-lg">
        <img className="w-full mt-2" src={cover} alt="" />
        <div className="flex justify-between mt-8 mb-4">
          <div className="flex">
            <img className="w-15  h-15" src={author_img} alt="" />

            <div className="ml-6">
              <h3 className="text-2xl  font-bold font-family">{author}</h3>
              <p className="text-gray-500 font-medium">{posted_date}</p>
            </div>
          </div>

          <div className="flex justify-center items-center m-2 space-x-2">
            <span className="font-family text-gray-500">
              {reading_time} min read
            </span>
            <button
              onClick={() => heandleBookMark(blog)}
              className="text-2xl text-red-600"
            >
              <CiBookmark />
            </button>
          </div>
        </div>

        <h1 className="text-3xl font-bold m-2 font-family w-2/3 ">{title}</h1>
        <p className=" space-x-4 mt-4 m-2  font-family">
          {hashtags.map((hash, i) => (
            <span key={i}>
              <a href="">#{hash}</a>
            </span>
          ))}
        </p>

        <button
          onClick={() => heandleBookmark(reading_time, id)}
          className="text-purple-600 underline m-2
         "
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  heandleBookMark: PropTypes.func,
  heandleBookmark: PropTypes.func,
};
export default Blog;
