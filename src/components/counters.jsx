
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    /* we can do the same object destructuring as we did for navbar, to replace this.prop */

    render(){

        console.log('Counters - Rendered');

        const { onReset, counters, onDelete, onIncrement } = this.props;

        return(
           <div>
               <button
                   onClick={onReset}
                   className=" btn btn-primary btn-sm m-2">
                   Reset
               </button>
               {this.props.counters.map(counter =>(

                   <Counter
                            key={counter.id}
                            onDelete = {onDelete}
                            onIncrement = {onIncrement}
                            counter = {counter}>
                       <h4>Counter #{counter.id}</h4>
                   </Counter>

               ))}

           </div>
        );


    }
}



export default Counters;