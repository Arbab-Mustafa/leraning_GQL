//  usertype

export const UserDefs = `

type User {
      name: String
      email: String 
      courses: [Course]
      teachers: [Teacher]
      }

type Course {
      title : String
      enrolledUsers : [User]
      }

type Teacher {
      name: String 
      courses: [Course]
      
      }

















    type Query {
      user: [User]
      Course: [Course]
      Teacher: [Teacher]

    }



    type Mutation {
    createUser(name: String, email: String): User
    deleteUser(name: String!): User
    createCourse(title: String): Course
    createTeacher(name: String): Teacher
    
    }
      
    
    
    
    `;
