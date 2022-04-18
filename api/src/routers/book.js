const express = require("express")
const router = express.Router();
const {index,indexById,create,deleteById,lentBook,backBook} = require("../controller/book")


router.get("/books",index)
router.get("/book/:id",indexById)
router.post("/newbook",create)
router.delete("/delete/:id",deleteById)
router.put("/lent/:id",lentBook)
router.put("/back/:id",backBook)
module.exports = {
    router,
}