
  
  
  // my custom array filter
  // write your own method which implements Array.prototype.filter
  
  function customFilter(callback) {
    let array = [];
    for(let i = 0; i < this.length; i++) {
        if(this[i] >= 1000) {
            array.push(this[i]);
        }

    }
    return array;
  }
  
  Array.prototype.customFilter = customFilter;

  let arraySalary = [500, 1000, 2000, 1200, 200];

  let goodSalary = arraySalary.customFilter((value, i, arr) => {
      return value >= 1000;
     
  });
  console.log(goodSalary);
  
  
  // ################################