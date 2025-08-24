import Header from "./components/layout/Header"
import Sidebar from "./components/layout/Sidebar"
import Content from "./components/layout/Content"
import Footer from "./components/layout/Footer"

function App() {
  return (<>
      <Header
        name = "John Doe"
      />
      <Sidebar/>
      <Content/>
      <Footer/>
    </>
  )
}

export default App
