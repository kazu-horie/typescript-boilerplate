/* eslint-disable */
const greeter = (person: string): string => {
    return `Hello, ${Object.assign({ person }, {}).person}`;
  },
  user = 'Jane User';

document.body.textContent = greeter(user);

export {};
