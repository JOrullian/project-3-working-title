const { User, Skill, Category } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { DateTimeResolver } = require('graphql-scalars');
// const geolib = require('geolib');

const resolvers = {
    DateTime: DateTimeResolver,
    Query: {
        categories: async () => {
            return await Category.find();
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id);
                return user
            }
            throw AuthenticationError
        },
        skill: async () => {
            return await Skill.find();
        },
        // nearbySkills: async (parent, { latitude, longitude, radius, skillName }) => {            // Fetch users with the specified skill
        //     const users = await User.find({ 'skill.name': skillName });

        //     // Filter users based on proximity
        //     return users.filter(user => {
        //         const userLocation = {
        //             latitude: user.location.coordinates[1],
        //             longitude: user.location.coordinates[0]
        //         };

        //         const distance = geolib.getDistance(
        //             { latitude, longitude },
        //             userLocation
        //         );

        //         // Return users within the specified radius
        //         return distance <= radius;
        //     })
        // },
        me: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate('skill');
                return user;
            }
            throw AuthenticationError;
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        addSkill: async (parent, args, context) => {
            if (context.user) {
                const { name, timeAvailable, description, category, user } = args;

                const skill = await Skill.create({
                    name,
                    timeAvailable,
                    description,
                    category,
                    user
                })
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { skill: skill._id } }
                );
                return skill
            }
            throw AuthenticationError
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
            throw AuthenticationError;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw AuthenticationError;
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw AuthenticationError;
            }
            const token = signToken(user);
            return { token, user };
        }
    }
}

module.exports = resolvers