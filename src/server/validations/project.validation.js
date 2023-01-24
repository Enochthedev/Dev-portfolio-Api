import { Joi } from 'express-validation';

const projectValidation = {
  getAll: {
    query: Joi.object({
      id: Joi.number().integer(),
      image: Joi.string().max(255),
      livelink: Joi.string().max(255),
      githublink: Joi.string().max(255),
      description: Joi.string().max(255),
      technologies: Joi.string().max(255),
      coDevs: Joi.string().max(255),
    }),
  },
  create: {
    body: Joi.object({
      image: Joi.string().max(255),
      livelink: Joi.string().max(255),
      githublink: Joi.string().max(255),
      description: Joi.string().max(255),
      technologies: Joi.string().max(255),
      coDevs: Joi.string().max(255),
    }),
  },
  update: {
    params: Joi.object({
      id: Joi.number().integer().required(),
    }),
    body: Joi.object({
      image: Joi.string().max(255).required(),
      livelink: Joi.string().max(255).required(),
      githublink: Joi.string().max(255).required(),
      description: Joi.string().max(255).required(),
      technologies: Joi.string().max(255).required(),
      coDevs: Joi.string().max(255).required(),
    }),
  },
  partialUpdate: {
    params: Joi.object({
      id: Joi.number().integer().required(),
    }),
    body: Joi.object({
      image: Joi.string().max(255),
      livelink: Joi.string().max(255),
      githublink: Joi.string().max(255),
      description: Joi.string().max(255),
      technologies: Joi.string().max(255),
      coDevs: Joi.string().max(255),
    }),
  },
  destroy: {
    params: Joi.object({
      id: Joi.number().integer().required(),
    }),
  },
};

export { projectValidation };
