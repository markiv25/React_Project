/* Faculty PAGE */
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
import Modal_People from '../component/Modal_People.js'
import { GlobalStyle } from './globalStyles';

function Peo_ple(props) {
  const [CardClick, setCardClick] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [faculty, setFaculty] = React.useState([]);

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

    Xhr({ path: '/people/' }).done(function (json) {
      console.log(json);
      setFaculty(json.faculty);

    });
  }, []);
  const handleCardClick = (cardObject) => {
    setCardClick(cardObject);

    setShowModal(prev => !prev);

  }
  return (


    <Box sx={{ paddingTop: '1px', width: '100%', background: 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)' }}>
      <Grid container spacing={{ xs: 5, md: 5 }} columns={{ xs: 6, sm: 5, lg: 5, md: 5 }}>
        {faculty.map(function (fac, index) {
          return (
            <Grid item xs={1} sm={1} md={1} key={index}>
              <Paper elevation={12} variant="elevation" sx={{ borderRadius: '20px' }}>
                <Card sx={{ background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)', color: 'black', width: '100%', boxShadow: "20px", minHeight: "150px" }} onClick={() => handleCardClick(fac)}>
                  <CardMedia
                    component="img"
                    sx={{ height: 200}}
                    height="100%"
                    width="100%"
                    image={fac.imagePath}
                    alt={fac.name}
                  />

                  <CardContent>
                    <Typography variant="h9" display="block" gutterBottom>
                      <block><strong>{fac.name} ({fac.username})</strong>  </block>
                    </Typography>

                  </CardContent>

                </Card>
              </Paper>
            </Grid>

          );
        })}
        <Modal_People showModal={showModal} setShowModal={setShowModal} CardClick={CardClick} />
        <GlobalStyle />
      </Grid>
    </Box>

  );
}


export default Peo_ple;
