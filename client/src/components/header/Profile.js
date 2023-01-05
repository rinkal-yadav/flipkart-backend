import { Box, Typography, Menu, MenuItem,styled } from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import React, { useState } from 'react'

const Component=styled(Menu)`
  margin-top:5px;
`

const Profile = ({ account,setAccount }) => {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const Logout =()=>{
    setAccount('')
  }
  return (
    <>
      <Box onClick={handleClick}><Typography style={{ marginTop: "3px",cursor:"pointer" }}> {account} </Typography></Box>
      <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose(); Logout();} }>
          <PowerSettingsNewIcon />
          <Typography>Logout</Typography>
        </MenuItem>
      </Component>

    </>
  )
}

export default Profile

