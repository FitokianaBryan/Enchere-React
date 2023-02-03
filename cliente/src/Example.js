import React, { useEffect, useState } from "react";
import axios from "axios";
export function Example() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/avions')
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.capacite}</h1>
          <p>{data.nomavion}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

