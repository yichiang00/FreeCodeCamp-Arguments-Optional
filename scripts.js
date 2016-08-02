
function addTogether() {
  console.log(arguments[3]);
var number = arguments[0];
if(arguments.length===2&&!isNaN(number)&&!isNaN(arguments[1])&&typeof number==="number"&& typeof arguments[1]==="number")
  {
  return arguments[0]+arguments[1];

  }else if(!isNaN(number)&&arguments[1]===undefined)
    {
      var add=function(n)
      {
        if(typeof n==="number"&&typeof number==="number")
        return number+n;
      };
      return add;
    }


}

addTogether(2)([3]);
