function makeLessThen(num) {
    return function lessThen(x) {
        return x < num; 
    }

}

const lessThenNum = makeLessThen(5);