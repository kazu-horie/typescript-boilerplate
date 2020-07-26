/* eslint-disable */

import { repeat } from './repeat';

const greeter = (person: string): string => {
    return `Hello, ${Object.assign({ person }, {}).person}.`;
  },
  user = 'Jane User';

document.body.textContent = repeat(greeter(user));

export {};
