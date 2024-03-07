import "./BlogCardSmall.css";
import { Chip } from "@mui/material";
import { IoIosHeart } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";
interface Props {
  image: string;
  headline: string;
  category: string;
}


const BlogCardSmall = ({image, headline, category}: Props) => {
  return (
    <div className="blog-card-small-wrapper">
      <div className="blog-card-small-img-wrapper">
        <img src={image} alt="" className="blog-card-small-img" />
      </div>

      <div className="blog-card-small-content">
        <Chip label={category} color="success" />
        <div className="blog-card-small-titlte">
          {headline}
        </div>
        <div className="action-wrapper">
          <button className="heart-btn">
            <IoIosHeart className="blog-card-small-icon" />
          </button>
          <button className="comment-btn">Comment</button>
          <button className="share-btn">
            <IoShareSocialSharp className="blog-card-small-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSmall;
