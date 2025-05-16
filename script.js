function saveSelection() {
  const classe = document.getElementById("classe").value;
  const matiere = document.getElementById("matiere").value;
  const visite = {
    classe: classe,
    matiere: matiere,
    date: new Date().toLocaleString()
  };

  let visites = JSON.parse(localStorage.getItem("visites")) || [];
  visites.push(visite);
  localStorage.setItem("visites", JSON.stringify(visites));
  alert("Merci ! Tes choix ont été enregistrés.");
}