const fs = require('fs');
const path = require('path');
const { pool } = require('../config/db');

const initializeDatabase = async () => {
  try {
    // Read the schema file
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');

    // Execute the schema
    await pool.query(schema);
    console.log('Database schema created successfully');

    // Close the pool
    await pool.end();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
};

initializeDatabase(); 