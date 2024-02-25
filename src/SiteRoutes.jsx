import { Route, Routes } from "react-router-dom"
import TaskForm from "./tasks/TaskForm"
import Home from "./pages/Home"
import Call from "./pages/Call"
import PageNoteFound from "./pages/PageNoteFound"
import CenterData from "./pages/CenterData"
import Login from "./pages/Login"
import PrivateRoute from "./PrivateRoute"


function SiteRoutes({handleLogin, user}) {
    const {features} = CenterData
    return (
        <Routes>
            <Route path="/" element={<Home features={features}/>} />
            <Route path="/yonetici" element={<PrivateRoute user={user}><TaskForm user={user} /></PrivateRoute>} />
            <Route path="/acilcagri" element={<Call/>} />
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
            <Route path="*" element={<PageNoteFound/>} />
        </Routes>
    )
}

export default SiteRoutes