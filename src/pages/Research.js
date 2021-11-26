import '../App.css';
import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Modal } from '../component/Modal_Research.js'
import Button from '@mui/material/Button';
import { GlobalStyle } from './globalStyles';

function Research(props) {
  const [CardClick, setCardClick] = useState('');
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };
  const [research, setStaff] = React.useState([]);
  useEffect(() => {
    function Xhr(path) {
      return $.ajax({
        type: 'GET',
        url: 'http://serenity.ist.rit.edu/~plgics/proxy.php',
        data: path,
        cache: false,
        async: true,
        dataType: "json",
      });
    }

    Xhr({ path: '/research/' }).done(function (json) {
      setStaff(json.byInterestArea);
    });

  }, []);

  const handleCardClick = (cardObject) => {
    setCardClick(cardObject);

    setShowModal(prev => !prev);

  }
  return (


    <Box sx={{ background: 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)', paddingLeft: '18%', paddingTop: '8%', paddingRight: '15%', width: '100%' }}>
      <div style={{ paddingLeft: '40%', width: '100%', background: 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)', marginBottom: '20px' }}>
        <h1 >Research Areas :</h1> </div>
      <Grid container spacing={{ xs: 5, md: 5 }} columns={{ xs: 6, sm: 5, lg: 5, md: 5 }}>
        {research.map(function (fac, index) {

          let image = require(`../assets/${fac.areaName}.jpg`);
          console.log(image);
          return (
            <Grid item xs={1} sm={1} md={1} key={index}>
              <Paper elevation={3} variant="elevation" sx={{ borderRadius: "50%", }}>
                <Card sx={{ bgcolor: "#768087", width: '100%', borderRadius: "45%", }} onClick={() => handleCardClick(fac)}>
                  <CardMedia
                    component="img"
                    height="170"
                    width="10"
                    image={image.default}
                    alt={fac.name}
                  />




                </Card>
              </Paper>

            </Grid>

          );
        })}
        <Modal showModal={showModal} setShowModal={setShowModal} CardClick={CardClick} />
        <GlobalStyle />

      </Grid>

    </Box>



  );
}
export default Research;
