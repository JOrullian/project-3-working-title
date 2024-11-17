const { User, Skill, Category } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const { DateTimeResolver } = require("graphql-scalars");
const geolib = require("geolib");

const resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    categories: async () => {
      return await Category.find();
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }
      throw AuthenticationError;
    },
    skill: async () => {
      return await Skill.find().populate('category').populate('user');
    },
    getSkillsForSearch: async (parent, { term }) => {
      console.log(`Search Term: `, term);
      const regex = new RegExp(term, "i"); // Case-insensitive partial match
    
      // Step 1: Find matching categories
      const matchingCategories = await Category.find({ name: { $regex: regex } });
      const categoryIds = matchingCategories.map((category) => category._id);
    
      // Step 2: Find skills matching name or category ID
      const skills = await Skill.find({
        $or: [
          { name: { $regex: regex } },
          { category: { $in: categoryIds } },
        ],
      }).populate("category"); // Populate category for the frontend
    
      return skills;
    },
    getSkillsByUser: async (parent, { userId }) => {
      return await Skill.find({ user: userId }).populate('category').populate('user');
    },
    getSkillsByCategory: async (parent, { categoryName }) => {
      // Find the category by name, case-insensitive
      const category = await Category.findOne({
        name: { $regex: new RegExp(categoryName, "i") },
      });

      if (!category) {
        throw new Error("Category not found");
      }

      // Find skills with the category's ObjectId
      return await Skill.find({ category: category._id }).populate('category').populate('user');
    },
    getSkillsByName: async (parent, { name }) => {
      console.log("Searching for skills with name:", name);
      return await Skill.find({ name: { $regex: name, $options: "i" } }).populate('category').populate('user'); // Case-insensitive search
    },
    getSkillById: async (parent, { id }) => {
      console.log("Fetching skill with id:", id);
      const skill = await Skill.findById(id).populate('category').populate('user');
      console.log("Skill found:", skill);
      return skill;
    },
    nearbySkills: async (
      parent,
      { latitude, longitude, radius, skillName }
    ) => {
      // Fetch users with the specified skill
      const users = await User.find({ "skill.name": skillName });

      // Filter users based on proximity
      return users.filter((user) => {
        const userLocation = {
          latitude: user.location.coordinates[1],
          longitude: user.location.coordinates[0],
        };

        const distance = geolib.getDistance(
          { latitude, longitude },
          userLocation
        );

        // Return users within the specified radius
        return distance <= radius;
      });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
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
          user: context.user._id
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { skill: skill._id } }
        );
        return skill;
      }
      throw AuthenticationError;
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
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
    },
  },
};

module.exports = resolvers;
