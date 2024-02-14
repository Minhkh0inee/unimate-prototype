import "./BlogCardSmall.css";
import BlogCardImg from "../../assets/image/blogCardImg.jpg";
import { Chip } from "@mui/material";
import { IoIosHeart } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";

const BlogCardSmall = () => {
  return (
    <div className="blog-card-small-wrapper">
      <div className="blog-card-small-img-wrapper">
        <img src={BlogCardImg} alt="" className="blog-card-small-img" />
      </div>

      <div className="blog-card-small-content">
        <Chip label="category 1" color="success" />
        <div className="blog-card-small-titlte">
          Article name - headline for an article
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
