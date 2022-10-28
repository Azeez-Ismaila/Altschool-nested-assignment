import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
function Users({
  posts,
  postsPerPage,
  paginate,
  totalPosts,
  nPages,
  currentPage,
  setCurrentPage,
  nextPage,
  prevPage,
  loading,
}) {
  return (
    <>
      <div className="md:grid md:grid-cols-3 md:gap-4 md:justify-evenly p-4  font-bold leading-normal">
        {loading ? (
          <div className=" flex justify-center text-4xl">Loading.....</div>
        ) : (
          posts?.map((person) => {
            return (
              <div
                key={person.name.first}
                className="
           flex flex-row items-center  gap-4
            my-6 border rounded-lg  text-ellipsis border-gray-200 shadow-md    dark:border-gray-700 md:max-w-md "
              >
                <img
                  src={person.picture.large}
                  alt=""
                  className="rounded-l-lg w-fit h-fit"
                />

                <div className="flex flex-col justify-start flex-wrap overflow-hidden overflow-ellipsis break-all text-left text-ellipsis object-cover">
                  <p>
                    Name: {person.name.title} {person.name.first}{" "}
                    {person.name.last}
                  </p>
                  <p>Gender: {person.gender}</p>
                  <p className=" text-ellipsis">Email: {person.email}</p>
                  <p>Location: {person.location.country}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        postsPerPage={postsPerPage}
        totalPosts={6}
        paginate={paginate}
      />
    </>
  );
}

export default Users;
