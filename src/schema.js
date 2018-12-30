let { makeExecutableSchema, addMockFunctionsToSchema } = require("graphql-tools");
let resolvers = require("./resolvers");

const typeDefs = `
type Query {
  getAllEmployees: [Employee],
	getEmployees(first: Int): [Employee],
	getEmployeeById(id: String): Employee,
  searchEmployee(department: Int, name: String): [Employee]
}

type Mutation {
	editEmployee(employee: EditEmployeeInput): Employee
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
	address: Address
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
	address: Address  projects: [Project]
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
	address: Address
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
	department: Department
	address: Address
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

type Address {
	city: String
	state: String
	country: String
}

input EditEmployeeInput {
	id: String
	firstName: String
	lastName: String
	designation: String
	salary: String
}


`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
