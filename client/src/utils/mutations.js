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
mutation AddSkill($name: String!, $description: String!, $category: String, $timeAvailable: String, $user: ID!) {
  addSkill(name: $name, description: $description, category: $category, timeAvailable: $timeAvailable, user: $user) {
    name
    description
    timeAvailable
    category {
      name
    }
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