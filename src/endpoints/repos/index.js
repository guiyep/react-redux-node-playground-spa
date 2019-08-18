const { api } = require('../../modules/express-api');
const repos = require('./payload.json');

api.get('/api/repos', (req, res) => res.send(JSON.stringify(repos)));
