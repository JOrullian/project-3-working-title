const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    skill: [Skill]
  }

  type Skill {
    _id: ID
    name: String
    image: String
    category: Category
  }

  type Category {
    _id: ID
    name: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    user: User
    skills: [Skill]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String, skill: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs