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
          console.log(res)
      })
   
  }
  render() {


    return (
      <div className="container">
        <h4></h4>
      </div>
    )
  }
}
// ODCINEK #31 05:26
export default Post