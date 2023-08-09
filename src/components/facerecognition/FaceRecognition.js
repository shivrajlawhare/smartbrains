import React from "react";
import './FaceRecognition.css'

const FaceRecognition = ({imgurl,box}) => {
    return(
        <div className="center mt2" >
            <div className="relative mt2">
                <img id = 'inputimage' alt='' src={imgurl} width='500px' height='auto'></img>
                <div className="bounding-box" style={{top: box.toprow , right: box.rightcol , bottom: box.bottomrow , left: box.leftcol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;