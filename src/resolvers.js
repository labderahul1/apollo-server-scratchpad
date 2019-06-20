const Todos = require( './todos');
// const Category = require( './category');
// const Projects = require( './projects');

const resolvers = {
  Query: {
    getAllTodoList(_, args) {
      // console.log("obj", Todos);
      return Todos;
  },
  getToDoById(_, { todoId }) {
    const todo = Todos.find((element) => element.id === todoId );
    return todo;
}
},
  Mutation: {
		createTodo(_, { todoInput: {id, label, todoStatus, description, todoActivity}, todoInput}) {
      console.log(todoInput, 'todoInput');
      let obj = new Object();      
      obj.id = id;
      obj.label = label;
      obj.todoStatus = todoStatus;
      obj.todoActivity = todoActivity;
      obj.description = description;
      Todos.push(obj);
			return {id, label, todoStatus, description, todoActivity};
    },
    addTodoActivity(_, { id, todoActivity }) {  
      // addTodoActivity(_, _args) {      
      const todo = Todos.find((element) => element.id === id );      
      console.log(id, todoActivity, 'todo');
      todo.todoActivity.push(todoActivity);
      return todoActivity;
    },
    updateTodo(_, { id, updateInput }) {  
      const todoIndex = Todos.findIndex((element) => element.id === id );   
      console.log(todoIndex, 'todoIndex', id);
      Todos[todoIndex] = updateInput;
      return Todos;
    },
    deleteTodo(_, { todoId: id }) {
      console.log(id);
      let deletedItem = Todos.splice(0, 1)[0];
      console.log(deletedItem, 'deletedItem')
			return deletedItem;
		}
	},
};

module.exports = resolvers;