const skills = [
    { id: 125223, skill: 'HTML', competent: false },
    { id: 127904, skill: 'CSS', competent: false },
    { id: 139608, skill: 'JavaScript', competent: false }
];

module.exports = {
    getAllSkills,
    getOneSkill,
    create,
    deleteOne
};

function getAllSkills() {
    return skills;
}

function getOneSkill(id) {
    id = parseInt(id)
    return skills.find(skill => id === skill.id)
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.competent = false;
    console.log(skill)
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => id === skill.id)
    skills.splice(idx, 1)
}