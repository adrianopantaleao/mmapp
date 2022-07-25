let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

const EmployeeRoute = require('./routes/Employee/routes')

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db).then(() => {
console.log('Conectado ao MongoDB')
},
error => {
	console.log('Erro na conexão a base de dados : ' + error)
}
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));
app.use(cors());
app.use('/', EmployeeRoute)

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
console.log('Backend utilizando a porta ' + port)
})

app.use((req, res, next) => {
res.status(404).send('Não encontrado')
});

app.use(function (err, req, res, next) {
console.error(err.message);
if (!err.statusCode) err.statusCode = 500;
res.status(err.statusCode).send(err.message);
});
