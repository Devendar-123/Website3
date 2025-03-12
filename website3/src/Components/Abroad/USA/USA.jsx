import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import FirstTab from './FirstTab';
import SecondTab from './SecondTab';
import ThirdTab from './ThirdTab';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function USA() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box id="main-container">
      <Box id="uk-img">
          <img src="/Images/usa-edu.jpg" alt="usa" />
      </Box>
      <Box sx={{ width: '60%' , ml:'27%'}}>
        <Box >
          <Typography id='heading-uk'>Study in USA</Typography>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
            <Tab label="Education" {...a11yProps(0)} className="tabs"/>
            <Tab label="Universities" {...a11yProps(1)} className="tabs" />
            <Tab label="Scholarships" {...a11yProps(2)} className="tabs"/>
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <FirstTab/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SecondTab/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ThirdTab/>
        </CustomTabPanel>
      </Box>
    </Box>   
    </>
  );
}

export default USA;