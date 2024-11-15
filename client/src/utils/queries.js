import { gql } from "@apollo/client";

export const GET_USER = gql`
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
`;

export const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      _id
      name
      image
    }
  }
`;

export const GET_SKILLS = gql`
  query getSkill($categoryName: String) {
    skill(category: $categoryName) {
      _id
      name
      image
      category {
        _id
        name
      }
    }
  }
`;

export const GET_NEARBY_SKILLS = gql`
  query getNearbySkills(
    $latitude: Float!
    $longitude: Float!
    $radius: Int!
    $skillName: String!
  ) {
    nearbySkills(
      latitude: $latitude
      longitude: $longitude
      radius: $radius
      skillName: $skillName
    ) {
      _id
      firstName
      lastName
      email
      skill {
        _id
        name
      }
    }
  }
`;

export const GET_SKILL_BY_ID = gql`
  query getSkillById($id: ID!) {
    skill(id: $id) {
      id
      timeAvailable
      description
      category {
        name
      }
      user {
        firstName
        lastName
      }
    }
  }
`;

export const GET_ME = gql`
query getMe {
  me {
    _id
    email
    firstName
    lastName
    skill {
      category {
        _id
        name
      }
      description
      name
      timeAvailable
    }
  }
}
`;
