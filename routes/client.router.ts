import express from 'express'
const router = express.Router()
import { Client } from '../src/entities/client'




export default (router: express.Router) =>{

  router.post('/create-client', async (req, res) =>{
    const {first_name, last_name, email, card_number} = req.body;
  
  const client = Client.create({
    first_name:first_name,
    last_name:last_name,
    email:email, 
    card_number:card_number
  })
   await client.save()
   return res.json(client)
   })

router.get('/all', async(req, res) =>{
  const all = await Client.find()
   return res.json(all)

})

}