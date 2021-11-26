import React from 'react';
import Box from '@mui/material/Box';


const Maps = () => {

    return (
        <>
            <Box sx={{ background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)', color: 'black', height: '800px', width: '100%', paddingLeft: '10%', paddingTop: '100px', boxShadow: "20px", minHeight: "150px" }}>
                <div style={{ paddingLeft: '40%', width: '1100px', background: 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)', marginBottom: '20px' }}>
                    <h1 >MAP</h1> </div>

                <iframe title='RIT MAP' src='http://ist.rit.edu/api/map.php' width="1100px" height="500px" ></iframe>

            </Box>
        </>
    )
}

export default Maps