function flipCard(cardElement) {
  // Si ya tiene la clase "flipped", significa que está de reverso
  if (cardElement.classList.contains('flipped')) {
    const whatsappLink = cardElement.getAttribute('data-whatsapp');
    if (whatsappLink) {
      window.open(whatsappLink, '_blank');
    }
  } else {
    // Si no está girada, simplemente la gira
    cardElement.classList.add('flipped');
  }
}
