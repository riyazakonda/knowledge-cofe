import "./App.css";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-5 px-6">
        <Header></Header>
        <div className="md:flex">
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
