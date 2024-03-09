import './CategoryCard.css'

interface Prop{
    content: string;
    img: string;
    onClick: () => void; // Add this line
    disabled?: boolean;
    selected?: boolean; // Add this line
}

const CategoryCard = ({content, img, onClick, disabled, selected}: Prop) => {
  return (
    <div className={`category-card ${selected ? 'selected' : ''}`} onClick={disabled ? undefined : onClick}>
            <img className='category-img' loading='lazy' src={img} alt="category-img" />
               <div className='category-mask'>
              <span className={`category-content ${selected ? 'selected' : ''}`}>{content}</span>
            </div>
        </div>
  )
}

export default CategoryCard;