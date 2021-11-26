/* undergraduate DEGREE PAGE */
import '../App.css';
import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Minor_Modal } from '../component/Minor_modal.js'
import { GlobalStyle } from './globalStyles';
import Collapse from '@mui/material/Collapse';
function Minor(props) {

  const [CardClick, setCardClick] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [undergraduate, setFaculty] = React.useState([]);

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

    Xhr({ path: '/minors/' }).done(function (json) {
      console.log(json);
      setFaculty(json.UgMinors);

    });
  }, []);
  const handleCardClick = (cardObject) => {
    setCardClick(cardObject);

    setShowModal(prev => !prev);

  }

  return (


    <Box sx={{ background: 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)', paddingLeft: '12%', paddingTop: '8%', width: '100%' }}>
      <div style={{ paddingLeft: '30%', width: '84%', background: 'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)', marginBottom: '20px' }}>
        <h1 >Undergraduate minors Offered</h1> </div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        {undergraduate.map(function (fac, index) {
          let image = require(`../assets/${fac.name}.jpg`);

          return (

            <Grid item xs={2} sm={4} md={4} key={index}>

              <Paper elevation={12} variant="elevation" sx={{ borderRadius: '20px', width: '50%' }}>

                <Card sx={{ background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)', color: 'black', width: '100%', boxShadow: "20px", minHeight: "250px" }} onClick={() => handleCardClick(fac)}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      sx={{ height: '100%' }}
                      height="100%"
                      width="100%"
                      height='100%'
                      image={image.default}
                      alt={fac.degreeName}
                    />
                    <Typography variant="h12" display="block" gutterBottom>
                      <block><strong>{fac.title}</strong>  </block>
                    </Typography>
                    <Typography variant="h12" display="block" gutterBottom>
                      <block><strong>{fac.Advisor}</strong>  </block>
                    </Typography>


                  </CardContent>

                </Card>
              </Paper>
            </Grid>

          );
        })}
        <Minor_Modal showModal={showModal} setShowModal={setShowModal} CardClick={CardClick} />
        <GlobalStyle />
      </Grid>
    </Box>

  );
}


export default Minor;
