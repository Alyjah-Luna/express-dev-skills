const skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}

function index(req, res) {
    res.render('skills/index', {
        skills: skill.getAll(),
        title: 'All My-Skills'
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: skill.getOne(req.params.id),
        title: 'My-Skill Details'
    })
}

function newSkill(req, res) {
    res.render('skills/new', {
        title: 'New Skill'
    })
}

function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    skill.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

function edit(req, res) {
    res.render('skills/edit', {
        title: 'Edit Skill',
        skill: skill.getOne(req.params.id)
    })
}

function update(req, res) {
    skill.updateOne(req.body, req.params.id)
    res.redirect('/skills')
}
