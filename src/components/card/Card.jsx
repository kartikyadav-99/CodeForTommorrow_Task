import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Card = ({ item }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-white  m-5 p-5 rounded-lg h-fit w-80">
      <div className="flex justify-end cursor-pointer text-red-500 ">
        <RxCross1 className="text-2xl" />
      </div>
      <h1 className="font-bold text-2xl  line-clamp-1">{item.title}</h1>
      <h2 className="line-clamp-2">{item.body}</h2>
      <h3>{currentTime}</h3>
      <img
        className="rounded-lg mt-3"
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="This is image"
      />
    </div>
  );
};

export default Card;
