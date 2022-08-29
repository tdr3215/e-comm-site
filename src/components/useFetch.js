import { useEffect, useState } from "react";
import api from "../api/products";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    await 
  }, []);

  return { data, isPending, error };
};

export default useFetch;
