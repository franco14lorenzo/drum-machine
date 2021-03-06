
import { useRef, useState } from 'react';
import './App.scss';
import {bankOne, bankTwo} from './keySounds'
import { Switch, Button } from '@material-ui/core';

function App() {

  const sliderRef = useRef(null)
  
  let audio
  let audioq = useRef()
  let audiow = useRef()
  let audioe = useRef()
  let audioa = useRef()
  let audios = useRef()
  let audiod = useRef()
  let audioz = useRef()
  let audiox = useRef()
  let audioc = useRef()

  window.document.onkeyup = (event) => {
    console.log(event.code);
    let keypress = event.code
    switch (keypress){
      case ("KeyQ"):
        playSound("Q")
        break
     
      case ("KeyW"):
        playSound("W")
        break
      case ("KeyE"):
        playSound("E")
        break
      case ("KeyA"):
        playSound("A")
        break
      case ("KeyS"):
        playSound("S")
        break
      case ("KeyD"):
        playSound("D")
        break
      case ("KeyZ"):
        playSound("Z")
        break
      case ("KeyX"):
        playSound("X")
        break
      case ("KeyC"):
        playSound("C")
        break
      case ('Space'):
       
        console.log('alohaaa');
        spacePress()
        break
      default:
        return    
    }
  }

  const [soundName, setSoundName] = useState("ON");
  const [bank, setBank] = useState(bankOne);

  const spacePress = () => {
   sliderRef.current.click()
  }
  const switchBank = () => {
    setBank((bank) => {
      if (bank === bankOne){
        return bankTwo
      }else {
        return bankOne
      }
    })
  }

 const playSound = (str) => {

  switch(str){
    case "Q":
      audio = audioq
      break
    case "W":
     audio = audiow
     break
    case "E": 
      audio = audioe
      break
    case "A":
      audio = audioa
      break
    case "S":
      audio = audioa
      break
    case "D":
      audio = audiod
      break
    case "Z":
      audio = audioz
      break
    case "X":
      audio = audiox
      break
    case "C":
      audio = audioc
      break
    default:
      return audio;
   }
  
   let filter = bank.find((clip) => clip.keyTrigger === str)
   setSoundName(filter.id)
   audio.current.src = filter.url
   audio.current.play()
 }

  return (
    <div className="App" id="drum-machine">
      <div id="machine">

      <div className="App-header" id="display">
        {soundName}
      </div>
      <div id="selector">
      <p>
      Bank One
      </p>
      <Switch
      title="Press Spacebar"
        ref={sliderRef}
        defaultChecked
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
        id="switch-bank" 
        onClick={() => switchBank()}
      />
      <p>
      Bank Two
      </p>    
      </div>
      <div className="pad">
          <Button disableElevation variant="contained" className="drum-pad" id="drum-q" onClick={()=>playSound('Q')}>
            Q
            <audio src='' className="clip" id="Q" ref={audioq} ></audio>
          </Button>
          <Button disableElevation variant="contained" className="drum-pad" id="drum-w" onClick={()=>playSound('W')}>
            W
            <audio src='' className="clip" id="W"  ref={audiow}></audio>
          </Button>
          <Button disableElevation variant="contained" className="drum-pad" id="drum-e" onClick={()=>playSound('E')}>
            E
            <audio src='' className="clip" id="E"  ref={audioe}></audio>
          </Button>
          <Button  disableElevation variant="contained"className="drum-pad" id="drum-a" onClick={()=>playSound('A')}>
            A
            <audio src={bankOne[1].url} className="clip" id="A"  ref={audioa}></audio>
          </Button>
          <Button  disableElevation variant="contained"className="drum-pad" id="drum-s" onClick={()=>playSound('S')}>
            S
            <audio src='' className="clip" id="S"  ref={audios}></audio>
          </Button>
          <Button disableElevation variant="contained" className="drum-pad" id="drum-d" onClick={()=>playSound('D')}>
            D
            <audio src='' className="clip" id="D"  ref={audiod}></audio>
          </Button>
          <Button  disableElevation variant="contained"className="drum-pad" id="drum-z" onClick={()=>playSound('Z')}>
            Z
            <audio src='' className="clip" id="Z"  ref={audioz}></audio>
          </Button>
          <Button disableElevation variant="contained" className="drum-pad" id="drum-x" onClick={()=>playSound('X')}>
            X
            <audio src='' className="clip" id="X"  ref={audiox}></audio>
          </Button>
          <Button disableElevation variant="contained" className="drum-pad" id="drum-c" onClick={()=>playSound('C')}>
            C
            <audio src='' className="clip" id="C"  ref={audioc}></audio>
          </Button>
        </div>
      </div>
       <div class="footer">by <a href="https://github.com/franco14lorenzo" target="_blank" rel="noreferrer"><u>Franco Lorenzo</u></a></div>
    </div>
  );
}

export default App;