import { createConnection } from "typeorm"
import { Client } from "./entities/client";
import { Banker } from "./entities/banker";
import { Transaction } from "./entities/transaction";
import express from 'express'
import router from '../routes/index'


const app = express()
const PORT = 8000

const main = async () =>{
  try {
    await createConnection({
      type:"postgres",
      host:"localhost",
      username:"",
      password:"",
      port:5432,
      database:"",
      entities:[Client, Banker, Transaction], // Listing all your models here
      synchronize:true, // For Migrations

    })
    console.log('DB Connection Established');
    app.use(express.json())
    app.use('/api',router())

    app.listen(PORT, ()=>{
      console.log('server started on port', PORT);
    })
    
  } catch (error) {
    console.log('Error Occured', error);
    
    throw new Error("unable to connect to db")
  }

}

main()