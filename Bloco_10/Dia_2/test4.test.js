const fetch = require('node-fetch');

const getRepos = () => {
  return fetch('https://api.github.com/users/tryber/repos')
    .then(response => response.json())
    .then(data => {
      return data.map(repo => repo.name);
    });
};

test('pegando a lista de nomes de repositorios', () => {
  return getRepos().then(result => {
    expect(result).toContain('sd-01-week4-5-project-todo-list');
    expect(result).toContain('sd-01-week4-5-project-meme-generator');
  });
});
