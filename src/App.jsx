import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Flex, Button, Affix, Title } from '@mantine/core';
import { Text, Paper } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks'
import Categories from './components/Categories';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Books from './components/Books';
import BooksByCateg from './components/BooksByCateg';
import SearchResult from './components/SearchResult';
import { MyMenu } from './components/MyMenu';
function App() {
  const {height, width} = useViewportSize()
  const isMobile = useMediaQuery('(max-width:525px)')
  return ( 
    <BrowserRouter>
        <Flex
          mih={height}
          
          gap="md"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
          bg="var(--mantine-color-blue-light)" 
        >
          
          <Affix position={{top:0}} style={{width:width, backgroundColor:"indigo", padding:"20px"}}>
              <Title order={3} c="white" style={{textAlign:"center"}}>Válogass a könyvtárból</Title>
          </Affix>
          <Affix position={{top: isMobile ? 50 : 20, right:10}}>
              <MyMenu/>
          </Affix>

        <Routes>
            <Route path='/' element={<Categories/>}/>
            <Route path='/books' element={<Books/>}/>
            <Route path='/books/category/:categId' element={<BooksByCateg/>}/>
            <Route path='/search/:txt' element={<SearchResult/>}/> 
        </Routes>
          

        </Flex>
    </BrowserRouter>

    
  )
}

export default App
