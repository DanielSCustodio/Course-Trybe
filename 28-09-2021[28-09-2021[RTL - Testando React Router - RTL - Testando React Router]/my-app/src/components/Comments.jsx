import React, { Component } from 'react'

export class Comments extends Component {
  constructor(){
    super();
    this.state={
      comment:'',
      commentList:[],
    }
  }

    updateComment=(e)=>{
      this.setState({comment: e.target.value});
    }

    addComment=()=>{
      this.setState(({comment, commentList})=>({
        commentList:[...commentList, comment], comment:'',
      }));
  }
  render() {
    const {comment, commentList}= this.state;
    return (
      <div>
        <h1>Comente!</h1>
        <input
        data-testid="input-comment"
        onChange={this.updateComment}
        value={comment}
        />

        <button 
        data-testid="button-comment"
        onClick={this.addComment}
        type="button"
        >
        Add Comment
        </button>
        
        <ul>
          {commentList.map((elem, index)=>(
            <li key={index}>{elem}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Comments
