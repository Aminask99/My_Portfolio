import PropTypes from "prop-types";

import { FaExternalLinkAlt } from "react-icons/fa";

const BlogPost = (props) => {
  return (
    <div className="project-card2 post-card">
      <div className="project-img">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="project-title">
        <h2 className="post-title">{props.title}</h2>
      </div>
      <div className="project-description">
        <p className="post-desc">{props.date}</p>
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  read: PropTypes.string.isRequired,
};

export default BlogPost;
