import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from "./components/counters";
import './App.css';

class App extends Component {

    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    /* mounting phase of the lifecycle hooks */
    /* called once when the instance of the class is created, right place to initialise the properties of the class */
    /* if you add this.props here in the constructor then you need to pass it as a parameter else it won't be recognised in the constructor unlike how it is added in the components */
    constructor(){
        super();
        console.log('App - Constructor');

    }

    componentDidMount(){
        //right place to make Ajax calls to get data from the server
        // this.setState() on the list being got from Ajax
        //for now just add console.log
        // when a component is mounted that means its in the DOM
        console.log('App - Mounted');

    }

    handleIncrement = counter => {
        /* clone the counters array */
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        /* clone the counters again and set it to counter */
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({ counters });
    };

    handleReset = () =>{
        const counters = this.state.counters.map( c =>{
            c.value = 0;
            return c;
        });

        this.setState({ counters });
    };

    handleDelete = (counterId) =>{

        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };

  render() {
    /* returns a react element which returns virtual DOM to the browser DOM */
    /* when a component is rendered all its children are rendered recursively */
    console.log('App - Rendered');

    return (
      <React.Fragment>
       <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters
             counters={this.state.counters}
             onReset={this.handleReset}
             onIncrement={this.handleIncrement}
             onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
