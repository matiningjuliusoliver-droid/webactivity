const express =require ('express');
const router = express.Router();

const {
    getAllRooms,
    createRoom,
    getRoomById,
    updateRoom,
    deleteRoom,
} = require ('../controllers/roomController');

 router.get('/rooms', getAllRooms);
 router.get('/rooms', createRoom);
 router.get('/rooms', getRoomById);
 router.get('/rooms', updateRoom);
 router.get('/rooms', deleteRoom);

 module.exports = router;
