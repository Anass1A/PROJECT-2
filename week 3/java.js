document.addEventListener("DOMContentLoaded", () => {
    const rekeningTabel = document.getElementById("rekening-tabel");
    const rekeningForm = document.getElementById("rekening-form");
    const rekeningen = [
      { nummer: "NL01BANK0123456789", saldo: 2500.75 },
      { nummer: "NL02BANK9876543210", saldo: 1800.50 },
    ];
  
    // Functie om de rekeningen te tonen
    function toonRekeningen() {
      rekeningTabel.innerHTML = "";
      rekeningen.forEach((rekening, index) => {
        const rij = document.createElement("tr");
        rij.innerHTML = `
          <td>${rekening.nummer}</td>
          <td>${rekening.saldo.toFixed(2)}</td>
        `;
        rekeningTabel.appendChild(rij);
      });
    }
  
    // Event listener voor het toevoegen van een nieuwe rekening
    rekeningForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const rekeningnummer = document.getElementById("rekeningnummer").value;
      const saldo = parseFloat(document.getElementById("saldo").value);
  
      if (rekeningnummer && !isNaN(saldo)) {
        rekeningen.push({ nummer: rekeningnummer, saldo });
        toonRekeningen();
        rekeningForm.reset();
      }
    });
  
    // Initialiseer dashboard
    toonRekeningen();
  });
  