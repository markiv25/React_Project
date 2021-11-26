import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Staff from '../pages/Staff';
import Peo_ple from '../pages/Faculty';
import { People } from '@material-ui/icons';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {

    setValue(newValue);
  };

  return (
    <Box sx={{
      width: '100%', typography: 'body1',
      height: 'auto',
      paddingLeft: '12%',
      paddingRight: '12%',
      paddingTop: '8%',
      color: 'white',
      borderRadius: '2rem',
      boxShadow: '20px',

    }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: 'center', boxShadow: '20px' }}>
          <TabList onChange={handleChange} sx={{ borderRadius: '30px', marginLeft: '40%', color: 'green' }}>
            <Tab sx={{ background: 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)', }} label="Staff" value="1" />
            <Tab sx={{ background: 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)' }} label="Faculty" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><Staff /></TabPanel>
        <TabPanel value="2">< Peo_ple /></TabPanel>
      </TabContext>
    </Box>
  );
}