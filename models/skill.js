const skills = [
    {skill: 'JavaScript', proficiency: 'DemiGod'},
    {skill: 'CSS', proficiency: 'Brigadier General'},
    {skill: 'HTML', proficiency: 'Kratos, the God of War'},
    {skill: 'Sass', proficiency: 'Lovecraftian Old God'},
    {skill: 'Nodejs', proficiency: 'Jedi Knight'},
    {skill: 'Express', proficiency: 'Jedi Knight'},
    {skill: 'React', proficiency: "Mortal Kombat's Subzero"},
    {skill: 'JQuery', proficiency: 'Oompa Loompa'}
]

module.exports = {
    getAll,
    getOne,
    create,
    delete: deleteSkill
};

function getAll() {
    return skills;
};

function getOne(index) {
    return skills[index];
}

function create(skill) {
    skills.push(skill);
}

function deleteSkill(index) {
    skills.splice(index, 1);
}