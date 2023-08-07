const mongoose = require('mongoose');

// Defina a opção strictQuery aqui
mongoose.set('strictQuery', false); 

// Estabeleça a conexão com o banco de dados
const connectDB = (url) => {
  return mongoose.connect(url)
  .then(() => {
    console.log('Conexão bem sucedida com o MongoDB');
  })
  .catch((error) => {
    console.error('Erro ao conectar-se ao MongoDB:', error.message);
  });
};

module.exports = connectDB;
