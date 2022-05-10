import { TodoObj } from './in-memory-data'
import quickSort from './quick-sort'

export default function ascOrderNotDoneFirst(arr: TodoObj[]) {
  let data = quickSort(
    arr,
    (o1, o2) =>
      (o1.done === false && o2.done === true) || (o1.done === false && o1.id < o2.id)
  )
  console.log('before adjustment=', data)
  // if last TO-DO is not done, the list is in proper order
  if (data[data.length - 1].done === false) return data

  // order the TO-DOs that are done
  let start = 0
  let end = data.length - 1
  let mid = Math.floor((start + end) / 2)

  while (start <= end) {
    if (data[mid].done === false) break
    else end = mid - 1

    mid = Math.floor((start + end) / 2)
  }
  while (mid + 1 < data.length && data[++mid].done === false);

  console.log('index=', mid)

  let doneTodos = data.splice(mid)

  console.log('Done TODOs=', doneTodos)

  doneTodos = quickSort(doneTodos, (o1, o2) => o1.id < o2.id)

  data.push(...doneTodos)

  return data
}
