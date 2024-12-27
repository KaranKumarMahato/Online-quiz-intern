const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');
const { protect } = require('../middleware/authMiddleware');

// Create a new quiz
router.post('/', protect, async (req, res) => {
    const { title, questions } = req.body;

    try {
        const quiz = new Quiz({ title, questions, createdBy: req.user._id });
        await quiz.save();
        res.status(201).json(quiz);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all quizzes
router.get('/', async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
