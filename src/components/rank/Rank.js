import React from "react";
import './Rank.css';

const Rank = ({ name, entries }) => {
    return(
        <div className="tc pa3">
            <div className="white f3">
                {`${name}, your current entry count is...`}
            </div>
            <div className="white f2">
                {entries}
            </div>
        </div>
    );
}

export default Rank;