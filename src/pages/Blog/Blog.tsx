import "./Blog.css";
import BlogCardSmall from "../../components/BlogCardSmall/BlogCardSmall";
import { Chip } from "@mui/material";
import { IoMdSearch } from "react-icons/io";
import data from "../../data/blog.json"
import { useState } from "react";
import Category from "../../components/Category/Category";
const Blog = () => {

  const [selectedCategory, setSelectedCategory] = useState('All articles');

  const filteredData = selectedCategory === 'All articles' 
    ? data 
    : data.filter(post => post.category === selectedCategory);
  return (
    <>
      <Category></Category>
      <div className="section-wrapper-blog-scroll">
        <div className="filter-wrapper">
          <div className="filter">
            <div className="search-wrapper">
              <IoMdSearch className="search-icon" />
              <input type="text" placeholder="Search"></input>
            </div>
            <Chip
              onClick={() => setSelectedCategory('All articles')}
              label="All articles "
              style={{ backgroundColor: "black", color: "white" }}
            ></Chip>
            <Chip
              onClick={() => setSelectedCategory('iveleague')}
              label="Ive League"
              style={{
                backgroundColor: "#B0AEFF",
                color: "black",
                fontWeight: 600,
              }}
              
            ></Chip>
            <Chip
               onClick={() => setSelectedCategory('unilife')}
              label="Unilife"
              style={{
                backgroundColor: "#B0AEFF",
                color: "black",
                fontWeight: 600,
              }}
            ></Chip>
            <Chip
             onClick={() => setSelectedCategory('accommodation')}
              label="Accommodation"
              style={{
                backgroundColor: "#B0AEFF",
                color: "black",
                fontWeight: 600,
              }}
            ></Chip>
            <Chip
             onClick={() => setSelectedCategory('visa')}
              label="Visa"
              style={{
                backgroundColor: "#B0AEFF",
                color: "black",
                fontWeight: 600,
              }}
            ></Chip>

            <Chip
             onClick={() => setSelectedCategory('scholarship')}
              label="Scholarship"
              style={{
                backgroundColor: "#B0AEFF",
                color: "black",
                fontWeight: 600,
              }}
            ></Chip>

            <Chip
             onClick={() => setSelectedCategory('culture')}
              label="Culture"
              style={{
                backgroundColor: "#B0AEFF",
                color: "black",
                fontWeight: 600,
              }}
            ></Chip>
          </div>
        </div>
        <div className="blog-scroll">
          {filteredData.map((item, index) => (
            <BlogCardSmall
              key={index}
              image={item.image}
              category={item.category}
              headline={item.headline}
            />
          ))}


        </div>
      </div>
    </>
  );
};

export default Blog;
