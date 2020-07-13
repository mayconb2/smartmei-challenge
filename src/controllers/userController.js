const userModel = require('./../models/userModel.js');

const getUser = async (req, res) => {
    try {
        const {id} = req.params;

        //todo = verificar se exite id

        const user = await (await userModel.findOne({id: id}, {'_id': 0, 'myCollection._id': 0}));

        const {name, email, created_at, myCollection, lent_books, borrowed_books } = user;

        res.status(200).send({id, name, email, created_at, myCollection, lent_books, borrowed_books})

    } catch (error) {

        res.status(500).send(error);
        console.log('Error on getUser: ' + error)
    }
};

const createUser = async (req, res) => {
    try {

        const {name, email} = req.body;

        const user = new userModel({
            name,
            email,
            id: 2023,
        });

        await user.save();
    
        const { id, created_at, myCollection, lent_books, borrowed_books } = user;

        res.status(201).send({id, name, email, created_at, myCollection, lent_books, borrowed_books })

    } catch (error) {
        
        res.status(500).send(error);
        console.log('Error on createUser: ' + error)
    }
};

module.exports = { getUser, createUser }