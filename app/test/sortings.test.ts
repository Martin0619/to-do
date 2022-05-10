import chai, { expect } from 'chai'
import assertArrays from 'chai-arrays'
import _ from 'lodash'
import ascOrderNotDoneFirst from '../src/asc-order-not-done-first'
import DATA, { TodoObj } from '../src/in-memory-data'
import quickSort from '../src/quick-sort'

chai.use(assertArrays)

it('sorts list in ascending order', () => {
  let todos = [...DATA.todos]
  todos = _.shuffle(todos)
  const actual = quickSort<TodoObj>(todos, (o1, o2) => o1.id < o2.id)
  const expected = DATA.todos

  expect(actual).to.be.equalTo(expected)
})

it('sorts list in descending order', () => {
  let todos = [...DATA.todos]
  todos = _.shuffle(todos)
  const actual = quickSort<TodoObj>(todos, (o1, o2) => o1.id > o2.id)
  const expected = [...DATA.todos]

  expect(actual).to.be.equalTo(expected.reverse())
})

it('sorts list in ascending order with all tasks not done first', () => {
  let todos = [...DATA.todos]
  todos = _.shuffle(todos)
  const actual = ascOrderNotDoneFirst(todos)

  console.log('asc order; all tasks not done first', actual)

  expect(actual[0].id).to.deep.equal(1)
  expect(actual[actual.length - 2].id).to.deep.equal(7)
  expect(actual[actual.length - 1].id).to.deep.equal(10)
})
