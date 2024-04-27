import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Employee from "./Employee.jsx"
import EmployeeInfo from "./EmployeeInfo.jsx"
import CreateEmployee from './CreateEmployee.jsx'
import Review from "./Review.jsx"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'
import './App.css'

const supabaseUrl = 'https://nyeedqbhfpipovcuhcvj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55ZWVkcWJoZnBpcG92Y3VoY3ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5MDk1NDAsImV4cCI6MjAyODQ4NTU0MH0.JnpnjH8HIg-OFWVf2Ngxem0db3MfuowkFX1x-M9wYzM"
const supabase = createClient(supabaseUrl, supabaseKey)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='navbar'>  
          <Link to={"/"}>
            <h1>Home</h1>
          </Link>
          <Link to={"/list"}>
            <h1>Employees</h1>
          </Link>
          <Link to={"/create-employee"}>
            <h1>Create Employee</h1>
          </Link>
    </div>
    <Routes>
        <Route path="/" element={<App supabase={supabase}/>} />
        <Route path="/list" element={<Employee supabase={supabase}/>} />
        <Route path="/create-employee" element={<CreateEmployee supabase={supabase}/>} />
        <Route path="/employee/:id" element={<EmployeeInfo supabase={supabase}/>} />
        <Route path="/review/:id" element={<Review supabase={supabase}/>} />
    </Routes>
  </BrowserRouter>
)
