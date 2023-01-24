import { Project } from 'data/models';
import { NotFound } from 'server/utils/errors';

class ProjectRepository {
  static async create(image, livelink, githublink, description, technologies, coDevs) {
    const createdProject = await Project.create({
      image,
      livelink,
      githublink,
      description,
      technologies,
      coDevs,
    });

    return createdProject;
  }

  static get(id) {
    return Project.findByPk(id, { include: [] });
  }

  static getAll(filters) {
    return Project.findAll({
      where: filters,
      include: [],
    });
  }

  static async update(id, image, livelink, githublink, description, technologies, coDevs) {
    return this.partialUpdate({
      id,
      image,
      livelink,
      githublink,
      description,
      technologies,
      coDevs,
    });
  }

  static async partialUpdate({
    id,
    image,
    livelink,
    githublink,
    description,
    technologies,
    coDevs,
  }) {
    const foundProject = await Project.findByPk(id);
    if (!foundProject) throw new NotFound(`Project with primary key ${id} not found`);
    if (image !== undefined) foundProject.image = image;
    if (livelink !== undefined) foundProject.livelink = livelink;
    if (githublink !== undefined) foundProject.githublink = githublink;
    if (description !== undefined) foundProject.description = description;
    if (technologies !== undefined) foundProject.technologies = technologies;
    if (coDevs !== undefined) foundProject.coDevs = coDevs;
    await foundProject.save();
    return foundProject.reload();
  }

  static async destroy(id) {
    const foundProject = await Project.findByPk(id);
    if (!foundProject) throw new NotFound(`Project with primary key ${id} not found`);
    await foundProject.destroy();
    return foundProject;
  }
}

export { ProjectRepository };
