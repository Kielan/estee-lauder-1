const express       = require('express')
const chalk         = require('chalk')
const appServer     = express()
const hostname      = 'localhost'
const port          = 3035
const data          = require('./data')
const template      = `<div><h1>Welcome</h1><p><a href="/api/v1/search/data">API Data</a></p></div>`

appServer.use(express.json())

appServer.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

const hasObjectID = d =>{
    // Need to  check if data hasOwnProperty 'objectID' for Algolia Search API
    // If does not have one, add a value based on appObj._id
    // Info to dashboard url: www.algolia.com  - User: danielortiz1982@gmail.com - Password: SampleAPI2019 
    d.map( appObj => {
        const objID = appObj.hasOwnProperty('objectID')
        if(!objID)
            appObj.objectID = `elc-dortiz-${appObj._id}`
    })
}

hasObjectID(data)

appServer.get('/', (req, res) => {
    res
        .status(200)
        .send(template)
        .end()
})

appServer.get('/api/v1/search/data', (req, res)=>{
    res
        .status(200)
        .send(data)
        .end()
})

appServer.listen( port, () => console.log(`ELC Server is running on ~> ${chalk.blue(hostname)}:${port}`) )

