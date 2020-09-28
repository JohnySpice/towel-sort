
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];
  arr = [];
  for (let index = 0; index < matrix.length; index++) {
    arr = index % 2 !== 0 ? arr.concat(matrix[index].reverse()) : arr.concat(matrix[index]);
  }
  return arr;
}
