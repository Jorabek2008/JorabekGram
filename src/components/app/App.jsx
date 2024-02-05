import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Main, VideoDetail, Search, Navbar} from '../index'
import Error from './../error/Error';

function App() {
  return (
    <Box>
    <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/video/:id' element={<VideoDetail />}/>
        <Route path='/search/:id' element={<Search />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </Box>
  )
}

export default App