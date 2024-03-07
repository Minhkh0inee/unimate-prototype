
import Backdrop from '@mui/material/Backdrop';
import "./Category.css"

import { useEffect, useState } from 'react';
import { Card } from '@mui/material';
const Category = () => {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };


  return (
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
    onClick={handleClose}
  >
    <div className='category-wrapper'>
        <Card></Card>
    </div>
  </Backdrop>
  )
}

export default Category