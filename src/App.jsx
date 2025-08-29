import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setData([]);
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      setData(result.data);
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  return { data, loading, error, fetchData };
};

function App() {
  const { data, loading, error, fetchData } = useFetch("https://dogapi.dog/api/v2/breeds");

  return(
    <>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>

      {error && <p>Error: {error}</p>}
      
      <ul>
        {data.map((val, key) => (
          <li key={key}>{val.attributes.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;