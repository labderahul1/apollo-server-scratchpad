let { makeExecutableSchema, addMockFunctionsToSchema } = require("graphql-tools");
let resolvers = require("./resolvers");

const typeDefs = `
type Query {
  getAllEmployees: [Employee],
  getEmployees(first: Int): [Employee],
  searchEmployee(department: Int, name: String): [Employee]
}

interface Employee {
  id: String
  firstName: String
  lastName: String
  gender: String
  designation: String
  avatar: String
  email: String
  salary: String
  department: Department
}

type Engineer implements Employee {
  id: String
  firstName: String
  lastName: String
  gender: String
  designation: String
  avatar: String
  email: String
  salary: String
  department: Department
  projects: [Project]
}

type HumanResource implements Employee {
  id: String
  firstName: String
  lastName: String
  gender: String
  designation: String
  avatar: String
  email: String
  salary: String
  department: Department,
  friends: [String]
}

type MarketingExec implements Employee {
  id: String
  firstName: String
  lastName: String
  gender: String
  designation: String
  avatar: String
  email: String
  salary: String
  department: Department,
  bonus: String
}

type Department {
  id: Int
  name: String
}

type Project {
  id: Int
  name: String
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
