import React, { Component } from 'react';

class Result extends Component { 



    render() { 
        
        return(
            <div>
            {
                this.props.posts.map(post=>{
                    

                    return (
                        <div className="column is-3 is-pulled-left" key={post.id}>
                            <span className="span-padding" key={post.id}>
                                <figure className="image is-128x128" key={post.id}>
                                    <img  key={post.id} alt={post.name} src={post.images.downsized.url} />
                                </figure>
                            </span>  

                        </div>
                    )
                })
            }
            </div>
        )
    }

}

export default Result;

