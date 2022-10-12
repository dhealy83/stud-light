const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({}).populate('collections');
        },
        user: async (parent, args) => {
            return await User.findOne({_id: args.userId}).populate('collections');
        }
    }
}

module.exports = resolvers;