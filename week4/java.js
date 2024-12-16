document.getElementById('transferForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const senderAccount = document.getElementById('senderAccount').value;
    const receiverAccount = document.getElementById('receiverAccount').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const feedbackMessage = document.getElementById('feedbackMessage');
  
    // Reset feedback message
    feedbackMessage.textContent = '';
    feedbackMessage.className = '';
  
    // Mock saldo check (voor deze demo hardcoded)
    const currentBalance = 500; // Huidig saldo
  
    // Validatie
    if (!receiverAccount) {
      feedbackMessage.textContent = 'Vul een geldig rekeningnummer in.';
      feedbackMessage.className = 'error';
      return;
    }
  
    if (isNaN(amount) || amount <= 0) {
      feedbackMessage.textContent = 'Vul een geldig bedrag in.';
      feedbackMessage.className = 'error';
      return;
    }
  
    if (amount > currentBalance) {
      feedbackMessage.textContent = 'Onvoldoende saldo om deze transactie uit te voeren.';
      feedbackMessage.className = 'error';
      return;
    }
  
    // Mock transactie (voor deze demo direct succes)
    feedbackMessage.textContent = `Succes! €${amount.toFixed(2)} is overgeschreven naar rekening ${receiverAccount}.`;
    feedbackMessage.className = 'success';
  
    // Optioneel: Toon een afbeelding bij succes
    const successImage = document.createElement('img');
    successImage.src = 'https://via.placeholder.com/150/28a745/ffffff?text=✔';
    successImage.alt = 'Succes';
    successImage.style.marginTop = '15px';
    feedbackMessage.appendChild(successImage);
  });
  