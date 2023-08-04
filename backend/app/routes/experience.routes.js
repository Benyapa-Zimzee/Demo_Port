module.exports = (app) => {
    const experiences = require('../controllers/experience.controller')
    
    let router = require('express').Router()

    router.get('/', experiences.findAll)//get all student

    router.get('/edit-experience/:id', experiences.findOne)//find just one

    router.post('/create-experience', experiences.create)//create student

    router.put('/update-experience/:id', experiences.update)//update student with id

    router.delete('/delete-experience/:id', experiences.delete)//delete student with id

    app.use('/experiences', router)
}