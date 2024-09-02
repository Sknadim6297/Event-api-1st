const { connectToDB } = require('../Config/db');

const getEventByRP = async (req, res) => {
    const db = await connectToDB();
    const limit = parseInt(req.query.limit) || 5;
    const page = parseInt(req.query.page) || 1;
    const events = await db.collection('events')
        .find()
        .sort({ schedule: -1 }) 
        .skip((page - 1) * limit)
        .limit(limit)
        .toArray();
    res.status(200).json(events);
}

module.exports = { getEventByRP };