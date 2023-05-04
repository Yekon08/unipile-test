import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=23aaa32&t=transfor`)
      .then((response) => response.json())
      .then((actualData) => console.log(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return <Typography variant="h1">Hello World !</Typography>;
}

export default App;
