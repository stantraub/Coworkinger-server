const { gql } = require('apollo-server')


module.exports = gql`
  type Space {
    _id: ID!
    name: String!
    address: String!
    city: String!
    state: String!
    zipcode: Int!
    description: String!
    email: String!
    cost: Int!
    phone: String
    website: String
    openHour: String!
    closingHour: String!
    neighborhood: String
    officeCapacity: Int
    peopleCapacity: Int
    availability: Boolean
    deskDay: Boolean
    sharedDesk: Int
    meetingRooms: Int
    hours24Access: Boolean
    transitStationMiles: Float
    wellnessRoom: Boolean
    phoneBooths: Int
    eventSpace: Boolean
    bikeParking: Boolean
    petFriendly: Boolean
    snacksDrinksIncluded: Boolean
    teaCoffeeIncluded: Boolean
    pingPong: Boolean
    billiards: Boolean
    foosball: Boolean
    showers: Boolean
    onsiteGym: Boolean
    printersIncluded: Boolean
    bocceBall: Boolean
    napRoom: Boolean
    mainPhoto: String
  }

  type User {
    id: ID!
    email: String!
    username: String!
    token: String!
  }

  input RegisterInput {
    email: String!
    username: String!
    password: String!
    confirmPassword: String!
  }

  input SpaceInput {
    name: String!
    mainPhoto: String
    address: String!
    city: String!
    state: String!
    zipcode: Int!
    description: String!
    email: String!
    cost: Int!
    phone: String
    website: String
    openHour: String!
    closingHour: String!
    neighborhood: String
    officeCapacity: Int
    peopleCapacity: Int
    availability: Boolean
    deskDay: Boolean
    sharedDesk: Int
    meetingRooms: Int
    hours24Access: Boolean
    transitStationMiles: Float
    wellnessRoom: Boolean
    phoneBooths: Int
    eventSpace: Boolean
    bikeParking: Boolean
    petFriendly: Boolean
    snacksDrinksIncluded: Boolean
    teaCoffeeIncluded: Boolean
    pingPong: Boolean
    billiards: Boolean
    foosball: Boolean
    showers: Boolean
    onsiteGym: Boolean
    printersIncluded: Boolean
    bocceBall: Boolean
    napRoom: Boolean
    }

  type Query {
    getSpaces: [Space]
    getSpace(spaceId: ID!): Space
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createSpace(spaceInput: SpaceInput): Space!
  }
`;