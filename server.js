const app = require("./backend/app")

const PORT = 5050

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server Running on http://localhost:${PORT}`)
);
