import React from 'react'
import InitialSetup from './initialsetup'
import './horse.css'

class Horse extends React.Component {
    constructor(props){
      super(props);
      this.handleStart = this.handleStart.bind(this);
      this.state = {
        initialSetup: false,
        player1: {
            type: "",
            name: "" 
        },
        player2: {
            type: "",
            name: "" 
        },
        player3: {
            type: "",
            name: "" 
        },
        player4: {
            type: "",
            name: "" 
        },
      }
    }

    handleStart = (data) =>{
        
        this.setState({
            player1: {
                type: data.player1.type,
                name: data.player1.name
            },
            player2: {
                type: data.player2.type,
                name: data.player2.name
            },
            player3: {
                type: data.player3.type,
                name: data.player3.name
            },
            player4: {
                type: data.player4.type,
                name: data.player4.name
            }    
        })

    }
  
    render(){
      if (!this.state.initialSetup){
      return <InitialSetup handleStart={this.handleStart}/>} else 
      {
  
      }
    }
  }

  export default Horse