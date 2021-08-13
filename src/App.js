import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import Users from "./components/Users";
function App() {
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(3);

  useEffect(() => {
    apiData();
  }, [page]);
  const apiData = async () => {
    const { data } = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );
    // console.log(data.total_pages);

    setPageData(data.data);
    setTotal(data.total_pages);
    // console.log(pageData);
  };

  return (
    <div className="App">
      <h1 className="text-primary">Users Page</h1>
      <Users pageData={pageData} />
      <Pagination page={page} setPage={setPage} total={total} />
    </div>
  );
}

export default App;
