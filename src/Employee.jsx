import React, { useEffect, useState } from 'react';
import background from "./assets/background.png"
import player1 from "./assets/player1.png"
import player2 from "./assets/player2.png"
import player3 from "./assets/player3.png"
import player4 from "./assets/player4.png"

import "./App.css"

const Employee = (props) => {
    const [data, setData] = useState([])

    async function fetchEmployee() {
        const { data, error } = await props.supabase.from('Crew').select()
        setData(data)
    }

    async function deleteEmployee(id) {
        const { error } = await props.supabase.from('Crew').delete().eq('id', id)
        fetchEmployee()
    }

    
    

    function renderEmployee() {
        let elemList = []
        for (let employee of data) {
            if (employee['character-type'] == "A") {
                elemList.push(
                    <div className='employee-elem'>
                        <img className="character" src={player1} onClick={() => {window.location.href = "/employee/" + employee.id}}></img>
                        <p>{"Name: " + employee['name']}</p>
                        <p>{"Favorite Color: " + employee['favorite-color']}</p>
                        <button onClick={() => {deleteEmployee(employee.id)}}>Delete</button>
                    </div>
                )
            }
            else if (employee['character-type'] == "B") {
                elemList.push(
                    <div className='employee-elem'>
                        <img className="character" src={player2} onClick={() => {window.location.href = "/employee/" + employee.id}}></img>
                        <p>{"Name: " + employee['name']}</p>
                        <p>{"Favorite Color: " + employee['favorite-color']}</p>
                        <button onClick={() => {deleteEmployee(employee.id)}}>Delete</button>
                    </div>
                )
            }
            else if (employee['character-type'] == "C") {
                elemList.push(
                    <div className='employee-elem'>
                        <img className="character" src={player3} onClick={() => {window.location.href = "/employee/" + employee.id}}></img>
                        <p>{"Name: " + employee['name']}</p>
                        <p>{"Favorite Color: " + employee['favorite-color']}</p>
                        <button onClick={() => {deleteEmployee(employee.id)}}>Delete</button>
                    </div>
                )
            }
            else if (employee['character-type'] == "D") {
                elemList.push(
                    <div className='employee-elem'>
                        <img className="character" src={player4} onClick={() => {window.location.href = "/employee/" + employee.id}}></img>
                        <p>{"Name: " + employee['name']}</p>
                        <p>{"Favorite Color: " + employee['favorite-color']}</p>
                        <button onClick={() => {deleteEmployee(employee.id)}}>Delete</button>
                    </div>
                )
            }
        }

        return elemList

    }

    useEffect(() => {
        fetchEmployee()
    }, [])
    
    return (
        <div className='App'>
            <img className="page-background" src={background}></img>
            <div className='employee-board'>
                    <h1 className='employee-board-header'>Employee Board</h1>
                    <div className='employee-section'>
                        {renderEmployee()}
                    </div>
            </div>
        </div>
    );
};

export default Employee;