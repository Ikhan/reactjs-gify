import React, { Component } from 'react';

class Form extends Component { 

    CreateTag(e){
        e.preventDefault();
        const tag = {
            name: this.tag.value
        }

        this.props.addTags(tag);
        this.props.getTags(tag);

        this.tagForm.reset();

    }

    render() { 
        return (
            <div>
                <form ref={(input) => this.tagForm = input} onSubmit={(e)=> this.CreateTag(e)}>
                            <div className="field">
                                <label className="Search"> </label>
                                <p className="control">
                                    <input type="text" ref={(input) => this.tag = input} className="input" placeholder="eg: cat" onChange={this.handleChange} />
                                </p>
                            </div>

                            <div className="field is-grouped">
                                    <p className="control">
                                        <button type="submit" onClick={this.handleClick} className="button is-primary">Search</button>
                                    </p>                                
                            </div> 
                </form>
            </div>
        )
    }
}

export default Form;