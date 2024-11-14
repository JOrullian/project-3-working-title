const typeDefs = `
  scalar DateTime

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
    timeAvailable: DateTime
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
    nearbySkills(latitude: Float!, longitude: Float!, radius: Int!, skillName: String!): [User]
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, location: String): User
    addSkill(name: String!, timeAvailable: DateTime!, description: String!, category: ID, User: ID): Skill
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs