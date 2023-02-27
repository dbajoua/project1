import React from "react";

const Spot = (props) => {

    return (

        <div>

        <td className={'Spot ' + props.color}>
                <h2>{props.spot}</h2>
                <h5>{props.desc}</h5>
            </td>

        

        </div>

    )

  
}

export default Spot;

