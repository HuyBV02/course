const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //[GET] /
    index(req, res) {
        Course.find({})
            // .then(courses => res.json(courses))
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch((err) => {
                res.status(400).json({ message: 'Failed to find Course' });
            });

        // res.render('home');
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
