// Dictionnaire des tâches
let tasks = new Map();

// Classe des tâches
class Task {
  constructor(text) {
    this.text = text;
    this.isDone = false;
  }
}

// Boutons
const buttonRubish = '<button class="btn-small btn-rubish">Supprimer</button>';
const buttonsDone = `${buttonRubish}<button class="btn-small done">Terminer</button>`;
const buttonsOngoing = `${buttonsDone}<button class="btn-small ongoing">En Cours</button>`;

// Ajoute une ligne de tableau
const createLine = (text, done) => {
  // Création TR
  const tr = document.createElement("tr");
  
  // Création premier TD avec le texte
  let td = document.createElement("td");
  td.innerHTML = done ? `<del>${text}</del>` : text;
  tr.appendChild(td);
  
  // Création second TD avec les boutons
  td = document.createElement("td");
  td.innerHTML = done ? buttonsDone : buttonsOngoing;
  tr.appendChild(td);
  
  // Retour du TR
  return tr;
};

// Sauvegarde en local storage
const setStorage = () => {
  localStorage.setItem("TASKS", JSON.stringify(Array.from(tasks)));
};

// Ajout d'une tâche
document.querySelector("input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // On ajoute la tâche dans le dictionnaire
    const newTask = new Task(e.target.value);
    tasks.set(e.target.value, newTask);
    // On ajoute la ligne dans le tableau
    document.querySelector("tbody").appendChild(createLine(e.target.value, false));
    // Actualisation du local storage
    setStorage();
    e.target.value = ''; // Clear input field after adding task
  }
});

// Click dans la liste des tâches
document.querySelector("table").addEventListener("click", (e) => {
  // On a cliqué sur un bouton
  if (e.target.matches("button")) {
    const taskText = e.target.parentNode.parentNode.firstChild.textContent;
    const task = tasks.get(taskText);
    // Suppression d'une tâche
    if (e.target.matches(".btn-rubish")) {
      // Suppression dans le dictionnaire
      tasks.delete(taskText);
      // Suppression dans le DOM
      e.target.parentNode.parentNode.remove();
    } else {
      // Toggle task completion
      task.isDone = !task.isDone;
      // Actualiser le style
      const tableRow = e.target.parentNode.parentNode;
      tableRow.replaceWith(createLine(taskText, task.isDone));
    }
    // Actualisation du local storage
    setStorage();
  }
});

// Chargement de la page
window.addEventListener("load", () => {
  // Récupération du local storage
  const storage = JSON.parse(localStorage.getItem("TASKS"));
  if (storage) {
    // Création du dictionnaire
    tasks = new Map(storage);
    // Rafraîchissement de la liste
    const tbody = document.createElement("tbody");
    storage.map(([text, task]) =>
      tbody.appendChild(createLine(text, task.isDone))
    );
    document.querySelector("tbody").replaceWith(tbody);
  }
});

//En résumé, ce code écoute les frappes au clavier dans un champ <input>, et lorsque l'utilisateur appuie sur "Entrée", il ajoute la valeur saisie comme une nouvelle tâche dans un objet tasks, crée une nouvelle ligne dans un tableau représentant cette tâche, puis met à jour le stockage local avec la liste mise à jour des tâches.
