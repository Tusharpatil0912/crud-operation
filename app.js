import express, { urlencoded } from 'express'
import connectDB from './db/connectdb.js'
import {join} from 'path'
import router from './routes/web.js'

const app = express()
const port = 3000;
const DATABASE_URL = "mongodb://localhost:27017";

// Database Connection
connectDB(DATABASE_URL)

app.use(express.urlencoded({extended:false}))
app.use(express.json());

// Static Files
app.use(express.static(join(process.cwd(),'public')))
app.use('/edit',express.static(join(process.cwd(),'public')))


// set template Engine

app.set('view engine','ejs')

//Routes Load

app.use('/',router)

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})