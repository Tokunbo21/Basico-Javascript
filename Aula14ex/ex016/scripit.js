function calcular(){
  var ini = document.querySelector('input#ini')
  var fim = document.getElementById('fim')
  var pas = document.getElementById('pas')
  var res = document.getElementById("res")

  if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
    window.alert('erro falta dado')
  }else{
    res.innerHTML = 'Contando: '
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)

    if(i <f){
       for(var c = i;c <=f; c+=p){
     
    }
    
    } else{
      for(var c = i;c >= f; c-=p){
         res.innerHTML +=` ${c}  \u{1F449}`
      }
      
    }
      res.innerHTML +=`\u{1F3C1}`
   
  }
}