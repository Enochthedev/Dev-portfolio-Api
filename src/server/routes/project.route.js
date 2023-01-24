import { Router } from 'express';
import { validate } from 'express-validation';
import { ProjectController } from 'server/controllers';
import { projectValidation, options } from 'server/validations';

const router = Router();

router.get('/', validate(projectValidation.getAll, options), ProjectController.getAll);

router.get('/:id', ProjectController.get);

router.post('/', validate(projectValidation.create, options), ProjectController.create);

router.put('/:id', validate(projectValidation.update, options), ProjectController.update);

router.patch(
  '/:id',
  validate(projectValidation.partialUpdate, options),
  ProjectController.partialUpdate
);

router.delete('/:id', validate(projectValidation.destroy, options), ProjectController.destroy);

export { router as projectRouter };
