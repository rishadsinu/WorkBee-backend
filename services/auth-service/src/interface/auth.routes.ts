import { Router } from 'express'

const router = Router()

router.get('/login',(req, res) => {
    res.json({message:"login service working"})
})

export default router