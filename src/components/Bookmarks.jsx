import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 ml-2 mt-2 bg-gray-300 rounded-lg">
      <h2 className="text-4xl text-center font-bold font-family text-[#6047EC]  py-5 px-6 border-2 rounded-lg">
        Spent time on read : {readingTime}
      </h2>
      <div>
        <h2 className="font-bold font-family text-2xl m-8">
          Bookmarked Blogs : {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, i) => (
          <Bookmark key={i} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.func,
  readingTime: PropTypes.number,
};
export default Bookmarks;
