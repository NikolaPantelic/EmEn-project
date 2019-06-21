import React, {Component} from "react";
import Slideshow from "./section_carousele";
import About from "./section_about";

class SectionMain extends Component {
    render() {
        return (
            <div>
                <Slideshow/>
                <About/>
            </div>
        )
    }
}

export default SectionMain;
