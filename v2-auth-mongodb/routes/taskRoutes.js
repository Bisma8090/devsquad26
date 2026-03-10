const express = require("express")
const { body } = require("express-validator")

const router = express.Router()

const auth = require("../Middlewares/auth")
const validateRequest = require("../Middlewares/validateRequest")

const {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask
} = require("../controllers/taskController")

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks for logged-in user
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of tasks
 */
router.get("/tasks", auth, getAllTasks)

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Get single task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task fetched successfully
 *       404:
 *         description: Task not found
 */

router.get("/tasks/:id", auth, getTaskById)

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create new task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 example: Complete assignment
 *               description:
 *                 type: string
 *                 example: Finish backend project
 *     responses:
 *       201:
 *         description: Task created
 */

router.post(
  "/tasks",
  auth,
  [
    body("title").notEmpty().withMessage("Title is required")
  ],
  validateRequest,
  createTask
)

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update a task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Complete your assignment
 *               description:
 *                 type: string
 *                 example: Finish backend project
 *               completed:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Task updated successfully
 */
router.put("/tasks/:id", auth, updateTask)

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task deleted
 */

router.delete("/tasks/:id", auth, deleteTask)

module.exports = router