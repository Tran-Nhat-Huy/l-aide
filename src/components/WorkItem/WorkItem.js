import React from "react";
import "./WorkItem.scss";

function WorkItem(props) {
    console.log(props);
    return (
        <div className="grid-container">
            <div className="work-item">
                <div className="on">
                    <div className="image">
                        <img src={props.image} />
                    </div>
                    <div className="description">
                        <p>{props.descript}</p>
                    </div>
                </div>
                <div className="under">
                    <div className="avata">
                        <img src={props.avatar} />
                    </div>
                    <div className="location">
                        <p>{props.location}</p>
                    </div>
                    <div className="time">
                        <p>{props.time}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkItem;
