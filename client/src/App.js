import { Routes, Route, BrowserRouter } from "react-router-dom"
import Nav from "./components/Nav"
import Auth from "./pages/Auth"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import PendingDoubts from "./pages/PendingDoubts"
import RaiseDoubt from "./pages/RaiseDoubt"
import SingleDoubts from "./pages/SingleDoubts"
export default function App() {
    return (
        <div className="min-h-screen w-screen mx-auto bg-slate-100">
            <BrowserRouter>
                <Nav/>
                <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="auth">
                        <Route path="signup" element={<Auth isLogin={false}/>} />
                        <Route path="login" element={<Auth isLogin={true}/>} />
                    </Route>
                    <Route path="dashboard" element={<Dashboard/>} />
                    <Route path="raise-doubt" element={<RaiseDoubt/>} />
                    
                    <Route path="doubts">
                        <Route index element={<PendingDoubts/>} />
                        <Route path=":doubtId" element={<SingleDoubts />} />
                    </Route>
                    <Route path="assigned">
                        <Route path=":doubtId" element={<SingleDoubts />} />
                    </Route>
                </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}