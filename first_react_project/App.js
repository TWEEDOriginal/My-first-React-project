import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
   persons: [
      {name:"Oguntade Tawheed", age:21 },
      {name:"Oguntade Abdullah", age:19 }
   ]
  };
  switchNameHandler = (Newname) => {
  this.setState(
    {persons: [
      {name:Newname, age:22 },
      {name:"Oguntade Abdullah", age:20 }
   ]}
  );
  };
  nameChangeHandler = (event) => {
    this.setState(
      {persons: [
        {name:"Oguntade Tawheed", age:22 },
        {name:event.target.value, age:20 }
     ]}
    );
  }

  render() {
    const style = {
      backgroundColor: 'lightcyan',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      fontSize: '15px',
      cursor: 'pointer',
      width: '80px',

    };
  return (
    <div className="App">
      <h1>Hi, my name is Tawheed</h1>  
      <button
      style={style}
      onClick={/* not always reliable*/
      () => this.switchNameHandler("Oguntade")}>
        Click</button> 
      <Person
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age} 
       click ={this.switchNameHandler.bind(this,"Tawheed")}
        /> 
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age} 
      click ={this.switchNameHandler.bind(this,"Tawheed Oguntade")} 
      change={this.nameChangeHandler} > 
      hobbies include: reading, swimming and watching anime. </Person>   
    </div>
    
  );
  };
}
export default App;
