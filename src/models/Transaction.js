const pool = require('../config/database');

async function createTransaction({ userId, amount, type, cryptoType }) {
  const query = `
    INSERT INTO transactions (user_id, amount, type, crypto_type)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;
  const values = [userId, amount, type, cryptoType];
  const result = await pool.query(query, values);
  return result.rows[0];
}

module.exports = {
  createTransaction
};