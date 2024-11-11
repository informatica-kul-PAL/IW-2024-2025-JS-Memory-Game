class Matrix {
  constructor(rows, columns) {
    if (columns <= 0 || rows <= 0) throw new Error("Matrix width and height has to be greather than 0");
    this.rows = rows;
    this.columns = columns;
    this.elements = Array.from({ length: rows * columns });
    console.log(this.elements);
  }

  getIndex(row, column) {
    if (row < 0 || row > this.rows) throw new Error("Row out of bounds.");
    if (column < 0 || column > this.columns) throw new Error("Row out of bounds.");

    return row * this.columns + column;
  } 

  set(row, column, value) {
    let index = this.getIndex(row, column);
    this.elements[index] = value;
    return this.elements[index];
  }

  setWithIndex(idx, value) {
    if (idx < 0 || idx >= this.size()) throw new Error("Out of bounds");
    this.elements[idx] = value;
  }

  getFromIndex(idx, value) {
    if (idx < 0 || idx >= this.size()) throw new Error("Out of bounds");
    return this.elements[idx];
  }

  get(row, column) {
    let index = this.getIndex(row, column);
    return this.elements[index];
  }

  size() {
    return this.rows * this.columns;
  }

  getElements() {
    return this.elements;
  }
}