const expresss = require('express');
const app = expresss();

app.get('/', (req, res) => {
    res.sendFile('./templates/homePage.html', {root : __dirname} )
});

app.get('/api/', (req, res) => {
    res.send([1, 2, 3]);
});

app.use('/source', expresss.static(__dirname + '/source'));

app.listen(4000, () => console.log('Listening on port 3000...'));