import { DataTypes } from 'sequelize';

const projectModel = (sequelize) => {
  const Project = sequelize.define(
    'Project',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 255],
        },
      },
      livelink: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 255],
        },
      },
      githublink: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 255],
        },
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 255],
        },
      },
      technologies: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 255],
        },
      },
      coDevs: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 255],
        },
      },
    },
    {
      freezeTableName: true,
    }
  );
};

export { projectModel };
