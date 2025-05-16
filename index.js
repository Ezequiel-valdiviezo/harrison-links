let flippedCards = 0; // Para contar cuántas cartas han sido volteadas
let selectedCard = null; // Para almacenar la carta seleccionada

function flipImage(index) {
    const card = document.querySelectorAll('.card')[index];

    // Si la carta ya está seleccionada, no hacemos nada
    if (card.classList.contains('selected')) {
        return;
    }

    // Si la carta no está volteada, la volteamos
    if (!card.classList.contains('flipped')) {
        card.classList.add('flipped');
        flippedCards++; // Incrementamos el contador

        // Si todas las cartas han sido volteadas, cambiamos el comportamiento
        if (flippedCards === 8) {
            setSelectableMode();
        }
    } else {
        // Si la carta ya está volteada, la marcamos como seleccionada (efecto visual)
        card.classList.add('selected');

        // Si ya había una carta seleccionada previamente, la desmarcamos
        if (selectedCard && selectedCard !== card) {
            selectedCard.classList.remove('selected');
        }

        // Actualizamos la carta seleccionada
        selectedCard = card;
    }
}

function setSelectableMode() {
    // Cambiamos el comportamiento de las cartas. A partir de aquí, el clic solo selecciona
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Si la carta no está volteada, no hacemos nada
            if (card.classList.contains('flipped') && !card.classList.contains('selected')) {
                // Si ya hay una carta seleccionada, la desmarcamos
                if (selectedCard) {
                    selectedCard.classList.remove('selected');
                }

                // Añadimos el efecto a la carta clickeada
                card.classList.add('selected');

                // Actualizamos la carta seleccionada
                selectedCard = card;
            }
        });
    });
}

// Función para mostrar el modal
function showModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex"; // Muestra el modal
}

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none"; // Oculta el modal
}

// Opcional: Cerrar el modal después de un tiempo
setTimeout(() => {
  closeModal();
}, 5000); // El modal se cerrará automáticamente después de 5 segundos (5000 ms)