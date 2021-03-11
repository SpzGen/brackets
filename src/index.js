module.exports = function check(str, bracketsConfig) {
  let temp = "";
  for (let y = bracketsConfig.length + 1; y > 0; y--) {
      for (let i = 0; i < bracketsConfig.length; i++) {
          for (let item of bracketsConfig[i]) {
              temp += item;
          }
          while (str.includes(temp)) {
              str = str.replace(temp, "");
          }
          temp = "";
      } 
  }
  return ((str.length === 0) ?  true :  false);
};