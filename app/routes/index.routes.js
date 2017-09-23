import index from '../controllers/index.controller'; 
constpath = '/api/index';

module.exports = (app) => { 
    app.get('/', index.index); 
    app.get('/help', index.help); 
};