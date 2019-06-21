import React, {Component} from "react";
import Room1 from "../section_1/Section1_room1";
import Room2 from "../section_1/Section1_room2";
import Room3 from "../section_1/Section1_room3";
import Room4 from "../section_1/Section1_room4";

class Section1 extends Component {
    render() {
        return (
            <div>
                <Room1/>
                <Room2/>
                <Room3/>
                <Room4/>
            </div>
        )
    }
}
export default Section1;