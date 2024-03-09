
import Backdrop from '@mui/material/Backdrop';
import "./Category.css"
import { useState } from 'react';
import CategoryCard from './CategoryCard';
import data from '../../data/category.json';
import { ButtonGroup } from '@mui/material';
import ButtonFill from '../ButtonFill/ButtonFill';
const Category = () => {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
      setOpen(false);
    };

    const [selectedCategories, setSelectedCategories] = useState<unknown[]>([]);

    const handleCategoryClick = (category: unknown) => {
      if (selectedCategories.length < 3) {
        setSelectedCategories([...selectedCategories, category]);
      } else if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter(item => item !== category));
      }
    };


  return (
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
  >
    <div className='category-section'>
     <div className='category-title'>Choose your favorite topics: </div>
      <div className='category-wrapper'>
      {data.map((item, index) => (
           <CategoryCard 
           key={index} 
           content={item.content} 
           img={item.img}
           onClick={() => handleCategoryClick(item)}
           disabled={selectedCategories.length >= 3 && !selectedCategories.includes(item)}
           selected={selectedCategories.includes(item)}
         />
      )) }
       
     </div>

    <div className='btn-wrapper'>
     <button className='confirm-button' onClick={handleClose}>Confirm</button>
    </div>
    </div>
  </Backdrop>
  )
}

export default Category