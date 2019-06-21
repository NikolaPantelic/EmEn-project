import React from 'react';
import "./scss/default.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import SectionMain from "./components/section/section";
import Section1 from "./components/section_1/Section1";
import SectionRegulamin from "./components/section_2/Section2";
import {HashRouter,Switch,Route} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <HashRouter>
                <header>
                    <Header/>
                </header>
                <section>
                    <Switch>
                        <Route exact path="/" component={SectionMain}/>
                        <Route path="/rooms" component={Section1}/>
                        <Route path="/regulamin" component={SectionRegulamin}/>
                    </Switch>
                </section>
                <footer>
                    <Footer/>
                </footer>
            </HashRouter>
        </div>
);
}
export default App;
