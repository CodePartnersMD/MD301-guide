def binary_search(arr: list, key: any) -> int:
    start = 0
    end = len(arr) - 1

    while abs(start - end) > 1:
        mid = abs(start + end) // 2

        if key == arr[mid]:
            return mid

        if key > arr[mid]:
            start = mid + 1

        if key < arr[mid]:
            end = mid - 1

    return -1
