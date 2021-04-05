const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const PORT = 8000;

let rappers = {
  "21 savage": {
    age: 28,
    birthname: "Shreyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
  },
  "chance the rapper": {
    age: 27,
    birthname: "Chancelor Jonathan Bennett",
    birthLocation: "Chicago, Illinois",
  },
  dylan: {
    age: "unknown",
    birthname: "unknown",
    birthLocation: "unknown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/rappers", (request, response) => {
  response.json(rappers);
});

app.get("/api/rappers/:rapperName", (request, response) => {
  const rapName = request.params.rapperName.toLowerCase();
  console.log(rapName);
  if (rappers[rapName]) {
    response.json(rappers[rapName]);
  } else {
    response.json(rappers["dylan"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
