import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import U_Grad from '../pages/Degree_Undergrad';
import { People } from '@material-ui/icons';
import Grad from '../pages/Degree_Grad';
import Collapse from '@mui/material/Collapse';
export default function D_Tabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {

    setValue(newValue);
  };

  return (
    <Box sx={{
      typography: 'body1',
      height: 'auto',
      background: 'white',
      padding: '2rem 1rem',
      color: 'white',
      borderRadius: '2rem',
      boxShadow: '20px',
      paddingLeft: '10%',
      paddingRight: '6%',
      paddingTop: '8%',
      width: '90%'
    }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: 'center', boxShadow: '20px' }}>
          <TabList onChange={handleChange} sx={{ borderRadius: '10px', marginLeft: '40%', color: 'green' }}>
            <Tab sx={{ background: 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)', }} label="UnderGraduate" value="1" />
            <Tab sx={{ background: 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)' }} label="Graduate" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><U_Grad /></TabPanel>

        <TabPanel value="2"><Grad /></TabPanel>
      </TabContext>
    </Box>
  );
}