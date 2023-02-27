import React from "react";
import Spot from "./Spot";

const StudyLocations = () => {

    return (

        <div className="StudyLocations">

       
       <h3>University of California, San Diego</h3>

       <table>
        <thead>

        </thead>

        <tbody>

            <tr>
                <td className="places"></td>
                <Spot spot='Geisel Library 📚 ' color='green' desc='8 levels, lots of seating' />
                <Spot spot='La Jolla Shores 🌊' color='blue' desc='breezy, bring a jacket'/>
                <Spot spot='Warren Campus 🏰' color='green' desc='very flat, nice lawn'/>
                <Spot spot='Sixth Campus  🏭 ' color='blue'desc='very modern, nice restaurants'/>
                <Spot spot='Revelle Campus 🏰' color='green'desc='Nice hall Galbraith'/>
                <Spot spot='Seventh Campus 🏯' color='blue'desc='Newly built, Oceanview'/>
                <Spot spot='Marshall Campus 🥅' color='green'desc='Relaxing Marshall field'/>
                <Spot spot='Price Center  🧱' color='blue' desc='Lots of dining options - fastfood and more'/>
                <Spot spot='Warren Field 🏟' color='green'desc='Nice lawn'/>
                <Spot spot='UTC MALL 🏬' color='blue'desc='Busy, free 2hr parking' />
             

            </tr>
        </tbody>
        
       </table>


        </div>

    )
  
}

export default StudyLocations;
