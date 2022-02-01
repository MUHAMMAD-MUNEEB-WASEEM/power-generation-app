import React from 'react';
import './Recommendation.css'

import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt, complex, re, im, add, multiply, atan, divide, subtract, cos, square, LN10, LN2, log2, acos, unit, ceil, format
} from 'mathjs'


function Recommendation() {

  const loadFactor = 100;
  const energy = 100;
  const maxDemand = 100;
  const unitGenerated = 100;
  const annualOperatingCost = 1000;
  const capitalCost = 11111;
  const runningCost = 10000;
  const semiFixedCost = 1010101;


  return (
    <div className='recommendation'>
        
        <div className="recommendation__table__container">
        
          <div className="recommendation__heading">
            <h1>Recommendation</h1>
          </div>

          <div className="recommendation__main">

            <div className='recommendation__table'>
                <table>
                  <tr>
                    <th>Generators</th>
                    <th>Rating</th>
                  </tr>
                      <tr>
                          <td>Season 1</td>
                          <td>Fireboy and Watergirl</td>
                      
                      </tr>
                      <tr>
                          <td>Season 2</td>
                          <td>Monster Earth and Witch Air</td>
                        
                      </tr>
                      <tr>
                          <td>Season 3</td>
                          <td>Breeding Game</td>
                        
                      </tr>
                      <tr>
                          <td>Season 4</td>
                          <td>Game on Sandbox</td>
                        
                        </tr>
                </table>
            </div>

            <div className="loadProfile__result__container">
                    
                    <div className="result__heading">
                        <h1>Result</h1>
                    </div>

                    <div className="loadProfile__result__main">

                        <div className="loadProfile__technical">

                            <div className="loadProfile__technical__heading">
                                <h1>Technical Analysis</h1>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Load Factor = </h3>
                                <input type="number" value={loadFactor.toFixed(2) * 100}></input>
                            </div>

                            {/* <div className="loadProfile__result">
                                <h3>Plant Use Factor = </h3>
                                <input type="number" value={plantUseFactor.toFixed(2) * 100}></input>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Plant Capacity Factor = </h3>
                                <input type="number" value={plantCapacityFactor.toFixed(2) * 100}></input>
                            </div> */}

                            <div className="loadProfile__result">
                                <h3>Max Demand (kW) = </h3>
                                <input type="number" value={format(maxDemand,10)}></input>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Energy in 24 hours (kW) = </h3>
                                <input type="number" value={format(energy, 3)}></input>
                            </div>


                            <div className="loadProfile__result">
                                <h3>Units generated per annum (kWh) = </h3>
                                <input type="number" value={format(unitGenerated,4)}></input>
                            </div>
                        
                        </div>

                        <div className="loadProfile__economical">

                            <div className="loadProfile__economical__heading">
                                <h1>Economical Analysis</h1>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Annual Operating Cost = </h3>
                                <input type="number" value={format(annualOperatingCost,3)}></input>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Fixed Cost = </h3>
                                <input type="number" value={format(capitalCost,3)}></input>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Semi Fixed Cost = </h3>
                                <input type="number" value={format(semiFixedCost,3)}></input>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Running Cost = </h3>
                                <input type="number" value={format(runningCost,3)}></input>
                            </div>
                        </div>
                    </div>
                </div>
            
          </div>

          


        </div>
    
    </div>
  )
}

export default Recommendation;
