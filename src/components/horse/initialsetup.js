import React from 'react';


const InitialSetup = (props) => {
    const data = {
        player1: {
            type: "player",
            name:"player"
        },
        player2: {
            type: "cpu",
            name:"cpu1"
        },
        player3: {
            type: "cpu",
            name:"cpu2"
        },
        player4: {
            type: "cpu",
            name:"cpu3"
        },

    }
    return ((<div id="players">
        <div className="player-input">
      <label>Name:</label><input></input><select>
          <option>player</option><option>cpu</option>
      </select>
      </div>
      <div className="player-input">
      <label>Name:</label><input></input><select>
          <option>player</option><option>cpu</option>
      </select>
      </div>
      <div className="player-input">
      <label>Name:</label><input></input><select>
          <option>player</option><option>cpu</option>
      </select>
      </div>
      <div className="player-input">
      <label>Name:</label><input></input><select>
          <option>player</option><option>cpu</option>
      </select>
      </div>

   
      <button onClick={()=>{props.handleStart(data)}} id="start-button">Start Game</button>
      
    </div>))
  }

  export default InitialSetup;