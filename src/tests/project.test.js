import request from 'supertest';
import { expect } from 'chai';
import { Project } from 'data/models';
import { app } from 'server/app';
import { server } from 'server/index';
import { startDatabase } from './utils';
import { buildProject, createProject } from './factories';

const ENDPOINT = '/project';

describe('Project tests', () => {
  beforeEach(async () => {
    await startDatabase();
  });

  after(async () => {
    await server.close();
  });

  it('Should respond with a new created project', async () => {
    const fakeProject = await buildProject({});

    const response = await request(app).post(ENDPOINT).send(fakeProject);

    expect(response.status).to.equal(201);
    expect(response.statusCode).to.equal(201);

    const responseProject = response.body.data;

    const project = await Project.findByPk(responseProject.id);

    expect(project.image).to.equal(fakeProject.image);
    expect(project.livelink).to.equal(fakeProject.livelink);
    expect(project.githublink).to.equal(fakeProject.githublink);
    expect(project.description).to.equal(fakeProject.description);
    expect(project.technologies).to.equal(fakeProject.technologies);
    expect(project.coDevs).to.equal(fakeProject.coDevs);
  });

  it('Should respond with a project', async () => {
    const projectDict = await buildProject({});
    const fakeProject = await createProject(projectDict);

    const response = await request(app).get(`${ENDPOINT}/${fakeProject.id}`);

    const { statusCode, status } = response;
    const { data } = response.body;

    expect(status).to.equal(200);
    expect(statusCode).to.equal(200);

    expect(data.id).to.equal(fakeProject.id);
    expect(data.image).to.equal(fakeProject.image);
    expect(data.livelink).to.equal(fakeProject.livelink);
    expect(data.githublink).to.equal(fakeProject.githublink);
    expect(data.description).to.equal(fakeProject.description);
    expect(data.technologies).to.equal(fakeProject.technologies);
    expect(data.coDevs).to.equal(fakeProject.coDevs);
  });
  it('Should throw an error if project was not found', async () => {
    const projectDict = await buildProject({});
    const fakeProject = await createProject(projectDict);
    const { id } = fakeProject;
    await fakeProject.destroy();

    const response = await request(app).get(`${ENDPOINT}/${id}`);
    const { statusCode } = response;
    expect(statusCode).to.equal(404);
  });
  it('Should respond with a list of projects', async () => {
    const response = await request(app).get(ENDPOINT);

    const { statusCode, status } = response;
    const { data } = response.body;

    expect(status).to.equal(200);
    expect(statusCode).to.equal(200);

    const allProject = await Project.findAll();
    expect(data.length).to.equal(allProject.length);
  });
  it('Should respond with an updated project', async () => {
    const projectDict = await buildProject({});
    const fakeProject = await createProject(projectDict);

    const anotherFakeProject = await buildProject({});

    const response = await request(app).put(`${ENDPOINT}/${fakeProject.id}`).send({
      image: anotherFakeProject.image,
      livelink: anotherFakeProject.livelink,
      githublink: anotherFakeProject.githublink,
      description: anotherFakeProject.description,
      technologies: anotherFakeProject.technologies,
      coDevs: anotherFakeProject.coDevs,
    });

    const { status } = response;
    const { data } = response.body;

    expect(status).to.equal(200);
    expect(response.statusCode).to.equal(200);

    expect(data.image).to.equal(anotherFakeProject.image);
    expect(data.livelink).to.equal(anotherFakeProject.livelink);
    expect(data.githublink).to.equal(anotherFakeProject.githublink);
    expect(data.description).to.equal(anotherFakeProject.description);
    expect(data.technologies).to.equal(anotherFakeProject.technologies);
    expect(data.coDevs).to.equal(anotherFakeProject.coDevs);

    const updatedProject = await Project.findByPk(fakeProject.id);

    expect(updatedProject.image).to.equal(anotherFakeProject.image);
    expect(updatedProject.livelink).to.equal(anotherFakeProject.livelink);
    expect(updatedProject.githublink).to.equal(anotherFakeProject.githublink);
    expect(updatedProject.description).to.equal(anotherFakeProject.description);
    expect(updatedProject.technologies).to.equal(anotherFakeProject.technologies);
    expect(updatedProject.coDevs).to.equal(anotherFakeProject.coDevs);
  });

  it('Should not update project, if Project does not exists', async () => {
    const projectDict = await buildProject({});
    const fakeProject = await createProject(projectDict);
    const { id } = fakeProject;
    await fakeProject.destroy();

    const response = await request(app).put(`${ENDPOINT}/${id}`).send({
      image: projectDict.image,
      livelink: projectDict.livelink,
      githublink: projectDict.githublink,
      description: projectDict.description,
      technologies: projectDict.technologies,
      coDevs: projectDict.coDevs,
    });

    const { statusCode } = response;
    expect(statusCode).to.equal(404);
  });
  it('Should respond with an updated project (no updates)', async () => {
    const projectDict = await buildProject({});
    const fakeProject = await createProject(projectDict);

    const response = await request(app).patch(`${ENDPOINT}/${fakeProject.id}`).send({});

    const { status } = response;

    expect(status).to.equal(200);
    expect(response.statusCode).to.equal(200);
  });

  it('Should respond with an updated project', async () => {
    const projectDict = await buildProject({});
    const fakeProject = await createProject(projectDict);

    const anotherFakeProject = await buildProject({});

    const response = await request(app)
      .patch(`${ENDPOINT}/${fakeProject.id}`)
      .send({ image: anotherFakeProject.image });

    const { status } = response;
    const { data } = response.body;

    expect(status).to.equal(200);
    expect(response.statusCode).to.equal(200);

    expect(data.image).to.equal(anotherFakeProject.image);

    const updatedProject = await Project.findByPk(fakeProject.id);

    expect(updatedProject.image).to.equal(anotherFakeProject.image);
  });

  it('Should not update project, if Project does not exists', async () => {
    const projectDict = await buildProject({});
    const fakeProject = await createProject(projectDict);
    const { id } = fakeProject;
    const { image } = fakeProject;
    await fakeProject.destroy();

    const response = await request(app).patch(`${ENDPOINT}/${id}`).send({ image });

    const { statusCode } = response;
    expect(statusCode).to.equal(404);
  });
  it('Should respond with a deleted project', async () => {
    const projectDict = await buildProject({});
    const fakeProject = await createProject(projectDict);

    const response = await request(app).delete(`${ENDPOINT}/${fakeProject.id}`);

    const { status } = response;
    const { data } = response.body;

    expect(status).to.equal(200);
    expect(response.statusCode).to.equal(200);

    expect(data.id).to.equal(fakeProject.id);

    const deletedProject = await Project.findByPk(fakeProject.id);
    expect(deletedProject).to.equal(null);
  });

  it('Should not delete project, if Project does not exists', async () => {
    const projectDict = await buildProject({});
    const fakeProject = await createProject(projectDict);
    const { id } = fakeProject;
    await fakeProject.destroy();

    const response = await request(app).delete(`${ENDPOINT}/${id}`);

    const { statusCode } = response;
    expect(statusCode).to.equal(404);
  });
});
