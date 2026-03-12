const app = express();

connectDB();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://taskmnager-frontend.netlify.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
  })
);

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("API is running. Swagger docs at /api-docs");
});

app.use(errorHandler);

module.exports = app;