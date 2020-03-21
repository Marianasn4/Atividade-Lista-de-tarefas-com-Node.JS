module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('listadetarefas', {
      create: DataTypes.INTEGER,
      description: DataTypes.STRING,
      creationDate: DataTypes.DATE,
      status: DataTypes.STRING,
      pending: DataTypes.STRING,
      progress: DataTypes.STRING,
      completed: DataTypes.STRING,
      });
  
    return listadetarefas;
  }