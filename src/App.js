
import React from 'react';
import './App.css';
import { Grid } from '@mui/material';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';



class App extends React.Component {
  render() {
    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <SearchBar />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail />


            </Grid>
            <Grid item xs={8}>
              <VideoList />

            </Grid>
          </Grid>

        </Grid>

      </Grid>
    )
  }
}

export default App;
