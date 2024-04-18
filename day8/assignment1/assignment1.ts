// Todo interface
interface Todo {
  name: string;
  description: string;
  done: boolean;
}

// the 'add' function
type AddTodoFunction = (name: string, description: string) => number;

// the 'remove' function
type RemoveTodoFunction = (index: number) => Todo[];

// the 'list' function
type ListTodosFunction = () => void;

//  the 'update' function
type UpdateTodoFunction = (
  index: number,
  name: string,
  description: string
) => Todo;

// Initialize todos array with Todo[]
const todos: Todo[] = [];

// 'add' function with type annotation
const add: AddTodoFunction = (name, description) => {
  const newTodo: Todo = {
    name: name,
    description: description,
    done: false,
  };
  return todos.push(newTodo); // Return the new length of the todos array
};

//  'remove' function with type annotation
const remove: RemoveTodoFunction = (index) => {
  return todos.splice(index, 1); // Return the removed Todo[]
};

// 'list' function with type annotation
const list: ListTodosFunction = () => {
  todos.forEach((todo, index) => {
    console.log(`${index} - ${todo.name}`);
  });
};

// 'update' function with type annotation
const update: UpdateTodoFunction = (index, name, description) => {
  todos[index].name = name;
  todos[index].description = description;
  return todos[index]; // Return the updated Todo
};

// Test the functions
add("Learn TypeScript", "Study TypeScript concepts"); // Adds a new Todo
add("Complete Project", "Finish TypeScript project"); // Adds another new Todo
list(); // Lists all Todos
update(0, "Master TypeScript", "Become proficient in TypeScript"); // Updates the first Todo
list(); // Lists all Todos after update
remove(1); // Removes the second Todo
list(); // Lists all Todos after remove
