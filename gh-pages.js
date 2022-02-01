var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'master',
        repo: 'https://github.com/annieefu/det-chinatown.git', // Update to point to your repository  
        user: {
            name: 'Annie Fu', // update to use your name
            email: 'annieccfu@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)