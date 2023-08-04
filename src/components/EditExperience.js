import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from './common/with-router'
import { Container } from 'react-bootstrap'

class EditExperience extends Component {

    constructor(props){
        super(props)
    
        this.state = {
          title: '',
          describe: '',
        }
      }

      componentDidMount() {
        axios.get('http://it.northbkk.ac.th:40002/experiences/edit-experience/'+ this.props.router.params.id)
            .then(res =>{
                this.setState({
                    title: res.data.title,
                    describe: res.data.describe,
                })
            })
            .catch(err => {
                console.log(err)
            })
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
        axios.put('http://it.northbkk.ac.th:40002/experiences/update-experience/' + this.props.router.params.id, experienceObject)
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
            <Container style={{marginBottom:'200px'}}>
                <div>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group className=''my-4>
                            <Form.Label className='write'><h3>Edit Content</h3></Form.Label>
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
                            <Button variant='dark' type='submit'>Edit</Button>
                        </Form.Group>
                    </Form>
                </div>
            </Container>
            
        )
  }
}

export default withRouter(EditExperience)