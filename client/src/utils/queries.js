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

export const GET_SKILLS_BY_CATEGORY = gql`
query GetSkillsByCategory($categoryName: String!) {
  getSkillsByCategory(categoryName: $categoryName) {
    _id
    category {
      _id
      image
      name
    }
    description
    name
    timeAvailable
    user {
      _id
      email
      firstName
      lastName
    }
  }
}
`;

export const GET_SKILLS_BY_USER = gql`
query Query($userId: ID!) {
  getSkillsByUser(userId: $userId) {
    _id
    category {
      _id
      image
      name
    }
    description
    name
    timeAvailable
    user {
      _id
      email
      firstName
      lastName
    }
  }
}
`;

export const GET_SKILLS_BY_NAME = gql`
query GetSkillsByName($name: String!) {
  getSkillsByName(name: $name) {
    _id
    category {
      _id
      image
      name
    }
    description
    name
    timeAvailable
    user {
      _id
      email
      firstName
      lastName
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
  query GetSkillById($id: ID!) {
    getSkillById(id: $id) {
      _id
      name
      description
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
