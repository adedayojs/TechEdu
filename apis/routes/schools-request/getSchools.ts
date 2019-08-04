import express from 'express'
const router = express.Router()

router.get('/',function(req:express.Request, res:express.Response){
    res.send(200).send('how are you').end()
})

export default router