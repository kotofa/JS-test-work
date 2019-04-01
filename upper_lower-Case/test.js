/*
     * @param string val
     * @param string reg ("up"/"down")
     * @param boolean reverse
     * @return string
     */
function foo(val, reg, reverse=false){
  
  let firsletter = val.slice(0,1);
  regist(val, reg);
  let total = regist(val, reg);
  function regist(val, reg){
    let valNew ="";
    for(let i=0; i<val.length;i++){
      let code = val[i].charCodeAt(0)
      if(reg == "up"){
        if(code >=1072 && code <= 1103 || code >=97 && code <= 122){
        code = code - 32;
        };
      }else{
        if(code >=1040 && code <= 1071 || code >=65 && code <= 90){
        code = code + 32;
        };
      };
      let letter = String.fromCharCode(code);
      valNew += letter
    };
    return valNew
  }
  if(reverse){
    if(reg == "up"){
      reg = "down"
    }else{
      reg = "up"
    }
    let fl = regist(firsletter,reg);
    total = total.replace(total[0],fl);
  }
  return total;
};

console.log(foo("абвгд","down",true));

// var t0 = performance.now();
// var text = foo("абвгд","down",true);
// var t1 = performance.now();
// console.log('Took', (t1 - t0).toFixed(4), 'milliseconds');
