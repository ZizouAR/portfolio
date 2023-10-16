import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Particles from "./components/Particles";
import { Switch } from "./components/Switch";



export default function Router() {

    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="" element={<Home />} />
            </Routes>
            <Switch />
            <Particles />
        </BrowserRouter>
    )
}