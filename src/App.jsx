import Header from "./components/layout/Header"
import Sidebar from "./components/layout/Sidebar"
import Content from "./components/layout/Content"
import Footer from "./components/layout/Footer"

// Better performance - array created once
const customMenuItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
];

function App() {

  return (<>
      <Header name = "John Doe" />
      <Sidebar menuItems={customMenuItems} />
      <Content/>
      <Footer/>
    </>
  )
}

export default App
