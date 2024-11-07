import { gql } from '@apollo/client'

export const GET_USERS = gql`
    query getUser {
        user {
          _id
          firstName
          lastName
          email
          skill {
            _id
            name
            image
            category {
              _id
              name
        }
      }
    }
  }
`

export const GET_CATEGORIES = gql`
    query getCategories {
        categories {
          _id
          name
        }
      }
  `

export const GET_SKILLS = gql`
    query getSkill {
        skill {
          _id
          name
          image
          category {
            _id
            name
    }
  }
}
`

