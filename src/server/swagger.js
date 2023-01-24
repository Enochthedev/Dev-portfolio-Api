const swaggerDocument = {
  swagger: '2.0',
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {
    '/project/': {
      get: {
        summary: 'Lists all the projects',
        tags: ['project'],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Returns a list',
            schema: {
              $ref: '#/definitions/Project',
            },
          },
        },
      },
      post: {
        summary: 'Creates a project',
        tags: ['project'],
        parameters: [
          {
            name: 'project',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateProject',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Returns a new project',
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateProject',
            },
          },
        },
      },
    },
    '/project/{id}': {
      get: {
        summary: 'Gets a project by its primary key',
        tags: ['project'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'integer',
          },
        ],
        responses: {
          200: {
            description: 'Returns a project with primary key',
            schema: {
              $ref: '#/definitions/Project',
            },
          },
        },
      },
      delete: {
        summary: 'Deletes a project by its primary key',
        tags: ['project'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'integer',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
        },
      },
      put: {
        summary: 'Overrides the values of a project',
        tags: ['project'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              $ref: '#/definitions/Project',
            },
          },
          {
            name: 'project',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateProject',
            },
          },
        ],
        responses: {
          200: {
            description: 'Returns a project',
            schema: {
              $ref: '#/definitions/Project',
            },
          },
        },
      },
      patch: {
        tags: ['project'],
        summary: 'patch a project',
        parameters: [
          {
            name: 'id',
            in: 'path',
            schema: {
              $ref: '#/definitions/Project',
            },
          },
          {
            name: 'project',
            in: 'body',
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateProject',
            },
          },
        ],
        responses: {
          200: {
            description: 'Returns a project and its partially overwritten values',
            schema: {
              $ref: '#/definitions/Project',
            },
          },
        },
      },
    },
  },
  definitions: {
    Project: {
      required: [],
      properties: {
        id: {
          type: 'integer',
          format: 'int32',
          uniqueItems: true,
          readOnly: true,
        },
        image: {
          type: 'string',
          maxLength: 255,
        },
        livelink: {
          type: 'string',
          maxLength: 255,
        },
        githublink: {
          type: 'string',
          maxLength: 255,
        },
        description: {
          type: 'string',
          maxLength: 255,
        },
        technologies: {
          type: 'string',
          maxLength: 255,
        },
        coDevs: {
          type: 'string',
          maxLength: 255,
        },
      },
    },
  },
  createUpdateDef: {
    CreateUpdateProject: {
      required: [],
      properties: {
        id: {
          type: 'integer',
          format: 'int32',
          uniqueItems: true,
          readOnly: true,
        },
        image: {
          type: 'string',
          maxLength: 255,
        },
        livelink: {
          type: 'string',
          maxLength: 255,
        },
        githublink: {
          type: 'string',
          maxLength: 255,
        },
        description: {
          type: 'string',
          maxLength: 255,
        },
        technologies: {
          type: 'string',
          maxLength: 255,
        },
        coDevs: {
          type: 'string',
          maxLength: 255,
        },
      },
    },
  },
};

export { swaggerDocument };
