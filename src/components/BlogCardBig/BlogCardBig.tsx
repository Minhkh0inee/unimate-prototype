import "./BlogCardBig.css";
import BlogCardImg from "../../assets/image/blogCardImg.jpg";

const BlogCardBig = () => {
  return (
    <div className="blog-card-big-wrapper">
      <div className="blog-card-big-left">
        <div className="blog-card-big-title">
          This is A Featured Article - The Most Important Piece Of Content
        </div>

        <div>
          <p className="blog-card-big-description">
            Very short description of what’s actually being discussed in this
            article, maybe the first sentences to provide a preview
          </p>
        </div>

        <button className="btn-read">Read Now</button>
      </div>

      <div className="blog-card-big-right">
        <img src={BlogCardImg} alt="" className="blog-card-big-img" />
      </div>
    </div>
  );
};

export default BlogCardBig;
