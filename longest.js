let input = [];
require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', function(line) {
        input.push(line.trim());
    })
    .on('close', function() {
        // 입력값 처리 및 출력
        const count = input[0]
        // 배열 처리
        const arr = input[1].split(' ').map(value => value * 1)
        // dp
        let dp = []
        arr.reduce((max, val, i) => {
            const curDp = dp.reduce((maxVal,curVal,j) => arr[j] < arr[i] && curVal > maxVal ? curVal : maxVal, 0) + 1
            dp.push(curDp)
            return max < curDp ? curDp : max },0)

        let dpRight = []
        arr.reduceRight((max, val, i) => {
            const curDp = dpRight.reduceRight((maxVal,curVal,j) => arr[arr.length-(dpRight.length - j)] < arr[i] && curVal > maxVal ? curVal : maxVal, 0) + 1
            dpRight.unshift(curDp)
            return max < curDp ? curDp : max },0)

        const result = dp.reduce((max,val,i) => val + dpRight[i] - 1 > max ? val + dpRight[i] - 1 : max,0)
        console.log(result)
    });
