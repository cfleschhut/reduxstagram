import React, { Component } from 'react';

export default class Comments extends Component {
  renderComment(comment, i) {
    return (
      <div className='comment' key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment'
            onClick={(postId, index) => this.props.removeComment(this.props.params.postId, i)}>
            &times;
          </button>
        </p>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  };

  render() {
    return (
      <div className='comments'>
        {this.props.postComments.map(this.renderComment.bind(this))}
        <form ref='commentForm' onSubmit={this.handleSubmit.bind(this)} className='comment-form'>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    );
  }
}