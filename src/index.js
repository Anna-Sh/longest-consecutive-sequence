module.exports = function longestConsecutiveLength(array) {
    let maxLen = 0;
    const hashSet = new Set(array);

    for (let num of hashSet){
        let next = num + 1, localLen = 1;

        if(!hashSet.has(num-1)) {
            while(hashSet.has(next++)){
                localLen++;
            }
            maxLen = Math.max(maxLen, localLen);
        }
    }
    return maxLen;
};