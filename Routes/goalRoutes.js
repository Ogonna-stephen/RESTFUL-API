const express = require("express")
const router = express.Router();
const {
    getGoals, createGoals, updateGoals, deleteGoals
} = require("../controllers/goalControllers");

router.route("/").get(getGoals).post(createGoals);
router.route("/:id").delete(deleteGoals).put(updateGoals);

module.exports = router;