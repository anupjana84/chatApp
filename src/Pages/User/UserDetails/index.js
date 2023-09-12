import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { useId, name } = useParams();

  console.log(useId, "par", name);



  const getuserDetaitl = () => {
    axios
      .post("", { _id: useId })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };


  
  // useEffect(() => {
  //   // getuserDetaitl();

  //   return () => {};
  // }, []);

  return <div>UserDetails</div>;
};

export default UserDetails;
