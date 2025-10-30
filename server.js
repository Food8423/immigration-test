import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_FILE = path.join(__dirname, 'user-data.json');

app.use(cors());
app.use(express.json());

// Initialize data file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  const defaultData = {
    name: "JOHN SMITH",
    dateOfBirth: "15 January 1985",
    nationality: "GBR",
    status: "Settled",
    photoUrl: ""
  };
  fs.writeFileSync(DATA_FILE, JSON.stringify(defaultData, null, 2));
}

// GET endpoint to retrieve user data
app.get('/api/user-data', (req, res) => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).json({ error: 'Failed to read data' });
  }
});

// POST endpoint to update user data
app.post('/api/user-data', (req, res) => {
  try {
    const userData = req.body;
    fs.writeFileSync(DATA_FILE, JSON.stringify(userData, null, 2));
    res.json({ success: true, data: userData });
  } catch (error) {
    console.error('Error writing data:', error);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
