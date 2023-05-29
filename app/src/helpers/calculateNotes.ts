interface Note {
  count: number;
  note: number;
}

export type Notes = Note[];
export const denominations = [100, 50, 20, 10, 5, 2, 1];

export const calculateNoteDispense = (amount: number): Notes => {
  let numericAmount = amount;

  const tempCount: Array<number> = [];
  const resultArray: Notes = [];
  denominations.forEach((note: number, index: number) => {
    if (numericAmount >= note) {
      tempCount[index] = Math.floor(numericAmount / note);
      numericAmount = numericAmount - tempCount[index] * note;
    }
  });
  denominations.forEach((note: number, index: number) => {
    resultArray[index] =
      typeof tempCount[index] === 'undefined'
        ? { count: 0, note }
        : { count: tempCount[index], note };
  });

  return resultArray.reverse();
};
