const userModel = require('./../models/userModel.js');

const getUser = async (req, res) => {
    try {

        const user = await userModel.find({}, {'_id': 0});
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error);
        console.log('Error on getUser: ' + error)
    }
};


module.exports = {getUser}