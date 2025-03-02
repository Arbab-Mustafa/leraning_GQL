import { gql } from "@apollo/client";

const CREATE_RESUME = gql`
  mutation CreateResume($resume: ResumeInput!) {
    createResume(resume: $resume) {
      id
      user {
        fullName
        email
        phone
        address
        profilePicture
        summary
        socialLinks {
          platform
          url
        }
      }
      experience {
        jobTitle
        company
        location
        startDate
        endDate
        description
      }
      education {
        degree
        institution
        location
        startDate
        endDate
        grade
      }
      skills {
        name
        level
      }
      projects {
        title
        description
        technologies
        link
        githubRepo
      }
      certifications {
        name
        issuer
        dateIssued
        credentialID
        link
      }
      languages {
        name
        proficiency
      }
      interests
    }
  }
`;

export default CREATE_RESUME;
