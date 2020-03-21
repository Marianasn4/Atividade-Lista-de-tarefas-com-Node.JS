'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Users', {
      create: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      creationDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      pending: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      progress: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      completed: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Users');
  }
};