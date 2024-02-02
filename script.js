function moverDiv() {
    // Obtém a referência da div
    var div = document.querySelector('.animated-div');

    // Atualiza o estilo da div para mover para fora da tela para cima
    div.style.transform = 'translateY(-100%)';
  }

  function alterarOpacidade() {
    var minhaDiv = document.getElementById("minhaDiv");
  
    if (minhaDiv.style.opacity === "" || minhaDiv.style.opacity === "0") {
      minhaDiv.style.opacity = "1";
    } else {
      minhaDiv.style.opacity = "0";
    }
  }
  

