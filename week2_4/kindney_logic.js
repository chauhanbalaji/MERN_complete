const express = require('express');
const app = express();

app.use(express.json());

let kidney = null;

// 1. GET - Going for a consultation to get a check-up
app.get('/kidney', (req, res) => {
  if (kidney) {
    res.send(`🧾 Your kidney status: ${kidney}`);
  } else {
    res.send('😕 No kidney found. You should POST one.');
  }
});

// 2. POST - Going to get a new kidney inserted
app.post('/kidney', (req, res) => {
  if (kidney) {
    res.status(400).send('❌ Kidney already exists. Use PUT to replace it.');
  } else {
    kidney = req.body.kidney || 'healthy kidney';
    res.send(`✅ New kidney inserted: ${kidney}`);
  }
});

// 3. PUT - Going to get a kidney replaced
app.put('/kidney', (req, res) => {
  if (!kidney) {
    res.status(400).send('⚠️ No kidney to replace. Use POST first.');
  } else {
    kidney = req.body.kidney || 'replaced kidney';
    res.send(`🔁 Kidney replaced with: ${kidney}`);
  }
});

// 4. DELETE - Going to get a kidney removed
app.delete('/kidney', (req, res) => {
  if (!kidney) {
    res.status(400).send('❌ No kidney to remove.');
  } else {
    kidney = null;
    res.send('🗑️ Kidney successfully removed.');
  }
});

// Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`👨‍⚕️ Kidney Surgery API running at http://localhost:${PORT}`);
// });

app.listen(3000);