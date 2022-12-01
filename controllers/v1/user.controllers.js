const fs = require('fs');
let allData = fs.readFileSync('user.json');
const items = JSON.parse(allData);
let users = items;

// 1.  Get Random data using nodejs file system
module.exports.getRandomUser = (req, res) => {
    const item = items[Math.floor(Math.random() * items.length)];
    console.log(item);
    res
        .status(200)
        .send({
            success: true,
            message: 'Success',
            data: item
        });
};

// 2.  Get all data from data.json file
module.exports.getAllUser = (req, res) => {
    console.log(items);
    res
        .status(200)
        .send({
            success: true,
            message: 'Success',
            data: items
        });
};


// 3. Post or Save a random user
module.exports.postARandomUser = (req, res) => {
    const user = req.body;
    console.log(user);
    users.push(user);
    res
        .status(200)
        .send({
            success: true,
            message: 'Save a random user',
            data: users
        });
};

// 4.  Update Random user
module.exports.updateRandomUser = (req, res) => {
    const { id } = req.params;
    const updateUser = users.find(user => user.id === Number(id));
    const { gender, name, contact, address, photoUrl } = req.body;

    // Update that things what you want to update
    req.body.id ? updateUser.id = req.body.id : '';
    gender ? updateUser.gender = gender : '';
    name ? updateUser.name = name : '';
    contact ? updateUser.contact = contact : '';
    address ? updateUser.address = address : '';
    photoUrl ? updateUser.photoUrl = photoUrl : '';
    console.log(updateUser);
    res
        .status(200)
        .send({
            success: true,
            message: 'User Updated',
            data: updateUser
        });
};

//  5. Update multiple user
module.exports.updateMultipleUser = (req, res) => {
    const { id } = req.params;
    // First one
    // When we send multiple id  
    const firstId = id.slice(0, 1);
    const updateFirstIdUser = users.find(user => user.id === Number(firstId));
    const response = req.body;
    const bodyDataForFirst = response.slice(0).find(resp => resp.id);

    // Update first request data
    bodyDataForFirst.id ? updateFirstIdUser.id = bodyDataForFirst.id : '';
    bodyDataForFirst.gender ? updateFirstIdUser.gender = bodyDataForFirst.gender : '';
    bodyDataForFirst.name ? updateFirstIdUser.name = bodyDataForFirst.name : '';
    bodyDataForFirst.contact ? updateFirstIdUser.contact = bodyDataForFirst.contact : '';
    bodyDataForFirst.address ? updateFirstIdUser.address = bodyDataForFirst.address : '';
    bodyDataForFirst.photoUrl ? updateFirstIdUser.photoUrl = bodyDataForFirst.photoUrl : '';
    console.log(updateFirstIdUser);

    // Second one
    const secondId = id.slice(2);
    const updateSecondIdUser = users.find(user => user.id === Number(secondId));
    const bodyDataForSecond = response.slice(1).find(resp => resp.id);

    // Update with second request data
    bodyDataForSecond.id ? updateSecondIdUser.id = bodyDataForSecond.id : '';
    bodyDataForSecond.gender ? updateSecondIdUser.gender = bodyDataForSecond.gender : '';
    bodyDataForSecond.name ? updateSecondIdUser.name = bodyDataForSecond.name : '';
    bodyDataForSecond.contact ? updateSecondIdUser.contact = bodyDataForSecond.contact : '';
    bodyDataForSecond.address ? updateSecondIdUser.address = bodyDataForSecond.address : '';
    bodyDataForSecond.photoUrl ? updateSecondIdUser.photoUrl = bodyDataForSecond.photoUrl : '';
    console.log(updateSecondIdUser);
    res
        .status(200).send({
            success: true,
            message: 'Update multiple data successfully',
            data: users
        });

};


// 6.  Delete user with ID
module.exports.deleteARandomUser = (req, res) => {
    const { id } = req.params;
    const deleteUser = users.filter(user => user.id !== Number(id))
    console.log(deleteUser);
    res
        .status(200)
        .send({
            success: true,
            message: 'User deleted successfully',
            data: deleteUser
        });
};