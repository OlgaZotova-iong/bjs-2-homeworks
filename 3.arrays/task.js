function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
   const result = users
    .filter(user => user.gender === gender)
    .map(user => user.age)
    .reduce((acc, age, index, array) => {
      acc += age;
      if (index === array.length - 1) {
        return acc / array.length;
      }
      return acc;
    }, 0);

  return result;
}
