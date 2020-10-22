import React from 'react';

function Point(props){
    console.log(props);

    const descOjb = props.pointDesc.find((point)=> point.pointTitle === props.point)
    

    return(
        <div>
            <div className="point-title">{props.point}</div>
            <div className="point-desc">{descOjb.text}</div>
        </div>
    )
}

export default Point;