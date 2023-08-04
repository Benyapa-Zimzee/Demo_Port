import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';

class Experiences extends Component {
  constructor(props) {
    super(props)
    this.state = {
      experiences: []
    }
  }

  componentDidMount() {
    this.getAllExperiences()
  }

  getAllExperiences() {
    axios.get('http://it.northbkk.ac.th:40002/experiences/')
          .then(res => {
            this.setState({
              experiences: res.data
            })
          })
          .catch(err =>{
            console.log(err)
          })
        }

  render() {
    return (
      <div className='card'>
        <h1 className='write'>My Experiences</h1>
      {
        this.state.experiences.map((res,index) => (
          <>
          <Card className='cardbody' key={res._id}>
            <Card.Img className="cardimg" src="./images/bg(img).png"/>
            <Card.Body className='cardbg'>
              <Card.Title className='cardtitle'>{res.title}</Card.Title>
              <Card.Text className='cardtext'>
                {res.describe}
              </Card.Text>
            </Card.Body>
          </Card>
          </>
        ))
      }
      </div>
    )
  }
}

export default Experiences