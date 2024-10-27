document.getElementById('calculate-button').addEventListener('click', function() {
    const distance = parseFloat(document.getElementById('distance').value);
    const transportType = document.getElementById('transport-type').value;
    const resultDiv = document.getElementById('result');
    const costParagraph = document.getElementById('cost');
    const deliveryTimeParagraph = document.getElementById('delivery-time');

    if (!isNaN(distance) && distance > 0) {
        let cost;
        let deliveryTime;

        switch (transportType) {
            case 'carro':
                cost = distance * 1.5; // custo por km
                deliveryTime = distance / 60; // tempo em horas
                break;
            case 'moto':
                cost = distance * 1.0; // custo por km
                deliveryTime = distance / 40; // tempo em horas
                break;
            case 'bicicleta':
                cost = distance * 0.5; // custo por km
                deliveryTime = distance / 15; // tempo em horas
                break;
            default:
                cost = 0;
                deliveryTime = 0;
        }

        costParagraph.innerText = `Custo do Frete: R$ ${cost.toFixed(2)}`;
        deliveryTimeParagraph.innerText = `Tempo de Entrega: ${deliveryTime.toFixed(2)} horas`;

        resultDiv.classList.remove('hidden');
    } else {
        alert("Por favor, insira uma distância válida.");
    }
});
