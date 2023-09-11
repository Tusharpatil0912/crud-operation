import express from 'express'
const app = express();
import connectDB from './db/connectdb.js'
import {join} from 'path'
import router from './routes/web.js'
import dotenv  from 'dotenv'
dotenv.config();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL
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