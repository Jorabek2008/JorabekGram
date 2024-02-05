import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { ApiService } from '../../service/api';
import { Box, Container, Typography } from '@mui/material';
import { colors } from '../../constant/colors';
import Videos from '../videos/Videos';

function Search() {
  const {id} = useParams()
  
  const [videos, setVideos] = useState([]); 

  useEffect(() => {
    const getDate = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
        setVideos(data.items)
      } catch (error) {
        console.log(error)
      }
    }

    getDate()
  }, [id])
  return (
    <Box p={2} sx={{height: '90vh'}}>
      <Container maxWidth={'90%'}>
        <Typography variant='h4' fontWeight={'bold'} mb={2}>
          Search results for <span style={{color: colors.secondary}}>{id}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Container>
    </Box>
  )
}

export default Search