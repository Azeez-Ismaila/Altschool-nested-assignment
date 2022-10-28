import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Nav from "./Nav";
import Footer from "./Footer";
import About from "./About";
import Error from "./Error";
import { useState, useEffect } from "react";
import Description from "./Description";
import Example from "./Example";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const getData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=120");
    setLoading(false);
    const data = await response.json();
    setPosts(data.results);
    console.log(data.results);
  };
  useEffect(() => {
    getData();
  }, []);
  // Get CurrentPost
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const nPages = Math.ceil(posts.length / postsPerPage);
  // Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage === 1) {
      setCurrentPage(0);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="description" element={<Description />} />
            <Route path="example" element={<Example />} />
          </Route>
          <Route
            path="/users"
            element={
              <Users
                loading={loading}
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                nextPage={nextPage}
                prevPage={prevPage}
                posts={currentPosts}
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
