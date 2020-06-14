const greeter = (person: string): string => {
    return `Hello, ${person}`;
  },
  user = 'Jane User';

document.body.textContent = greeter(user);

export {};
