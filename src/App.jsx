import { useState } from 'react'
import './App.css'
import BtnClick from './Btn_Click/BtnClick'


import Parent1 from './Product_Cards/Parent1'


import HooksUseeff from './Hooks/HooksUseeff'

import Navbar from './Navbar'
import ProfileCard from './ProfileCard'

import ListParent from './Props/ListParent'

import App2 from './App2'
import Parent from './Props/Parent'

import Task3List from './Task3List'

import Task4Props from './Props/Task4Props'
import List3Task from './List3Task'
import Task2Card from './Task2Card'
import Task1 from './Task1'
import Rough from './Product_Cards/Rough'
import Roughtask1 from './Roughtask1'


function App() {
 
  return (
    <><h1 className='tt'>Task 1 - to display the details which fetched by the input</h1>
     <Task1/>

     <h1 className='tt'>Task 2 - display details as a card </h1>
     <Task2Card/>

     <h1 className='tt'>Task 3 -Display details as list(static ip) </h1>
     <Task3List/>

     <h1 className='tt'>Task 4 -Dynamic list output</h1>
     <List3Task/>

     <h1 className='tt'>Task 5 - Data passing through parent and class (F - F)</h1>
     <Task4Props/> 

     <h1 className='tt'>Task 6 - Conditional rendering Intro ( for status variable )</h1>
     <App2 />

     <h1 className='tt '>Task 7 - Conditional Rendering for Availability variable</h1>
     <Parent/>

     <h1 className='tt'>Task 8 - List - using props</h1>
     <ListParent/>

     <h1 className='tt'>Task 9 - Static card </h1>
     <ProfileCard/>  

     <h1 className='tt'>Task 10 - Simple Navbar </h1>
     <Navbar/>

     <h1 className='tt'>Task 11 - Useeffect Hooks</h1>
    <HooksUseeff/>

    <h1 className='tt'>Task 12 - Search function using (.filter) and (List)</h1>
    <Parent1/>  

    <h1 className='tt'>Task 13 - Click function using usestate to  change texts </h1>
    <BtnClick />

    <h1 className='tt'>Task 14 - Just rough work</h1>
    {/* <Rough/> */}

    <Roughtask1/>
    </>
  )
}

export default App
