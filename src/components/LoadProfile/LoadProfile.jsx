import { useState } from "react";
import './LoadProfile.css';


function LoadProfile() {

    //input
    const [fuel, setFuel] = useState(100);
    const [interest, setInterest] = useState(0.5);


    //result

    //not changed
    const [loadFactor, setLoadFactor] = useState(80);
    const [plantUseFactor, setPlantUseFactor] = useState(90);
    const [plantCapacityFactor,setPlantCapacityFactor] = useState(92);
    const [maxDemand, setMaxDemand] = useState(2000);
    const [unitGenerated, setUnitsGenerated] = useState(1922);

    //changed
    const [annualOperatingCost, setAnnualOperatingCost] = useState(20000);


  return (
        <div className="loadProfile">
            <div className="loadProfile__container">
                <h1>Load Profile 1</h1>
                <div className="result__heading">
                    <h1>Input</h1>
                </div>

                <div className="loadProfile__chart">

                </div>

                <div className="loadProfile__input__container">
                    <div className="loadProfile__input">
                        <h3>Fuel Cost = </h3>
                        <input type="number" value={fuel} onChange={(e)=>setFuel(e.target.value)}></input>
                    </div>

                    <div className="loadProfile__input">
                        <h3>Interest Rate = </h3>
                        <input type="number" value={fuel} onChange={(e)=>setFuel(e.target.value)}></input>
                    </div>
                </div>

                <div className="loadProfile__result__container">
                    
                    <div className="result__heading">
                        <h1>Result</h1>
                    </div>

                    <div className="loadProfile__result__main">

                        <div className="loadProfile__result">
                            <h3>Load Factor = </h3>
                            <input type="number" value={loadFactor}></input>
                        </div>

                        <div className="loadProfile__result">
                            <h3>Plant Use Factor = </h3>
                            <input type="number" value={plantUseFactor}></input>
                        </div>

                        <div className="loadProfile__result">
                            <h3>Plant Capacity Factor = </h3>
                            <input type="number" value={plantCapacityFactor}></input>
                        </div>

                        <div className="loadProfile__result">
                            <h3>Max Demand = </h3>
                            <input type="number" value={maxDemand}></input>
                        </div>

                        <div className="loadProfile__result">
                            <h3>Unit generated per annum = </h3>
                            <input type="number" value={unitGenerated}></input>
                        </div>

                        <div className="loadProfile__result">
                            <h3>Annual Operating Cost = </h3>
                            <input type="number" value={annualOperatingCost}></input>
                        </div>

                    </div>

                </div>

            </div>
        </div>
  )
}

export default LoadProfile;
