//@desc Get goals
//@route GET /api/goals
//@access Private after we add authentication
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get Goals'})

}
//@desc Set goals
//@route POST /api/goals
//@access Private after we add authentication
const setGoals = (req, res) => {
    if(!req.body.text) {
        res.status(400).json({ message: 'Please add a text field'})

    }
    res.status(200).json({message: 'Set Goals'})
} 
//@desc Update goals
//@route PUT /api/goals/:id
//@access Private after we add authentication
const updateGoals = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}`})

}
//@desc Delete goals
//@route DELETE /api/goals/:id
//@access Private after we add authentication
const deleteGoals = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}`})

}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}