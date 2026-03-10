const express = require("express")
const { body } = require("express-validator")

const { register, login } = require("../controllers/authController")
const validateRequest = require("../Middlewares/validateRequest")

const router = express.Router()

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Bisma
 *               email:
 *                 type: string
 *                 example: bisma@email.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       201:
 *         description: User registered successfully
 */

router.post(
  "/users/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("password").isLength({ min: 6 })
  ],
  validateRequest,
  register
)

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login user and return JWT
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: bisma@email.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login successful
 */

router.post(
  "/users/login",
  [
    body("email").isEmail(),
    body("password").notEmpty()
  ],
  validateRequest,
  login
)

module.exports = router