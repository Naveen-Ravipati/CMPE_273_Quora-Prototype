import React, { Component } from 'react'
import axios from 'axios';

export class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // questions: []
    }
  }
  componentDidMount = () => {
    let data = {
      user_id: localStorage.getItem("user_id")
    }
    console.log("for ", data, " we are getting questions")
    axios.post("http://localhost:3001/getUserQuestions", data)
      .then((response) => {
        console.log("Status Code : ", response.status);
        console.log(response.data[0].questions)
        this.state.questions = response.data[0].questions
      })

  }
  render() {
    if (this.state.question != undefined)
      var dataSize = this.state.questions.length;
    // if (dataSize > 0) {
    //   let view = <div></div>
    //   view = this.state.questions.map(did => {
    //     return (
    //       { did }
    //     )
    //   })
    // }
    // else {
    //   return (
    //     this.state.did = <div></div>
    //   )
    // }
    return (
      <div>
        <p>Questions</p>
        <hr></hr>
        {dataSize > 0 ? (<div>
          <h3 class="font1">{this.view}</h3>
          <hr></hr>
        </div>) : (
            <center>
              <div>
                <p class="font-weight-light"> User haven't asked Questions yet</p>
              </div>
            </center>
          )
        }
      </div>
    )
  }
}

export default Questions
