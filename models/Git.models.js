const {Schema, model, SchemaTypes} = require('mongoose');
/*
config is configuration object:
{
    gitUser : 'Git username, reference to the User model'
    repo: 'Repository name',
    code: 'A number representing the required stats, see below'
}
{
    gitUser: ujjtamas,
    repo: parse from frome name,
    code: generate code
}
Simplified:
0 No config
1 Commit statistics
2 Page views
4 Clones and referrals
Full:
0 No config
1 weekly commit activity
2 weekly commit count
4 weekly commit count for each day
8 Page views
16 Repository clones
32 Referral paths
64 Referral sources
*/

const gitSchema = new Schema({
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    config: [{
        type:Object
    }]
});

const Git = model("Git", gitSchema);

module.exports = Git;