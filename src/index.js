module.exports = function getZerosCount(number, base) {
    let result = 0;
    let temp = base;
    for (var i = 2; i <= base; i++) {
        if (temp % i == 0) {
            var p = 0;
            while (temp % i == 0) {
                temp /= i;
                p++;
            }
            var count = 0;
            var t =number;

            while (( t = Math.trunc(t / i)) > 0) {
                count += t;
            }
            if (result == 0) {
                result = Math.trunc(count / p);
            }
            else result = Math.min(result, Math.trunc(count / p))
        }
    }
    return result;
}