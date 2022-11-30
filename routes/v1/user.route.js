const express = require('express');
const router = express.Router();
// User Controller Require
const userControllers = require('../../controllers/v1/user.controllers');

router
    .route('/random')
    .get(userControllers.getRandomUser)

router
    .route('/all')
    .get(userControllers.getAllUser)

router
    .route('/save')
    .post(userControllers.postARandomUser)

router
    .route('/update/:id')
    .patch(userControllers.updateRandomUser)

router
    .route('/bulk-update/:id')
    .patch(userControllers.updateMultipleUser)

router
    .route('/delete/:id')
    .delete(userControllers.deleteARandomUser)

module.exports = router;