const { Pool } = require('pg');
const config = require('./config/config');

const pool = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.POSTGRES_DB || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  port: process.env.DB_PORT || 5432,
});

const seedData = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL
      );
    `);

    await pool.query(`
      INSERT INTO users (username, password, email)
      VALUES
        ('testuser1', 'password1', 'testuser1@example.com'),
        ('testuser2', 'password2', 'testuser2@example.com'),
        ('testuser3', 'password3', 'testuser3@example.com')
      ON CONFLICT (username) DO NOTHING;
    `);

    console.log('Data seeded successfully');
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    await pool.end();
  }
};

seedData();