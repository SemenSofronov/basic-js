module.exports = function countCats(matrix) {
  if (matrix.length === 0) return 0;
    let counter = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {

        if (matrix[i][j] !== undefined && matrix[i][j] === '^^') {
            counter += 1;
        }
      }
    }
    return counter;
};
