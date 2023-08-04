import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default class Setting extends Component {
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

  deleteExperience = (id) => {
    axios.delete(`http://it.northbkk.ac.th:40002/experiences/delete-experience/${id}`)
          .then((res) => {
            this.getAllExperiences()
          })
          .catch((err) => {
            console.log(err)
          })

  }

  render() {
    return (
      <Container className='listex'>
        <div>
        <h1 className='write' style={{marginTop:'50px'}}>Experiences List</h1>
          <Table className='listbg mt-5' bordered>
            <thead>
              <tr>
                <th>Number</th>
                <th>Title</th>
                <th>Describe</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.experiences.map((res,index) => (
                  <tr key={res._id}>
                    <td width='50px'>{index+1}</td>
                    <td width='200px'>{res.title}</td>
                    <td width='500px'>{res.describe}</td>
                    <td width='300px'>
                      <Link className='btn btn-dark' to={'/edit-experience/'+ res._id}>Edit</Link>
                      {' '}
                      <Button className='bt' onClick={() => {window.confirm('You want to DELETE right?') && this.deleteExperience(res._id)}}>Delete</Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
          <Link className='btn btn-dark mt-5' to={'/create-experience/'}>Create New Content</Link>
        </div>
        
      </Container>
      
    )
  }
}

