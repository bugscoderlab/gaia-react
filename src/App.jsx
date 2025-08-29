import { useEffect, useState } from "react";

const fetchAPI = async () => {
  try {
    const response = await fetch("https://dogapi.dog/api/v2/breeds", {
      method: "GET",
      // body: JSON.stringify(""),
      headers: {
        "Content-Type": "application/json"
      },
    })

    // console.log("Response: ", response);
    return response.json()
  } catch (err) {
    return err;
  }
}

function App() {
  const [data, setData] = useState({
    data: []
  });

  useEffect(() => {
    console.log("fetching");

    (async() => {
      try {
        const result = await fetchAPI();
        setData(result);
        // console.log(result);
      } catch (e) {
        console.log(e)
      }
    })();
  }, [])

  return(<>
    <ul>
    {data.data.map((val, key) => (
      <li key={key}>{val.attributes.name}</li>
    ))}
    </ul>
  </>)
}

export default App;