import BlogItem from "./BlogItem";
import "./Blogs.css";

export default function Blogs() {
  return (
    <div className="blog-area pt-55 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2 className="title-border">From The Blog</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <BlogItem image="/src/assets/img/blog/1.jpg" />
          <BlogItem image="/src/assets/img/blog/2.jpg" />
        </div>
      </div>
    </div>
  );
}
