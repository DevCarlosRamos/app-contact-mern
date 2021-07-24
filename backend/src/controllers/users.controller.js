const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
        const users = await User.find();
        res.json(users);
};

userCtrl.getUser = async (req, res) => {
    const User = await User.findById(req.params.id);
    res.json(User);
}

userCtrl.createUser = async (req, res) => {
        const { username, email, phone, type } = req.body;
        const newUser = new User({ username, email, phone, type });
        await newUser.save();
        res.json('User created');
};

userCtrl.updateUser = async (req, res) => {
    const { username, email, phone, type } = req.body;
    await User.findByIdAndUpdate(req.params.id, {
        username, email, phone, type
    });
    res.json('User Updated');
}

userCtrl.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json('User deleted');
}

module.exports = userCtrl;