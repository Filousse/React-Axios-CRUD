import React, { useEffect, useState } from "react";
import UpdateDelete from "./UpdateDelete";
import http from "../firebase/http";
// import quotesDB from "../services/quotesDB";


const Read = () => {
  const [quoteList, setQuoteList] = useState([]);

  useEffect(() => {
    http.get("/quotesDB.json").then(res => {
      // console.log("res =>",res.data);
      let previousList = res.data;
      let list = [];
      for (let id in previousList) {
        list.push({ id, ...previousList[id] });
      }
      setQuoteList(list);
    });
  }, [quoteList]);

  return (
    <div className="read">
      <ul>
        {quoteList &&
          quoteList.map((item, index) => (
            <UpdateDelete item={item} key={index} />
          ))}
      </ul>
    </div>
  );
};

export default Read;
