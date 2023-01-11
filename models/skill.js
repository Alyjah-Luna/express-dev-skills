const skills = [
    {id: 125223, skill: 'Laughing', done: true},
    {id: 127904, skill: 'Dancing', done: false},
    {id: 139608, skill: 'Coding', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }