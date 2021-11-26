
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import $ from 'jquery';

export default function ControlledOpenSpeedDial() {

  const [data, setValue] = React.useState([]);
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

    Xhr({ path: '/footer/' }).done(function (json) {

      setValue(json);
      console.log(json);
    });
  }, []);

  const [open, setOpen] = React.useState(false);
  const [CardClick, setCardClick] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const actions = [
    { icon: <FileCopyIcon />, name: 'Twitter', link: "https://twitter.com/istatrit" },
    { icon: <SaveIcon />, name: 'Facebook', Link: 'https://www.facebook.com/ISTatRIT' },
    { icon: <PrintIcon />, names: 'About' },
    { icon: <ShareIcon />, name: 'Support IST' },
  ];
  const handleclick = (cardObject) => {
    setCardClick(cardObject);
    console.log("THIs", CardClick);

  }

  return (
    <Box sx={{ height: '1px', marginTop: '20%', marginLeft: '90%', position: 'fixed', transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial uncontrolled open example"
        sx={{ position: 'fixed', top: '100%' }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            href={action.link}
            onClick={() => handleclick(action.name)}

          />
        ))}
      </SpeedDial>
    </Box>
  );
}