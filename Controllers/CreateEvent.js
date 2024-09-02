const { ObjectId } = require('mongodb');
const { connectToDB } = require('../Config/db');


const createEvent = async (req, res) => {
   try {
    const db=await connectToDB();
    const event=req.body;
    const result=await db.collection('events').insertOne(event);
    res.status(200).json({message:'Event created successfully',id:result.insertedId});
   } catch (error) {
       console.log(error);
   }
}
module.exports = { createEvent };