const { ObjectId } = require('mongodb');
const { connectToDB } = require('../Config/db');

const getEventById= async (req, res) => {
    try {
        const db = await connectToDB();
        const eventId=req.query.id;
        const event=await db.collection('events').findOne({_id: new ObjectId(eventId)});
        if(event){
            res.status(200).json(event);
        }
        else{
            res.status(404).json({message:'Event not found'});
        }
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = { getEventById };
