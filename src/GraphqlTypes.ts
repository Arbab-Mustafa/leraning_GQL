//  usertype

export const UserDefs = `

  type Teacher {
  id: ID!
  name: String!
  courses: [Course!]
}

type Course {
  id: ID!
  title: String!
  enrolledUsers: [User!]
}

type User {
  id: ID!
  name: String!
  email: String!
  courses: [Course!]
  teachers: [Teacher!]
}

















    type Query {
      user: [User]
      Course: [Course]
      Teacher: [Teacher]

    }


 type Mutation {
 createTeacher(name: String!): Teacher!
  createUser(name: String!, email: String!): User!
  createCourse(title: String!): Course!
  enrollUserToCourse(userId: ID!, courseId: ID!): Course!
  assignTeacherToCourse(teacherId: ID!, courseId: ID!): Teacher!
}
      
    
    
    
    `;
