import { random } from 'faker';
import { Project } from 'data/models';

const buildProject = async (projectFks) => {
  const resProject = {};

  resProject.image = random.word().slice(0, 255);
  resProject.livelink = random.word().slice(0, 255);
  resProject.githublink = random.word().slice(0, 255);
  resProject.description = random.word().slice(0, 255);
  resProject.technologies = random.word().slice(0, 255);
  resProject.coDevs = random.word().slice(0, 255);

  return resProject;
};

const createProject = async (fakeProject) => {
  const project = await Project.create(fakeProject);
  return project;
};

export { buildProject, createProject };
