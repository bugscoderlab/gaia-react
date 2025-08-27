import { useEffect, useState } from "react";

function App() {
  const [chatList, setChatList] = useState([]);
  const [message, setMessage] = useState();

  useEffect(() => {
    setMessage('')
  }, [chatList])

  return(<>
    <div><ul>{chatList.map((val) => <li>{val}</li>)}</ul></div>
    <input value={message} onChange={(e) => setMessage(e.target.value)}/>
    <input type="button" value="Send" 
      onClick={() => setChatList(prevChat => [
        ...prevChat,
        message
      ])}
    />
  </>)
}

export default App;