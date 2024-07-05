import logo from "./logo.svg";
import "./App.scss";
import Home from "./Home/home.js";
import Document from "./Docs/docs.js";
import Login from "./login/login.js";
import Signup from "./signup/signup.js";
import WorkItem from "../components/WorkItem/WorkItem.js";

import Nav from "./Nav/nav.js";
import Footer from "./Footer/footer.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav></Nav>
                <header className="App-header">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <WorkItem
                                    image="https://plus.unsplash.com/premium_photo-1719430640326-abe915b26c8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    descript="nettoyer"
                                    avatar="https://images.unsplash.com/photo-1719430074740-a5ee49a67d45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    location="Paris"
                                    time="2h ago"
                                />
                            }
                        />
                        <Route path="/document" element={<Document />} />
                        <Route path="/download" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </header>
                {/* <Footer></Footer> */}
            </div>
        </BrowserRouter>
    );
}

export default App;
