console.log('ver resultado');

let contenedor_resultado = document.querySelector('#contenedor_resultado');
console.log(contenedor_resultado);
let resultado = document.createElement('div');
resultado.classList.add('resultado');
let cuenta = document.createElement('div');
cuenta.classList.add('resultado');

const optener = () => {
  let propina;
  let opcion1 = document.getElementById('opcion1').checked;
  let opcion2 = document.getElementById('opcion2').checked;
  let opcion3 = document.getElementById('opcion3').checked;

  if (opcion1 == true) {
    propina = 1.1;
  }
  if (opcion2 == true) {
    propina= 1.2;
  }
  if (opcion3 == true) {
    propina= 1.3;
  }

  let valor_calculo = document.getElementById('valor_consumo').value;
  let valor_cliente = document.getElementById('valor_usuarios').value;

  if ((valor_calculo > 0) & (valor_cliente > 0)) {
    console.log(valor_calculo * propina);
    resultado.innerText = `Valor con propina es $${Math.round(
      valor_calculo * propina
    )}`;
    cuenta.innerText = `A pagar por cliente es $${Math.round(
      (valor_calculo * propina) / valor_cliente
    )}`;
    contenedor_resultado.appendChild(resultado);
    contenedor_resultado.appendChild(cuenta);
  }
};
