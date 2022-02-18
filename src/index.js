import app from './app'

let productos;
app.listen(app.get('port'));

console.log('Server on port', app.get('port'));

