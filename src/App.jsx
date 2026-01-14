import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Flex, Button, Affix, Title } from '@mantine/core';
import { Text, Paper } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks'
import Categories from './components/Categories';
function App() {
  const {height, width} = useViewportSize()

  return ( 
    <Flex
      mih={height}
      
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
       bg="var(--mantine-color-blue-light)" 
    >
      
      <Affix position={{top:20}} style={{width:width}}>
          <Title order={3} c="var(--mantine-color-blue-8)" style={{textAlign:"center"}}>Válogass a könyvtárból</Title>

      </Affix>
      
      <Categories/>

    </Flex>

    
  )
}

export default App
