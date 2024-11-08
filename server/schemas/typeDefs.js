const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    location: String
    skill: [Skill]
    friends: [User]
  }

  type Skill {
    _id: ID
    name: String
    timeAvailable: Date
    description: String
    category: Category
    user: User
  }

  type Category {
    _id: ID
    name: String
    image: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    user: User
    skill: [Skill]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addSkill(name: String!, timeAvailable: Date!, description: String!, category: ID, User: ID): Skill
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs