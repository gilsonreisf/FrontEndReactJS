import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const db = axios.create({
  baseURL: 'localhost:27017/auth',
});

export default db;