import React from "react";
import "./UserDetails.css";

const UserDetails = ({ fname, lname, email, avatar }) => {
  return (
    <div className="col-md-4 d-flex align-items-center justify-content-center">
      <div className="card mb-3 mt-2">
        <img src={avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <b>
              {fname} {lname}
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
