import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
          Magical Madeira
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      Dramatic rugged mountains touching the clouds, hills covered in banana plantations, ocean as far as the eye can see, majestic waterfalls, hikes along waterways… Madeira offers the ideal island escape, a perfect part of Portugal to explore!

If you are heading to Madeira, consider staying at the idilic Quinta Saraiva, shown in this video – you can get a discount on your booking via the code on my Portugal
      </p>
    </div>
  );
}
