const sort_ = (left: number, right: number, arr: number[]) => {
    if (left >= right) {
        return
    }
    let i = left
    let j = right
    let base = arr[i]
    while (i < j) {
        while (arr[i] < base && i < j) {
            i++
        }
        while (arr[j] > base && i < j) {
            j--
        }
        let tmp = arr[j]
        arr[i] = tmp
    }
    arr[left] = arr[i]
    arr[i] = base

    sort_(left, i-1, arr)
    sort_(i + 1, right, arr)
}
export default sort_