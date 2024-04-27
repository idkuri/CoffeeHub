import React, {useState} from 'react';
import player1 from "./assets/player1.png"
import player2 from "./assets/player2.png"
import player3 from "./assets/player3.png"
import player4 from "./assets/player4.png"
import background from "./assets/background.png"

const CreateEmployee = (props) => {
    const [name, setName] = useState("")
    const [favColor, setFavColor] = useState('')
    const [charType, setCharType] = useState("A")
    function activateInput(id) {
        const elem = document.getElementById('radio-' + id)
        elem.checked = true;
      }
    
      async function createEmployee() {
        const { data, error } = await props.supabase.from('Crew').select()
        const { e } = await props.supabase
        .from('Crew')
        .insert({name: name, "favorite-color": favColor, "character-type": charType})
    
        window.location.href = "/list";
    }
  
    return (
        <div className='App'>
        <img className="page-background" src={background}></img>
            <div className='create-employee'>
                <h1 className='creater-character-header'>Create Your Character</h1>
                <div>
                <ul className='character-selection'>
                    <li className='selection-elem'>
                    <input id="radio-1" type="radio" name="character-select" value="A" />
                    <img className='character' src={player1} onClick={() => {activateInput("1") ; setCharType("A")}} />
                    </li>
                    <li>
                    <input id="radio-2" type="radio" name="character-select" value="B" />
                    <img className='character' src={player2} onClick={() => {activateInput("2") ; setCharType("B")}} />
                    </li>
                    <li>
                    <input id="radio-3" type="radio" name="character-select" value="C" />
                    <img className='character' src={player3} onClick={() => {activateInput("3") ; setCharType("C")}} />
                    </li>
                    <li>
                    <input id="radio-4" type="radio" name="character-select" value="D" />
                    <img className='character' src={player4} onClick={() => {activateInput("4") ; setCharType("D")}} />
                    </li>
                </ul>
                </div>
                <input type='text' placeholder='name' value={name} onChange={(e) => {setName(e.target.value)}}></input>
                <input type='text' placeholder='favorite color' value={favColor} onChange={(e) => {setFavColor(e.target.value)}}></input>
                <button onClick={() => createEmployee()}>Submit</button>
      </div>
        </div>
    );
};

export default CreateEmployee;