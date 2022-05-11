import { TodoObj } from "./in-memory-data"

export default function completeTask<T extends TodoObj>(
	todos: T[],
	id: number
) {
	const index = todos.findIndex((t) => t.id === id)

	if (index === -1) return

	todos[index].done = true
}
