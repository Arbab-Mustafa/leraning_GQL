import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      name
      email
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

export const GET_COURSES = gql`
  query getCourses {
    getCourses {
      id
      title
    }
  }
`;

export const ADD_COURSE = gql`
  mutation addCourse($title: String!) {
    addCourse(title: $title) {
      title
    }
  }
`;

export const GET_TEACHERS = gql`
  query GetTeachers {
    getTeachers {
      id
      name
      courses {
        id
        title
      }

      user {
        id
        name
      }
    }
  }
`;
