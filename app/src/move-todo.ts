import { TodoObj } from "./in-memory-data"

export default function moveTodo<T extends TodoObj>(
	todos: T[],
	todo: T,
	pos: number
) {
	const NOT_FOUND = -1

	if (pos >= todos.length) return NOT_FOUND

	const index = todos.findIndex((t) => t.id === todo.id)

	if (index === -1) return NOT_FOUND

	const temp = todos[pos]
	todos[pos] = todo
	todos[index] = temp
}
