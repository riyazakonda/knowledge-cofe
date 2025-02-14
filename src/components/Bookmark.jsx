import PropTypes from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <div className="bg-gray-200 p-4 m-4 rounded-lg">
      <h1 className="text-xl font-semibold font-family ">{title}</h1>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};
export default Bookmark;
