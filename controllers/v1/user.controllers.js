const fs = require('fs');
let allData = fs.readFileSync('user.json');
const items = JSON.parse(allData);
let users = items;

module.exports.getRandomUser = (req, res) => {
    // Get Random data using nodejs file system
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

module.exports.getAllUser = (req, res) => {
    // Get all data from data.json file
    const items = JSON.parse(allData);
    console.log(items);
    res
        .status(200)
        .send({
            success: true,
            message: 'Success',
            data: items
        });
};

module.exports.postARandomUser = (req, res) => {
    // Post or Save a random user
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

module.exports.updateMultipleUser = (req, res) => {
    const { id } = req.params;
    console.log(id);
    const updateUser = users.find(user => user.id === Number(id.slice));
    res
        .status(200)
        .send({
            success: true,
            message: 'User Updated',
            data: updateUser
        });
};

module.exports.deleteARandomUser = (req, res) => {
    // Delete user with ID
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