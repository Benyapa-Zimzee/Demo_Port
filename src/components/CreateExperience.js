import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from './common/with-router'
import { Container } from 'react-bootstrap'

class CreateExperience extends Component {
    
    constructor(props){
        super(props)
    
        this.state = {
          title: '',
          describe: '',
        }
      }

    onChangeExperienceTitle = (e) => {
    this.setState({title: e.target.value})
    }
    onChangeExperienceDescribe = (e) => {
    this.setState({describe: e.target.value})
    }

    onSubmit = (e) => {
    e.preventDefault()

    const experienceObject = {
        title: this.state.title,
        describe: this.state.describe
    }
    axios.post('http://it.northbkk.ac.th:40002/experiences/create-experience', experienceObject)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })

    this.setState({title:'',describe:''})
    this.props.router.navigate('/setting')
  }


  render() {
    return (
        <Container>
        <div>
            <Form onSubmit={this.onSubmit}>
                <Form.Group className=''my-4>
                    <Form.Label className='write'><h3>Create New Experience</h3></Form.Label>
                </Form.Group>
                <Form.Group style={{textAlign:'left', marginTop:'30px', color:'#755E56', fontSize:'20px'}}>
                    <Form.Label >Title</Form.Label>
                    <Form.Control type='text' value={this.state.title} onChange={this.onChangeExperienceTitle} />
                </Form.Group>
                <Form.Group style={{textAlign:'left', marginTop:'30px', color:'#755E56', fontSize:'20px'}}>
                    <Form.Label>Describe</Form.Label>
                    <Form.Control type='text' value={this.state.describe} onChange={this.onChangeExperienceDescribe} />
                </Form.Group>
                <Form.Group className='text-center mt-4'>
                    <Button variant='dark' type='submit'>Create</Button>
                </Form.Group>
            </Form>
        </div>
    </Container>
    )
  }
}

export default withRouter(CreateExperience)