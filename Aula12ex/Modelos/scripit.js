function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML=`Agora são ${horas} horas`
    
    if( horas >= 0 && horas <=5 ){
        //Madrugada
        img.src = 'Madrugada.jpg'
        document.body.style.background ='rgb(33, 23, 121)'
    }
    else if( horas < 12){
        //Bom dia 
        img.src = 'BomDia.jpg'
        document.body.style.background= 'rgb(95, 233, 238)'
        
    }else if(horas >= 12 && horas < 18){
        //Boa tarde
        img.src = 'BoaTarde.jpg'
        document.body.style.background= 'rgb(126, 128, 224)'
    } else{
        //Boa noite
      img.src ='BoaNoite.jpg'
      document.body.style.background= 'rgb(187, 117, 228)'
    }
}
