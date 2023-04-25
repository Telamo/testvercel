
const express = require('express')
const app = express()
const port = 8080



app.use(express.urlencoded({
    extended: false 
   }))
app.use(express.json())
app.use(express.static('.'))

const cors = require('cors');
app.use(cors())

app.listen(port, () => {
    console.log('App listening on port: ' + port)
})

const rootRoute = require('./routes/rootRoute')
app.use('/api', rootRoute)





//=========================================SWAGGER===========================================


const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')


const options = {
    definition: {
        info: {
            title: "SWAGGER FIVERR",
            version: "1.0.0"
        }
    },
    apis: ["src/swagger/index.js"]
}

const specs = swaggerJsDoc(options);

app.use("/swagger-fiverr", swaggerUi.serve, swaggerUi.setup(specs));




