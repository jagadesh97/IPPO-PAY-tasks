var express = require('express');
var router = express.Router();
var Todo = require('../model/todo');



/* GET users listing. */
router.get('/', async function (req, res, next) {
    try {
        let data = await Todo.find();
        res.json({
            data: data,
        })

    } catch (e) {
        res.json({
            status: "failer",
            mess: e
        })
    }
});


router.post('/', async function (req, res) {

    try {

        const todoData = new Todo(req.body);

        await todoData.save()

        res.json({
            status: "Sucess",
        })


    } catch (e) {
        res.json({
            status: "failer",
            mess: e
        })

    }


});


module.exports = router;
