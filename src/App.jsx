import { Navigate, Route, Routes, useLocation } from "react-router"
import Navbar from "./components/global-components/Navbar"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"

function App() {

  const { pathname } = useLocation()

  return (
    <div className=''>
      {pathname == '/login' ? null : <Navbar />}
      <div className={`${pathname == '/login' ? '' : 'mt-[5.5rem]'}`}>
        <Routes>
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
