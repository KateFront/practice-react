import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import MainLayouts from "./layouts/MainLayouts";
import Courses from "./components/Courses";
import SingleCourse from "./components/SingleCourse";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path={'/'} element={<MainLayouts/>}>
                        <Route index={true} element={<Home/>}/>
                        <Route path={'about'} element={<About/>}/>
                        <Route path={'courses'} element={<Courses/>}/>
                        <Route path={'contacts'} element={<Contacts/>}/>
                        <Route path={'courses/:slug'} element={<SingleCourse/>}/>
                        <Route path={'*'} element={<NotFound/>}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
