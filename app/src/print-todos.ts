import { TodoObj } from "./in-memory-data"

export default function printList<T extends TodoObj>(arr: T[]) {
	let str = "TODOs = [\n"
	arr.forEach((item) => {
		str +=
			"  " +
			JSON.stringify({
				todo: item.task,
				status: item.done === true ? "done" : "pending",
			}) +
			",\n"
	})
	str += "]"

	console.log(str)
}
