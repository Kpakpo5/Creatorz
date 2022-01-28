import React from 'react';
import PropTypes from 'prop-types';
import {
  Comment,
} from 'semantic-ui-react';

const Comments = ({ user, publishedDate, body }) => (
  <Comment>
    <Comment.Avatar src={user.avatar} />
    <Comment.Content className="comments-content">
      <div className="comments-content-author-date">
        <Comment.Author>{user.pseudo}</Comment.Author>
        <Comment.Metadata>
          <div>{publishedDate}</div>
        </Comment.Metadata>
      </div>
      <Comment.Text>{body}</Comment.Text>
    </Comment.Content>
  </Comment>
);

Comments.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
  }).isRequired,
  publishedDate: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comments;
