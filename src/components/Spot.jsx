import React from "react";

const Spot = (props) => {

    return (

        

        <td className={'Spot ' + props.color}>
                <h2>{props.spot}</h2>
                <h5>{props.desc}</h5>
            </td>

        

        

    )

  
}

export default Spot;

