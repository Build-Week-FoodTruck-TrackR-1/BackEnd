const express = require('express');
const session = require('express-session');
const CSK = require('connect-session-knex')(session);
const cors = require('cors');
const helmet = require('helmet');
const knex = require('../data/dbConfig');
const restricted = require('../auth/auth-middleware');

const authRouter = require('../auth/auth-router');
const operatorRouter = require('../operators/operators-router');
const dinerRouter = require('../diners/diners-router');
const truckRouter = require('../trucks/trucks-router');
const accountRouter = require('../accounts/accounts-router');

const server = express();

const sessionConfig = {
    name: 'test',
    secret: 'if I tell you, I have to kill you',
    resave: false,
    saveUninitialized: true, // needed for GDPR compliance 
    cookie: {
        maxAge: 1000 * 60 * 10,
        secure: false, // should be true in production
        httpOnly: true // true means JS can't touch the cookie
    },
    store: new CSK({
        knex,
        tableName: 'sessions',
        createTable: true,
        sidFieldName: 'sid',
        clearInterval: 1000 * 60 * 15
    })
}
const corsOptions = {
    origin: [
      'http://localhost:3000'
    ],
    credentials: true
}

server.get("/hash", (req, res) => {
    const authentification = req.headers.authentification;

    const hash = bcrypt.hashSync(authentification, 8);

    res.json({ originalValue: authentification, hashedValue: hash });
})

server.get('/', (req, res) => {
    console.log(req.sesson);
    res.status(200).json({ api: 'up' });
})

server.use(helmet());
server.use(express.json());
server.use(session(sessionConfig));
server.use(cors(corsOptions));

server.use('/api/auth', authRouter);
server.use('/api/operator', restricted, operatorRouter)
server.use('/api/trucks', restricted, truckRouter);
server.use('/api/diner', restricted, dinerRouter);
server.use('/api/accounts', accountRouter);

module.exports = server;