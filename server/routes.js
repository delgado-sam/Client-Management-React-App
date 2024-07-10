const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

let clients = [
  {
    id: uuidv4(),
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
  },
  {
    id: uuidv4(),
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "234-567-8901",
  },
  { id: uuidv4(), name: "Bob Johnson", email: "bob@example.com" },
];

router.get("/clients", (req, res) => {
  res.json(clients);
});

router.post("/clients", (req, res) => {
  const newClient = { id: uuidv4(), ...req.body };
  clients.push(newClient);
  res.json(newClient);
});

router.put("/clients/:id", (req, res) => {
  const { id } = req.params;
  const index = clients.findIndex((c) => c.id === id);
  if (index !== -1) {
    clients[index] = { ...clients[index], ...req.body };
    res.json(clients[index]);
  } else {
    res.status(404).send("Client not found");
  }
});

router.delete("/clients/:id", (req, res) => {
  const { id } = req.params;
  clients = clients.filter((c) => c.id !== id);
  res.sendStatus(204);
});

module.exports = router;
