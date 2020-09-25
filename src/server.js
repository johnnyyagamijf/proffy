const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
const Port = process.env.Port || 9000;
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages');

nunjucks.configure('src/views', {
    express: server,
    noCache: true
});
server.use(express.urlencoded({extended: true}));
server.use(express.static("public"));
server.get('/', pageLanding);
server.get('/study', pageStudy);
server.get('/give-classes', pageGiveClasses);
server.post('/give-classes', saveClasses);

server.listen(Port, () => {
    console.log(`api rodando na porta ${Port}`);
})