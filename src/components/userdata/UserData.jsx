import { useEffect, useState } from "react";
import { getData } from "../../api/getData";
import Card from "../card/Card";

const UserData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleData = () => {
      try {
        getData().then((res) => setData(res.slice(0, 12)));
      } catch (error) {
        console.error(error);
      }
    };
    handleData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 bg-slate-200 min-h-screen p-5 ">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="">
              <Card item={item} />
            </div>
          ))
        ) : (
          <h1 className="text-4xl font-bold">Loading...</h1>
        )}
      </div>
    </>
  );
};

export default UserData;
//.slice(0, visibleCount)
