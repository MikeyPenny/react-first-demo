import React from 'react';
// const React = require("react")
import logo from './logo.svg';
import './App.css';
import Navbar from "../components/Nav"
import Footer from "../components/Footer"
import Article from "../components/Article"
import HeroContainer from "../layout/HeroContainer"
import Card from "../components/Card"
import students from "../students.json"
import FlexContainer from "../layout/FlexContainer"

class App extends React.Component {

  constructor(props){
    super(props)
    this.handleSearchHandler = this.handleSearchHandler.bind(this)
    this.disco = this.disco.bind(this)
    this.stopDisco = this.stopDisco.bind(this)
  }

  state = {
    searchQuery : "",
    students: students,
    searchedStudent: students,
    count: 0,
    backgroundColor: "white",
    firstname: "",
    lastname: "",
    email: "",
    discoRef: 0,
    disco: false
  }

  handleSearchHandler = (e)=> {
    this.setState({searchQuery: e.target.value}, ()=> {
      this.search()
    })
  }

  disco() {
    let discoRef = setInterval(()=> {
        this.handleColorClick()
    }, 500)  

    this.setState({discoRef, disco: !this.state.disco})
  }

  stopDisco() {
    clearInterval(this.state.discoRef)
    this.setState({disco: !this.state.disco})

  }

  search = ()=> {
    let searchedStudent = this.state.students.filter((student)=> {
      return student.firstname.indexOf(this.state.searchQuery) !== -1
    })
    this.setState({searchedStudent: searchedStudent})
  }

  handleCounterClick = (e)=> {
    let newCount = this.state.count + 1
    this.setState({count: newCount})
  }

  colorMapper = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  handleColorClick = ()=> {
    this.setState({backgroundColor: this.colorMapper()})
  }

  handleInputChange = (e)=> {
    this.setState({
      [e.target.name]: e.target.value
    })  
  }

  handleAddContactClick = ()=> {
    let newStudent = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email
    }
    let newStudents = [...this.state.students]
    newStudents.push(newStudent)  
    this.setState({students: newStudents}, ()=> {
      this.search()
    })  
  }

  render() {
    let studentJSX = this.state.searchedStudent.map((student)=> 
    <Card firstname={student.firstname} 
          lastname={student.lastname} 
          email={student.email}
    />)

    let appStyle = {
      "backgroundColor": this.state.backgroundColor,
      "padding": "5%"
    }

    return (
      <div style={appStyle}>
        <FlexContainer>
          <button onClick={this.handleColorClick}>Change color</button>
          <button onClick={this.handleCounterClick}>Click me</button>
          {this.state.disco? 
            <button onClick={this.stopDisco}>Stop Disco</button>:
            <button onClick={this.disco}>Disco</button> 
          }

          <input type="text" value={this.state.searchQuery} onChange={this.handleSearchHandler} placeholder="search"/>
        </FlexContainer>
        <FlexContainer>
          <h1>Count: {this.state.count}</h1>
        </FlexContainer>
        <HeroContainer>
            <FlexContainer>
              <input value={this.state.firstname} 
                    onChange={this.handleInputChange} 
                    type="text" name="firstname" placeholder="firstname"
              />
              <input value={this.state.lastname} 
                    onChange={this.handleInputChange} 
                    type="text" name="lastname" placeholder="lastname"
              />
              <input value={this.state.email} 
                    onChange={this.handleInputChange} 
                    type="text" name="email" placeholder="email"
              />
              <button onClick={this.handleAddContactClick}>Add contact</button>
            </FlexContainer>
            {studentJSX}
        </HeroContainer>
      </div>

    );
  }

}

export default App;
