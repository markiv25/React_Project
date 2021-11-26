import '../App.css';
import React, { useEffect } from 'react';
import $ from 'jquery';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FormatQuoteTwoToneIcon from '@mui/icons-material/FormatQuoteTwoTone';
import FaceIcon from '@mui/icons-material/Face';
import { Face } from '@material-ui/icons';
import styled from 'styled-components';

const Bgimage = styled.div`
  background: url("https://i.ibb.co/qN9kHWg/bg.jpg");
  height: 70%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  text-align : center;
}`
function About(props) {
  const [about, setFaculty] = React.useState([]);
  const styles = {
    paperContainer: {
      backgroundImage: `url(${Image})`,


    }
  };
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

    Xhr({ path: '/about' }).done(function (json) {

      setFaculty(json);

    });
  }, []);

  return (

    <div style={{ background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)', height: "100%", width: '100%' }}>
      <Box sx={{ paddingLeft: '12%', paddingRight: '12%', background: '(to right, #868f96 0%, #596164 100%)', paddingTop: '8%', width: '100%', alignText: 'center' }}>
        <Grid container style={{ width: '100%' }}>


          <Grid container

            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ height: '100%' }}>
            <Bgimage  >

              <CardContent >

                <Typography sx={{ fontSize: 80 }}>
                  <strong>{about.title}</strong>
                </Typography>

              </CardContent>


            </Bgimage>


            <Paper elevation={3} variant="elevation">
              <Card sx={{ bgcolor: "#dedede", height: '100%', width: '100%', paddingLeft: '12px' }}>
                <CardContent>
                  <Typography>
                    <strong>{about.description}</strong>
                  </Typography>
                  <br />
                  <Typography>
                    <FormatQuoteTwoToneIcon />
                    <em>{about.quote}</em><FormatQuoteTwoToneIcon />
                  </Typography>

                  <Typography sx={{ fontSize: '100' }}>
                    <strong>{about.quoteAuthor}</strong>
                    <FaceIcon />
                  </Typography>

                </CardContent>

              </Card>
            </Paper>
          </Grid>
          <Grid container
            bottom="0px"
            direction="column"
            alignItems="center"
            marginTop="1%"
            style={{ height: '100%' }}>
            <Paper variant="none" sx={{ width: "200px", justifyContent: "center" }}>
              <img src="https://media3.giphy.com/media/J2CVhhVs258CavFR0L/giphy.gif?cid=790b7611a33a5ebc255a7529919f0239ee583c24e4a27b7d&rid=giphy.gif&ct=s"
                height='100px' />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );

}


export default About;
