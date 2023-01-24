import { ProjectRepository } from 'data/repositories';

class ProjectService {
  static create(image, livelink, githublink, description, technologies, coDevs) {
    return ProjectRepository.create(image, livelink, githublink, description, technologies, coDevs);
  }

  static get(id) {
    return ProjectRepository.get(id);
  }

  static getAll(args) {
    return ProjectRepository.getAll(args);
  }

  static update(id, image, livelink, githublink, description, technologies, coDevs) {
    return ProjectRepository.update(
      id,
      image,
      livelink,
      githublink,
      description,
      technologies,
      coDevs
    );
  }

  static partialUpdate(id, image, livelink, githublink, description, technologies, coDevs) {
    return ProjectRepository.partialUpdate({
      id,
      image,
      livelink,
      githublink,
      description,
      technologies,
      coDevs,
    });
  }

  static destroy(id) {
    return ProjectRepository.destroy(id);
  }
}

export { ProjectService };
