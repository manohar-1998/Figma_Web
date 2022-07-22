import React from "react";
import Box from "@mui/material/Box";
import { useNavigate, } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// Figma
var lefticon = require("../assets/figma/lefticon.png");
var ealers = require("../assets/figma/ealers.png");
var brandicon = require("../assets/figma/brandsicon.png");
var brand = require("../assets/figma/brand.png");
var smokeicon = require("../assets/figma/smokeicon.png");
var smoke = require("../assets/figma/smoke.png");

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '15px',
  p: 4,
};


const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  return (

    <div>
      <div className="main-container">
        <div
          className="main-header"
          style={{
            display: "flex",
            backgroundColor: "white",
            justifyContent: "space-between",
            height: "67px",
          }}
        >
          <div style={{ display: 'flex' }}>
            <img
              style={{
                margin: "25px 0px 25px 20px",
                zIndex: '2'
              }}
              src={lefticon}
            />
            <img
              style={{
                margin: "25px 0px 25px 0px",
              }}
              src={ealers}
            />
          </div>
          <div>
            <div style={{ display: 'flex', marginTop: '10px' }}>
              <img style={{ height: '30px', marginTop: '10px' }} src={smokeicon} />
              <img style={{ height: '20px', marginTop: '15px' }} src={smoke} />
            </div>
          </div>
          <div>
            <div>
              <div onClick={handleOpen} style={{ display: 'flex', marginTop: '10px', marginRight: '30px',cursor:'pointer'}}>
                <img style={{ height: '20px', marginTop: '15px', marginRight: '2px' }} src={brandicon} />
                <img style={{ height: '20px', marginTop: '15px' }} src={brand} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div style={{ justifyContent: 'center',display:'flex' }}>
              <img 
              src={smokeicon} />
              <img style={{ height: '30px', marginTop: '10px' }} src={smoke} />
            </div>
          </div>
          <br/><br/>
          <div style={{ marginTop: '10px', alignContent: 'center',width:'90%',margin:'0 auto'}}>
            <div>
              <InputLabel><b>Email</b></InputLabel>
              <TextField
              style={{width:'100%'}}
                id="filled-number"
                type="text"
                variant="standard"
              />
            </div>
            <br /><br />
            <div>
              <InputLabel><b>Password</b></InputLabel>
              <TextField
              style={{width:'100%'}}
                id="filled-number"
                type="text"
                variant="standard"
              />
            </div>
            <br />
            <div>
              <span style={{ color: 'grey', fontSize: '10px' }}>Forgot Your Password?</span>
            </div>
            <br /><br /><br />
            <div style={{ textAlign: 'center' }}>
              <Button style={{ backgroundColor: 'black', color: 'white', width: '100%' }} >Enter</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>


  );
};
export default Header;
