import React, { useEffect, useState } from 'react';
import background from "./assets/background.png"
import player1 from "./assets/player1.png"
import player2 from "./assets/player2.png"
import player3 from "./assets/player3.png"
import player4 from "./assets/player4.png"
import './App.css'

const EmployeeInfo = (props) => {
    const [data, setData] = useState([])
    const [mode, setMode] = useState(0)
    const [name, setName] = useState("")
    const [favColor, setFavColor] = useState('')
    const [charType, setCharType] = useState("A")


    async function fetchEmployee() {
        const url = window.location.href;
        const id = url.substring(url.lastIndexOf('/') + 1);
        
        const { data, error } = await props.supabase.from('Crew').select().or(`id.eq.${id}`);
        setData(data)

    }
    function activateInput(id) {
        const elem = document.getElementById('radio-' + id)
        elem.checked = true;
    }

    async function updateEmployee() {
        const url = window.location.href;
        const id = url.substring(url.lastIndexOf('/') + 1);
        const { error } = await props.supabase.from('Crew').update({
            name: name, "favorite-color": favColor, "character-type": charType
        }).eq('id', id)
        setMode(0)
        fetchEmployee()
    }


    function renderEmployee() {
        if (mode == 0) {
            if (data.length <= 0) {
                return(
                    <h1>Character Not Found</h1>
                )
            }
    
            const employee = data[0];
            if (employee['character-type'] == "A") {
                return (
                    <div className='employee-elem'>
                        <img className="character" src={player1} onClick={() => {window.location.href = "/employee/" + employee.id}}></img>
                        <p>{"Character ID: " + employee['id']}</p>
                        <p>{"Name: " + employee['name']}</p>
                        <p>{"Favorite Color: " + employee['favorite-color']}</p>
                        <p>{"Character Type: " + employee['character-type']}</p>
                        <button onClick={() => {setMode(1)}}>Edit</button>
                    </div>
                );
            } else if (employee['character-type'] == "B") {
                return (
                    <div className='employee-elem'>
                        <img className="character" src={player2} onClick={() => {window.location.href = "/employee/" + employee.id}}></img>
                        <p>{"Character ID: " + employee['id']}</p>
                        <p>{"Name: " + employee['name']}</p>
                        <p>{"Favorite Color: " + employee['favorite-color']}</p>
                        <p>{"Character Type: " + employee['character-type']}</p>
                        <button onClick={() => {setMode(1)}}>Edit</button>
                    </div>
                );
            } else if (employee['character-type'] == "C") {
                return (
                    <div className='employee-elem'>
                        <img className="character" src={player3} onClick={() => {window.location.href = "/employee/" + employee.id}}></img>
                        <p>{"Character ID: " + employee['id']}</p>
                        <p>{"Name: " + employee['name']}</p>
                        <p>{"Favorite Color: " + employee['favorite-color']}</p>
                        <p>{"Character Type: " + employee['character-type']}</p>
                        <button onClick={() => {setMode(1)}}>Edit</button>
                    </div>
                );
            } else if (employee['character-type'] == "D") {
                return (
                    <div className='employee-elem'>
                        <img className="character" src={player4}></img>
                        <p>{"Character ID: " + employee['id']}</p>
                        <p>{"Name: " + employee['name']}</p>
                        <p>{"Favorite Color: " + employee['favorite-color']}</p>
                        <p>{"Character Type: " + employee['character-type']}</p>
                        <button onClick={() => {setMode(1)}}>Edit</button>
                    </div>
                );
            }
        }
        else {
            return(
                <div className='create-employee'>
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
                <input type='text' placeholder='name' value={name} onChange={(e) => {setName(e.target.value)}}></input>
                <input type='text' placeholder='favorite color' value={favColor} onChange={(e) => {setFavColor(e.target.value)}}></input>
                <button onClick={() => updateEmployee()}>Submit</button>
              </div>
            )

        }
    }
    
    useEffect(() => {
        fetchEmployee()
    }, [])
    
    return (
        <div className='App'>
            <img className="page-background" src={background}></img>
            <div className='employee-board'>
                {renderEmployee()}
            </div>
        </div>
    );
};

export default EmployeeInfo;