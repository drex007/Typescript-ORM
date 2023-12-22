import express from 'express'
import clientRouter from './client.router'

const router = express.Router()


export default()=>{
  clientRouter(router)
  return router
}