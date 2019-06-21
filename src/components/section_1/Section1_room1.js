import React, {Component} from "react";

class Room1 extends Component {
    render() {
        return (
            <div className="width">
                <div className="width_rooms">
                    <div className="room1_picture">
                    </div>
                    <div className="room_info">
                        <h3>Private Rooms</h3>
                        <p>For those who prefer more privacy and comfort we offer guesthouse-style single and double
                            rooms with made-up beds. The private rooms have views of Laugarvatn lake and Hekla volcano.
                            They also offer easy access to our large balconies, ideal spots for catching the northern
                            lights. You can choose between private rooms with shared or private facilities.</p>
                        <button className="room_button"><span>More Info</span></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Room1;