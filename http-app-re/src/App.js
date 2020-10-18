import React, { Component } from "react";
import "./App.css";
import http from "./services/httpService";
// import apiEndpoint from config.json
import config from "./config.json";

// CRUD APP consuming API/////////
class App extends Component {
  state = {
    posts: []
  };

// approppriate place to do API calls.
async componentDidMount() {
  // renaming data in the response  from API call to 'posts'
  const {data : posts} =  await http.get(config.apiEndpoint);
  // updating posts in state with the data:posts from API call.
  this.setState({
    posts: posts
  })
  console.log({data:posts});
}


  handleAdd = async () => {
    // can repsresnt making a form and sending data to back end
// here we are sending data according to the JSON typicode object
   const obj ={title: 'a', body: 'b'};
  //  two argumets of post the url and the body of the post with which the serv will
  // respond.
  // in other words the obj.
  // again renaming the data to 'data:post'
   const {data:post} = await http.post(config.apiEndpoint,obj);
  //  check to see if server responds
   console.log({data:post})
  //  updating UI with this new adding
  const posts =[post, ...this.state.posts];
  // updating state with new posts in line above.
  this.setState({posts: posts})
  };

  handleUpdate = async post => {
    post.title ="UPDATED"
    // looking to update a specific id.
    // including post.id in the url
    // updating the apiendpoint and the id in the API response see the JSONtypicode to see.
    // second argument is the entire post, you have to do when your using put method
   const response = await http.put(config.apiEndpoint + '/' + post.id, post)
  //  inspect data
    console.log(response.data);
    // updating UI
    // cloning the state with all the posts
    const posts =[...this.state.posts];
    // finding the index of the post in this array
    const index = posts.indexOf(post);
    // go to index of that post, 
    post[index] = {...post};
    // updating state with new posts
    this.setState({
      posts : posts
    })

  };

  handleDelete = async post => {
    // optimistic updates - update UI, tryc catch, alert, revert to old state
    const originalPosts = this.state.posts

 // update UI - first to have quick UI response
    // delete all posts that match post.id return the rest
    const posts = this.state.posts.filter( p=> p.id !== post.id);
    this.setState({
      posts: posts
    })

  //  delete from server, try catch just in case something goes wrong.
  try{
    // simulate invalid post to check if you get error response.
    //  await http.delete(config.apiEndpoint + '/9999' + post.id);
    // await http.delete("s" + config.apiEndpoint + '/' + post.id);
    await http.delete(config.apiEndpoint + '/' + post.id);
  } catch(ex){
    // ex.request
    // ex.response
    // error handling
    // expected errors Expected 404 not found, 400, bad request- client errors
    if(ex.response && ex.response.status === 404)
      alert('this post has aready been deleted')
  
    // revert state back to original stat as something went wrong.
    this.setState({
      posts: originalPosts
    })
  }
  
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
