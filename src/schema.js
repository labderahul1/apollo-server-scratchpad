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
  department: Department
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
  department: Department
}

type Department {
  id: Int
  name: String
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
