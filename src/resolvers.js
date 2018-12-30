const Employees = require( './employees');
const Departments = require( './departments');
const Projects = require( './projects');

const resolvers = {
  Employee: {
    __resolveType(obj, context, info) {
        if (obj.department === 1) {
          return 'Engineer';
        } else if (obj.department === 2) {
          return 'HumanResource';
        } else {
          return 'MarketingExec';
        }

        return null;
    }
  },
  Query: {
    getAllEmployees(_, args) {
      return Employees;
    },
    getEmployees(_, { first: limit }) {
      return Employees.slice(0, limit);
    },
    searchEmployee(_, { department, name }) {
      const results = Employees.filter(employee => employee.department === department && employee.firstName.startsWith(name));
      return results;
		},
		getEmployeeById(_, { id }) {
			return Employees.find(e => e.id === id );
		}
	},
	Mutation: {
		editEmployee(_, { employee: emp }) {
			let employee = Employees.find(e => e.id === emp.id);
			employee.firstName = emp.firstName;
			employee.lastName = emp.lastName;
			employee.designation = emp.designation;
			employee.salary = emp.salary;
			return employee;
		}
	},
  Engineer: {
    department(employee) {
      return Departments.find(department => department.id === employee.department);
    },
    projects(employee) {
      return employee.projects.map(project => Projects.find(p => p.id === project));
    }
  },
  HumanResource: {
    department(employee) {
      return Departments.find(department => department.id === employee.department);
    }
  },
  MarketingExec: {
    department(employee) {
      return Departments.find(department => department.id === employee.department);
    }
  }
};

module.exports = resolvers;