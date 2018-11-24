
import React, { Component } from 'react'

class Counter extends Component{

    componentDidUpdate(prevProps, prevState){
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            //Ajax call and get new data from the server
        }
    }

    componentWillUnmount() {
        console.log("Counter - Unmount");
    }


    /* removing the local state and have a controlled component to have the single state of truth */
    /* state is an object added in case this component needs any data */
   /* state = {
       count: this.props.counter.value
        tags: ['tag1', 'tag2', 'tag3']
    }; */

    /*
    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    };


    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags</p>;

        return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
    {this.renderTags()} add this in render */

   /*
    handleIncrement = (product) =>{
        console.log(product);
        this.setState({ count: this.state.count + 1});
    };

    doHandleIncrement = () =>{
        this.handleIncrement({ id: 1});
    };
    */


   render(){
      /* let classes = this.getBadgeClasses();*/

       console.log('Counter - Rendered');

       console.log(this.props);

       const product = { id: 1 };
       return(
         <div>
             <span /*style={this.styles} */ className={ this.getBadgeClasses() }>{this.formatCount()}</span>
             <button
                 onClick={() => this.props.onIncrement(this.props.counter) }
                 className="btn btn-secondary btn-sm">Increment
             </button>
             <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
     );
   }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";

        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
       const { value } = this.props.counter;
       return value === 0 ? 'zero' : value;
   }

}

export default Counter;