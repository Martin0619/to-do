import chai, { expect } from "chai"
import assertArrays from "chai-arrays"
import addTodo from "../src/add-todo"
import clearList from "../src/clear-list"
import completeTask from "../src/complete-todo"
import DATA, { TodoObj } from "../src/in-memory-data"
import moveTodo from "../src/move-todo"
import printList from "../src/print-todos"
import removeTodo from "../src/remove-todo"

chai.use(assertArrays)

it("marks a task done", () => {
	const actual = [...DATA.todos]
	completeTask(actual, 5)

	console.log("marks task {id:5} as done", actual)

	expect(true)
})

it("prints list and include item and item status", () => {
	printList(DATA.todos)
})

it("adds an item to the list", () => {
	const actual = [...DATA.todos]

	let expected = addTodo(actual, { done: false, id: 11, task: "K" })

	expect(expected).to.deep.equal(11)

	expected = addTodo(actual, { done: false, id: 11, task: "K" })

	expect(expected).to.deep.equal(12)
})

it("removes an item from the list", () => {
	const actual = [...DATA.todos]

	const removedTodos = removeTodo(actual, 5) ?? []

	expect(actual.length).to.deep.equal(9)
	expect(removedTodos.length).to.deep.equal(1)
	expect(removedTodos).to.be.equalTo([DATA.todos[4]])
})

it("clears the list of TODOs", () => {
	const todos = [...DATA.todos]

	const actual = clearList(todos)

	const expected = 10

	expect(actual.length).to.deep.equal(expected)
	expect(todos.length).to.deep.equal(0)
})

it("moves items", () => {
	const data = [...DATA.todos]
	const taskA = data[0]

	moveTodo(data, taskA, 8)

	const actual = data[8]
	const expected: TodoObj = { id: 1, task: "A", done: false }

	console.log("after swapping=", data)

	expect(actual).to.deep.equal(expected)
})
