import { CanActivateFn } from '@angular/router';

export const permessionsGuard: CanActivateFn = (route, state) => {
  return true;
};
