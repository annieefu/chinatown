var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/annieefu/chinatown.git', // Update to point to your repository  
        user: {
            name: 'Annie Fu', // update to use your name
            email: 'annieccfu@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)