const {Router} = require("express")
const store = require("../database")
const { validateModel } = require("../middlewares")

const router = Router()

router.get("/:model", validateModel, async (req, res) => {
    const {model} = req.params
    const response = await store[model].list()
    res.status(200).send(response)
});

module.exports = router
