const { gql } = require('apollo-server-express');

const  typeDefs = gql `
    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth 
        addUser(email: String!, username: String!, password: String!): Auth
        saveBook(input: BookInfo): User
        removeBook(bookId: String!): User
    }

    type BookInfo {
        bookId: String!
        authors: [String]
        description: String
        title: String!
        image: String
        link: String
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: String!
        authors: [String]
        description: String
        title: String!
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;