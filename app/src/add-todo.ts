import { TodoObj } from "./in-memory-data"

export default function addTodo<T extends TodoObj>(todos: T[], todo: T) {
	return todos.push(todo)
}
