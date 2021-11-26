import '../App.css';
import React, { useEffect } from 'react';
import $ from 'jquery';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
function Grad(props) {
  const [graduate, setFaculty] = React.useState([]);
  let [image] = React.useState('');
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

    Xhr({ path: '/degrees/' }).done(function (json) {
      console.log(json);
      setFaculty(json.graduate);

    });
  }, []);

  return (


    <Box sx={{ background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)', color: 'black', width: '100%', boxShadow: "20px", minHeight: "150px" }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {graduate.map(function (fac, index) {
          let image = require(`../assets/grad/${fac.degreeName}.jpg`);
          let list = fac.concentrations;

          return (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Paper elevation={12} variant="elevation" sx={{ borderRadius: '20px' }} >
                <Card sx={{ background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)', color: 'black', width: '100%', boxShadow: "20px", minHeight: "750px" }}>
                  <CardMedia
                    component="img"
                    sx={{ height: 251 }}
                    height="100%"
                    width="100%"
                    image={image.default}
                    alt={fac.name}
                  />
                  <CardContent>

                    <Typography variant="overline" display="block" gutterBottom>
                      <h2><strong>{fac.title} ({fac.degreeName})</strong>  </h2>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <em>{fac.description}</em>
                    </Typography>
                    <Typography variant="overline" gutterBottom>
                      <h3> Concentrations : </h3>
                    </Typography>
                    <Typography variant="overline" gutterBottom>
                      <strong> {fac.concentrations}</strong>
                    </Typography>
                    <Typography variant="overline" gutterBottom>
                      <strong> {fac.availableCertificates}</strong>
                    </Typography>
                  </CardContent>

                </Card>
              </Paper>
            </Grid>

          );
        })}
      </Grid>
    </Box>

  );
}


export default Grad;
