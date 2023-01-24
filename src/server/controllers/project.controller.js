import { CREATED } from 'http-status';
import { ProjectService } from 'server/services';
import { NotFound } from 'utils/errors/NotFound';

class ProjectController {
  static async create(req, res, next) {
    try {
      const { image, livelink, githublink, description, technologies, coDevs } = req.body;
      const newProject = await ProjectService.create(
        image,
        livelink,
        githublink,
        description,
        technologies,
        coDevs
      );
      res.locals.status = CREATED;
      res.locals.data = newProject;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  static async get(req, res, next) {
    try {
      const { id } = req.params;
      const projectObject = await ProjectService.get(id);
      if (!projectObject) {
        throw new NotFound(`Project with primary key ${id} not found`);
      }
      res.locals.data = projectObject;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const filters = { ...req.query };
      const allProjects = await ProjectService.getAll(filters);
      res.locals.data = allProjects;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { image, livelink, githublink, description, technologies, coDevs } = req.body;

      const updatedProject = await ProjectService.update(
        id,
        image,
        livelink,
        githublink,
        description,
        technologies,
        coDevs
      );

      res.locals.data = updatedProject;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  static async partialUpdate(req, res, next) {
    try {
      const { id } = req.params;
      const { image, livelink, githublink, description, technologies, coDevs } = req.body;

      const updatedProject = await ProjectService.partialUpdate(
        id,
        image,
        livelink,
        githublink,
        description,
        technologies,
        coDevs
      );

      res.locals.data = updatedProject;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  static async destroy(req, res, next) {
    try {
      const { id } = req.params;
      const projectDelete = await ProjectService.destroy(id);
      res.locals.data = projectDelete;
      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export { ProjectController };
