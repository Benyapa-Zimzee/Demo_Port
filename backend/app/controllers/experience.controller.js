const db = require('../models')
const Experience = db.experiences

exports.create = (req, res) => {
    if(!req.body.title) {
        res.status(400).json({message: "Content can not be empty!"})
        return;
    }

    //Create a student
    const experience = new Experience({
        title: req.body.title,
        describe: req.body.describe
    });

    experience.save(experience)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).jason({message: err.message || "Some error occurred while creating the content."})
            })
}

exports.findAll = (req, res) => {
    Experience.find()
            .then(data => {
                res.json(data) //res to front-end
            })
            .catch(err => {
                res.status(500).json({message: err.message || "Some error occurred while creating the content."})
            })
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Experience.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).json({message:"Not found"})
                }
                else{
                    res.json(data)
                }
            })
            .catch(err => {
                res.status(500).json({message: err.message || "Error retrieving content!"})
            })
}

exports.update = (req, res) => {
    if(!req.body) {
        res.status(400).json({message: "Content can not be empty!"})
        return;
    }
    else{
        const id = req.params.id

        Experience.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
                .then(data => {
                    if(!data){
                        res.status(404).json({message: `Can not update content with id = ${id}`})
                    }
                    else{
                        res.json({message: "Content was updated successfully"})
                    }
                })
                .catch(err => {
                    res.status(500).json({message: err.message || "Error updating content!"})
                })
    }
}

exports.delete = (req, res) => {
    const id = req.params.id

    Experience.findByIdAndRemove(id, {useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).json({message: `Can not delete content with id = ${id}`})
            }
            else{
                res.json({message: "Content was delete successfully"})
            }
        })
        .catch(err => {
            res.status(500).json({message: err.message || "Can not delete content!"})
    })
}