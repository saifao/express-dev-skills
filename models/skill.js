const skills = [
    { id: 125223, skill: 'HTML', competent: false },
    { id: 127904, skill: 'CSS', competent: false },
    { id: 139608, skill: 'JavaScript', competent: false }
];

module.exports = {
    getAllSkills
};

function getAllSkills() {
    return skills;
}