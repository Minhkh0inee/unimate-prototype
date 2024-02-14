import "./Blog.css";
import BlogCardBig from "../../components/BlogCardBig/BlogCardBig";
import BlogCardSmall from "../../components/BlogCardSmall/BlogCardSmall";
import { Chip } from "@mui/material";
import { IoMdSearch } from "react-icons/io";

const Blog = () => {
  return (
    <>
      <div className="section-wrapper-blog">
        <div className="blog-title">Blog</div>
        <BlogCardBig></BlogCardBig>
      </div>
      <div className="section-wrapper-blog-scroll">
        <div className="filter-wrapper">
          <div className="filter">
            <div className="search-wrapper">
              <IoMdSearch className="search-icon" />
              <input type="text" placeholder="Search"></input>
            </div>
            <Chip
              label="All articles "
              style={{ backgroundColor: "black", color: "white" }}
            ></Chip>
            <Chip
              label="category 1"
              style={{
                backgroundColor: "#B0AEFF",
                color: "black",
                fontWeight: 600,
              }}
            ></Chip>
            <Chip
              label="category 2"
              style={{
                backgroundColor: "#B0AEFF",
                color: "black",
                fontWeight: 600,
              }}
            ></Chip>
            <Chip
              label="category 3"
              style={{
                backgroundColor: "#B0AEFF",
                color: "black",
                fontWeight: 600,
              }}
            ></Chip>
          </div>
        </div>
        <div className="blog-scroll">
          <BlogCardSmall />
          <BlogCardSmall />
        </div>
      </div>
    </>
  );
};

export default Blog;
