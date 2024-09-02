const { ObjectId } = require('mongodb');
const { connectToDB } = require('../Config/db');


const DeleteEvent = async (req, res) => {
    const db = await connectToDB();
    const eventId = req.params.id;
    const result = await db.collection('events').deleteOne({ _id: new ObjectId(eventId) });
    if (result.deletedCount > 0) {
        res.status(200).json({ message: "Event deleted successfully" });
    } else {
        res.status(404).json({ message: "Event not found" });
    }
}

module.exports = { DeleteEvent };