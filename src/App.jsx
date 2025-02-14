import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const heandleBookMark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  const heandleBookmark = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove id
    const reminingBookmark = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(reminingBookmark);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto py-5 px-6">
        <Header></Header>
        <div className="md:flex">
          <Blogs
            heandleBookMark={heandleBookMark}
            heandleBookmark={heandleBookmark}
          ></Blogs>
          <Bookmarks
            bookmarks={bookmarks}
            readingTime={readingTime}
          ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
