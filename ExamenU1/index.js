const televisor = {
    power: false,
    Volumen: 3,
    Canal: 7,
    mutear: false
  };
  
  function power() {
    if (televisor.power) {
        televisor.power = false;
        televisor.Volumen = 3;
        televisor.Canal = 7;
        televisor.mutear = false;
      console.log("tele apagada");
    } else {
        televisor.power = true;
      console.log("tele encendida");
    }
    return televisor; // Devuelve el objeto tele
  }
  
  function subirVolumen() {
    if (televisor.power) {
      if (televisor.Volumen >= 10) {
        console.log("ya es todo el nivel de la tele");
        televisor.Volumen = 10;
      } else {
        var v = televisor.Volumen;
        v = v + 1;
        televisor.Volumen = v;
        console.log(televisor);
      }
    } else {
      console.log("enciende la tele papito");
    }
    return televisor; // Devuelve el objeto tele
  }
  
  function bajarVolumen() {
    if (televisor.power) {
      if (televisor.Volumen <= 1) {
        console.log("1 es el volumen mínimo");
        televisor.Volumen = 1;
        console.log(televisor);
      } else {
        var v = televisor.Volumen;
        v = v - 1;
        televisor.Volumen = v;
        console.log(televisor);
      }
    } else {
      console.log("primero encienda la tele");
    }
    return televisor; // Devuelve el objeto tele
  }
  
  function subirCanal() {
    if (televisor.power) {
      if (televisor.Canal >= 100) {
        console.log("el canal máximo es 100");
        televisor.Canal = 100;
      } else {
        var c = televisor.Canal;
        c = c + 1;
        televisor.Canal = c;
        console.log(televisor);
      }
    } else {
      console.log("encienda la tele");
    }
    return televisor; // Devuelve el objeto tele
  }
  
  function bajarCanal() {
    if (televisor.power) {
      if (televisor.Canal <= 1) {
        console.log("el canal mínimo es 1");
        televisor.Canal = 1;
        console.log(televisor);
      } else {
        var c = televisor.Canal;
        c = c - 1;
        televisor.Canal = c;
        console.log(televisor);
      }
    } else {
      console.log("enciende la tele");
    }
    return televisor; // Devuelve el objeto tele
  }
  
  function mutear() {
    if (televisor.power) {
      if (televisor.mutear) {
        televisor.mutear = false;
        televisor.Volumen = 0;
        console.log(televisor);
        console.log("tele con sonido");
      } else {
        televisor.mutear = true;
        console.log("tele muteada");
        console.log(televisor);
      }
    } else {
      console.log("enciende la tele primero");
    }
    return televisor; // Devuelve el objeto tele
  }
  