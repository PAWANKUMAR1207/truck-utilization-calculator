const express = require('express');
const app = express();
const PORT = 4000;

// Import your truck calculation logic
const { calculateUtilization } = require('./logic');

// Middleware to parse JSON and serve frontend files
app.use(express.json());                    // Parse incoming JSON
app.use(express.static('public'));          // Serve HTML/CSS/JS from public/

// API endpoint to calculate truck usage
app.post('/api/calculate', (req, res) => {
  try {
    const results = calculateUtilization(req.body); // returns an array of results
    res.json(results); // ✅ Send the full array, so frontend can .map()
  } catch (error) {
    console.error("❌ Error during calculation:", error.message);
    res.status(500).json({ error: error.message }); // Return proper JSON error
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚚 Server is running at http://localhost:${PORT}`);
});
