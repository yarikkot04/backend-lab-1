const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    const currentDate = new Date()
    const formattedDate = new Intl.DateTimeFormat('ua', {
        hour : 'numeric',
        minute : 'numeric',
        second : 'numeric',
        year : '2-digit',
        month : '2-digit',
        day : '2-digit'
    }).format(currentDate)

    res.status(200).json({
        working : true,
        date : formattedDate,
    })
})

module.exports = router