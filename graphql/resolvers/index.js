const spacesResolvers = require('./spaces')
const usersResolvers = require("./users");

module.exports = {
    Query: {
        ...spacesResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...spacesResolvers.Mutation
    }
}