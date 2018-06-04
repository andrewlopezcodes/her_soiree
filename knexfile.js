module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost:5432/her_soiree'
  },
  production:{
    client:'pg',
    connection: process.env.DATABASE_URL
  }
}
