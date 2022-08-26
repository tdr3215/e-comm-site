import { useEffect } from "react";

const useFetch = () => {
  useEffect(() => {
    fetch("http://localhost:3000/#/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
};

export default useFetch;
