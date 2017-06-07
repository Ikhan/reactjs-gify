import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/form.js';
import Tag from './components/tag.js';
import Result from './components/result.js';

class App extends Component {

  constructor(props) {
    super(props)

    this.addTags = this.addTags.bind(this);
    this.getTags = this.getTags.bind(this);
    this.getLastTag = this.getLastTag.bind(this);
    this.switchTag = this.switchTag.bind(this);
    this.state = {
      tags: {},
      showTags: [],
      posts:[],
    }
  }

  search(query){
    
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query.name}&api_key=dc6zaTOxFJmzC`)
    .then(res => {
      const posts = res.data.data;      
      this.setState({posts});
    })

  }

  addTags(tag) { 
    //update out state
    const tags = {...this.state.tags}
    const showTags = [...this.state.showTags]
    
    
    tags[`t`] = tag
    // showTags[`t`] = tag
    showTags.push(tag);

    //set state
    this.setState({tags})
    this.setState({showTags})    

  }

  getTags(tag) { 

      const tags = {...this.state.tags}
      this.setState({tags})
      this.search(tag);
  }

  getLastTag(tag) { 
    
    if(tag !== undefined) { 
      this.search(tag);
    } else { 
      this.setState({
        posts: []
      })
    }
  }

  switchTag(tag) { 
    
    if(tag !== undefined) { 
      this.search(tag);
    }

  }

  render() {
    return (
      <div className="container">
            <div className="columns">
              <div className="column is-three-quarters">
                    <Tag { ...this.state} getLastTag={this.getLastTag} switchTag={this.switchTag} />
                <hr/>
                  <h2> Gify  </h2>                
                  
                  <div>
                    <Result { ...this.state} />
                  </div>
                  
                  
                </div>
             
              <div className="border-divider">
                <div className="column">
                  <Form addTags={ this.addTags  } getTags={this.getTags} />
                </div>
              </div>
            </div>

      </div>
    );
  }
}

export default App;
