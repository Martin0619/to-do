export default function quickSort<T>(
  arr: T[],
  comparator: (o1: T, o2: T) => boolean
): T[] {
  if (arr.length <= 1) return arr

  const lastIndex = arr.length - 1

  const pivot = arr[lastIndex]

  const leftArr: T[] = []

  const rightArr: T[] = []

  for (let i = 0; i < lastIndex; i++) {
    if (comparator(arr[i], pivot)) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }

  return [...quickSort(leftArr, comparator), pivot, ...quickSort(rightArr, comparator)]
}
