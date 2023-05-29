import { Notes } from './calculateNotes';

export const countNotes = (notes: Notes): number => {
  if (!!notes && notes.length > 0) {
    return notes.reduce((acc, curr) => {
      if (typeof curr.count !== 'undefined') {
        return (acc += curr.count);
      }
      return acc;
    }, 0);
  }
  return 0;
};
