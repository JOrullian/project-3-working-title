import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`
export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`
export const ADD_SKILL = gql`
mutation Mutation($name: String!, $description: String!, $category: ID!, $user: ID!) {
  addSkill(name: $name, description: $description, category: $category, user: $user) {
    _id
    category {
      _id
    }
    description
    name
    timeAvailable
    user {
      _id
    }
  }
}
`

export const UPDATE_USER = gql`
mutation UpdateUser($firstName: String, $lastName: String, $email: String, $password: String) {
    updateUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      _id
      email
      firstName
      lastName
    }
  }
`