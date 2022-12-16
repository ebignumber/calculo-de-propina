console.log('ver resultado');

const optener = () => {
  let valor_calculo = document.getElementById('valor_consumo').value;
  if (valor_calculo > 0) {
    console.log(valor_calculo*1.10);
  }
};
