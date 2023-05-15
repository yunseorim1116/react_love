import React from "react";

const UserProfile = ({ imgSrc }: any) => {
  console.log(imgSrc);
  return (
    <div style={{ width: "140px", height: "140px" }}>
      <img src={imgSrc} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default UserProfile;
