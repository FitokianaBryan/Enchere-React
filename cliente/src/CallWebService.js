import React, { useEffect, useState } from "react";
import axios from "axios";

export function CallWebService(url){
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, [url]);
   return {data};
}

export function CallWebService2(url,donnees){
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(donnees)
      });
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, [url,donnees]);
   return {data};
}

/*export function CallWebService(url) {
   const [data, setData] = useState(null);
   const [error,setError]=useState(null);
   const [loading, setLoading] = useState(false);
   useEffect(() => {
    setLoading(true);
    axios.get(url)
      .then(response => setData(response.data))
      .catch(error => setError(error))
      .finally(()=>{
         setLoading(false);
      });
   }, [url]);
   const refetch = () => {
    // eslint-disable-next-line no-undef
    setLoading(true); // set loading to true
    axios
        .get(url)
        .then((response) => {
            setData(response.data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            // eslint-disable-next-line no-undef
            setLoading(false);
        });
   }; 
   return{data,error,loading,refetch};
}*/