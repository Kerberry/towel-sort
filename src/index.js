
module.exports = function towelSort (matrix) {
    let result = [];
    if(matrix){
        for (i = 0;i < matrix.length; i++){
            if(i % 2 == 0){
                result.push(...matrix[i])
            }
            else {
                let n = matrix[i].reverse()
                result.push(...n)
            }
        } 
    }
    
    return result;
}
