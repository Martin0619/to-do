export default function binarySearch<T>(
  arr: T[],
  item: T,
  comparator: (o1: T, o2: T) => number
) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    const comparison = comparator(arr[mid], item)

    if (comparison === 0) return mid
    else if (comparison < 0) start = mid + 1
    else end = mid - 1
  }

  return -1
}
