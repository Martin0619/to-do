export interface TodoObj {
  id: number
  task: string
  done: boolean
}

export interface StateObj {
  todos: TodoObj[]
}

const DATA: StateObj = {
  todos: [
    { id: 1, task: 'A', done: false },
    { id: 2, task: 'B', done: false },
    { id: 3, task: 'C', done: true },
    { id: 4, task: 'D', done: true },
    { id: 5, task: 'E', done: false },
    { id: 6, task: 'F', done: false },
    { id: 7, task: 'G', done: true },
    { id: 8, task: 'H', done: false },
    { id: 9, task: 'I', done: false },
    { id: 10, task: 'J', done: true },
  ],
}

export default DATA
