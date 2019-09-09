import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
  state = {
    post: null
  }

  componentDidMount(){
    
    let id = this.props.match.params.post_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(res => {
          this.setState({
            post: res.data
          })
          
      })
   
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="centre">{this.state.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="centre">Loading post...</div>
    )

    return (
      <div className="container">
        { post }
      </div>
    )
  }
}
// ODCINEK #31 05:26
export default Post