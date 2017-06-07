import React, { Component } from 'react';

class Tag extends Component { 

    showTags(e){
        e.preventDefault();
        const tag = {
            name: this.tag.value
        }

        this.props.tags(tag);

    }

    handleClick(tag){ 
        const tags = this.props.showTags;

        // console.log(tags.t.name);

        if(tags.indexOf(tag) > -1) {
                tags.splice(tags.indexOf(tag), 1);
                this.setState({showTags: tags})
                var lastTag = tags[tags.length - 1];
                this.props.getLastTag(lastTag);
        }
    }

    handleSwitchTag(tag) {         
        this.props.switchTag(tag);
    }

    render() { 
        
        return(
            <div>
            {
                this.props.showTags.map(tag=>{
                    return(
                        <span className="span-padding" key={tag.name}>
                            <span className="tag  is-info is-large" key={tag.name}>
                                <a onClick={this.handleSwitchTag.bind(this,tag)}>{tag.name}</a>
                                <button className="delete" onClick={this.handleClick.bind(this,tag)}></button>
                            </span>                       
                        </span> 
                    )
                })
            }
            
                
            </div>
        )
    }

}

export default Tag;

