import chai, { expect } from 'chai'
import assertArrays from 'chai-arrays'
import addTodo from '../src/add-todo'
import clearList from '../src/clear-list'
import completeTask from '../src/complete-todo'
import DATA from '../src/in-memory-data'
import moveTodos from '../src/move-todos'
import printList from '../src/print-todos'
import removeTodo from '../src/remove-todo'

chai.use(assertArrays)

it('marks a task done', () => {
  const actual = [...DATA.todos]
  completeTask(actual, 5)

  console.log('marks task {id:5} as done', actual)

  expect(true)
})

it('prints list and include item and item status', () => {
  printList(DATA.todos)
})

it('adds an item to the list', () => {
  const actual = [...DATA.todos]

  let expected = addTodo(actual, { done: false, id: 11, task: 'K' })

  expect(expected).to.deep.equal(11)

  expected = addTodo(actual, { done: false, id: 11, task: 'K' })

  expect(expected).to.deep.equal(12)
})

it('removes an item from the list', () => {
  const actual = [...DATA.todos]

  const removedTodos = removeTodo(actual, 5) ?? []

  expect(actual.length).to.deep.equal(9)
  expect(removedTodos.length).to.deep.equal(1)
  expect(removedTodos).to.be.equalTo([DATA.todos[4]])
})

it('clears the list of TODOs', () => {
  const todos = [...DATA.todos]

  const actual = clearList(todos)

  const expected = 10

  expect(actual.length).to.deep.equal(expected)
  expect(todos.length).to.deep.equal(0)
})

it('moves items', () => {
  const actual = [...DATA.todos]
  const taskA = actual[0]
  const taskB = actual[8]

  moveTodos(actual, taskA, taskB)

  const expected = actual[0]

  console.log('after swapping=', actual)

  expect(expected.id).to.deep.equal(taskB.id)
})
