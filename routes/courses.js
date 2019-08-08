const {Router} = require('express');
const Corse = require('../models/course'); 
const router = Router();


router.get('/', async (req, res) => {
    const courses = await Corse.getAll();
    res.render('courses', {
        title: 'Courses',
        isCourses: true,
        courses
    });
});


module.exports = router;