const asyncHandler = require('express-async-handler')

//@desc Get goals
//@route GET /api/goals
//@access Private after we add authentication
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Goals'})

})
//@desc Set goals
//@route POST /api/goals
//@access Private after we add authentication
const setGoals = asyncHandler (async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field') 

    }
    res.status(200).json({message: 'Set Goals'})
}) 
//@desc Update goals
//@route PUT /api/goals/:id
//@access Private after we add authentication
const updateGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}`})

})
//@desc Delete goals
//@route DELETE /api/goals/:id
//@access Private after we add authentication
const deleteGoals = asyncHandler( async(req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}`})

})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}