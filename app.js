function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
  }

  function mergeArrays(arr1, arr2) {
    return arr1.filter((item) => !arr2.includes(item)).concat(arr2).sort((a, b) => a - b)
  }

  function capitalize(s){
    const ar= s.split("").map((a,i) => i % 2 === 0 ? a.toUpperCase() : a ).join("")
    const ar2= s.split("").map((a,i) => i % 2 !== 0 ? a.toUpperCase() : a ).join("")  
    return [ar, ar2]
  };

  const auth ={
    login() {
      console.log("logged");
    }
  }