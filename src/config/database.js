module.exports = {
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'nodeauth',
  dialect: 'postgres',
  operatorAliases: false,
  logging: false,
  define: {
    timestams: true,
    underscored: true,
    underscoredAll: true
  }
};