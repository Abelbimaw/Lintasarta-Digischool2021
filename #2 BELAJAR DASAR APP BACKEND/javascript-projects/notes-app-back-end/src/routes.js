const addNotesHandler = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/notes',
    handler: addNotesHandler,
  },
];

module.exports = routes;
