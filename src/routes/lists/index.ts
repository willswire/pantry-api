const lists = require('express').Router();

// lists.get('/', GETFUNCTION);
// lists.put('/:listID, PUTFUNCTION);
lists.get('/', (req: any, res: any) => res.status(200).json({ "Test": "Yay" }));
module.exports = lists;