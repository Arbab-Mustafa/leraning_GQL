const typeDefs = `
type User {
    id: ID!
    name: String!
    email: String!
    createdAt: String!
    course: Course
}

type Course {
    id: ID!
    title: String
    description: String
    
    }

type AssignCourseResponse {
  success: Boolean!
  message: String!
  user: User
}



type Query{
    getUsers: [User]
    getCourses: [Course]

}


type Mutation {
createUser(name: String!, email: String!): User
createCourse(title: String!, description: String!): Course
 assignCourseToUser(courseId: ID!, userId: ID!): AssignCourseResponse!
}











`;

export default typeDefs;
