const bookModel = require('./../models/bookModel.js');
const userModel = require('./../models/userModel.js');

const addBookToMyCollection = async (req, res) => {

    try {

        const {logged_user_id, title, pages} = req.body;

        const book = new bookModel({
            id: 1,
            ownerId: logged_user_id,
            title,
            pages,
        });

        const {id, created_at} = book;

        await book.save();

        const updateUser = await userModel.findOneAndUpdate(
            {id: logged_user_id},
            {myCollection: {id: id, title, pages}}
        )

        res.status(201).send({id, title, pages, created_at});
        
    } catch (error) {
        
        res.status(500).send(error);
        console.log('addBookToMyCollection' + error)
    }

}

module.exports = { addBookToMyCollection }