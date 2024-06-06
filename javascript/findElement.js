
const arr = [1, 2, 3, 4];


function search(arr, N, X) {
    for (let i = 0; i < N + 1; i++) {
        if (arr[i] == N) {
            console.log(i);
            return
        } else {
            console.log("-1");
            return
        }

    }
}

search(arr, 4, 3);