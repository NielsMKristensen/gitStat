/*0 No config
1 Commit statistics
2 Page views
4 Clones and referrals*/
const codePathMap = {
0:'',
1:['/stats/code_frequency','/stats/participation','/stats/punch_card'],
2:['/traffic/views'],
4:['/traffic/clones','/traffic/popular/paths','/traffic/popular/referrers']
}

const gitAPIPathRepos = 'https://api.github.com/repos';
const gitAPIPathUsers = 'https://api.github.com/users';
 module.exports = {codePathMap, gitAPIPathRepos,gitAPIPathUsers};
//  module.exports = codePathMap;