import React from "react";
import UserDetails from "./UserDetails";

const Users = ({ pageData }) => {
  return (
    <div className="container users">
      <div className="row">
        {pageData.map((arr, index) => (
          <UserDetails
            key={index}
            fname={arr.first_name}
            lname={arr.last_name}
            email={arr.email}
            avatar={arr.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
