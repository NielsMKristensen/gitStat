/*0 No config
1 Commit statistics
2 Page views
4 Clones and referrals*/
/* const codePathMap = {
0:'',
1:['/stats/participation','/stats/code_frequency','/stats/punch_card','/stats/commit_activity'],
2:['/stats/contributors'],
4:['/stats/community/profile']
}; */


const codePathMap = {
0:'',
1:['/stats/code_frequency','/stats/participation'],
2:['/stats/contributors'],
4:['/stats/community/profile']
};




/* ,'/stats/participation','/stats/punch_card','/stats/commit_activity' */
/* const formCodes = {
    'commitStat' : 1,
    'pageViews' : 2,
    'clonesReferrals' : 4
}; */

const formCodes = {
    'commitStat' : 1,
    'contributors' : 2,
    'health' : 4
};

const gitAPIPathRepos = 'https://api.github.com/repos';
const gitAPIPathUsers = 'https://api.github.com/users';
 module.exports = {codePathMap, gitAPIPathRepos,gitAPIPathUsers,formCodes};
//  module.exports = codePathMap;