import React from "react";
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Mainpage from "./mainpage";
import Menu1 from "./menu1";
var menu = require("../assets/figma/menu.png");


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
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
const Live = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div>
        <Typography>
          <Box sx={{ width: '100%', }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                <Tab sx={{ width: '18%' }} label="All" {...a11yProps(0)} />
                <Tab sx={{ width: '18%' }} label="Menu 1" {...a11yProps(1)} />
                <Tab sx={{ width: '18%' }} label="Menu 2" {...a11yProps(2)} />
                <Tab sx={{ width: '18%' }} label="Menu 3" {...a11yProps(3)} />
                <Tab sx={{ width: '18%' }} label="Menu 4" {...a11yProps(4)} />
                <div style={{ backgroundColor: 'grey', width: '40px', textAlign: 'center', marginLeft: '50px' }}>
                  <KeyboardArrowUpIcon style={{ color: 'white', marginTop: '10px', fontSize: '28px' }} />
                </div>
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Mainpage />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Menu1 />
            </TabPanel>
            <TabPanel value={value} index={2}>
            <Menu1 />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Menu1 />
            </TabPanel>
            <TabPanel value={value} index={4}>
            <Menu1 />
            </TabPanel>
          </Box>
        </Typography>
      </div>
    </>
  );
};

export default Live;
