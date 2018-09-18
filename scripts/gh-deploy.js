const ghpages = require('gh-pages');

ghpages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/juanhb/react-redux-chat',
  dest: 'docs',
  user: {
    name: 'Juan Biscaia',
    email: 'juanbiscaia@gmail.com'
  },
  message: 'Publishing to GH pages project'

}, console.log);
