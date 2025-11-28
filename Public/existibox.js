// ============================
// SIDEBAR ACTIVE ITEM SWITCH
// ============================
const sidebarItems = document.querySelectorAll(".sidebar ul li");

sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    sidebarItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});


// ============================
// ADD BOX POPUP TOGGLE
// ============================

// Create popup HTML dynamically
const popupHTML = `
<div class="popup-overlay" id="popup">
    <div class="popup-box">
        <h3>Create New Box</h3>
        <input type="text" placeholder="Enter Box Name" id="newBoxName">
        
        <div class="popup-actions">
            <button id="cancelPopup">Cancel</button>
            <button id="createPopup">Create</button>
        </div>
    </div>
</div>
`;
document.body.insertAdjacentHTML("beforeend", popupHTML);

// Select Elements
const popup = document.getElementById("popup");
const addBtn = document.querySelector(".add-box-btn");
const cancelBtn = document.getElementById("cancelPopup");
const createBtn = document.getElementById("createPopup");
const boxList = document.querySelector(".box-list");


// Open Popup
addBtn.addEventListener("click", () => {
  popup.classList.add("show");
});

// Close Popup
cancelBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});

// Create New Box Card
createBtn.addEventListener("click", () => {
  let boxName = document.getElementById("newBoxName").value.trim();
  if (boxName === "") return;

  // Create new card
  const newCard = document.createElement("div");
  newCard.classList.add("exist-box-card");
  newCard.innerHTML = `
      <div class="box-content">
          <div class="line">${boxName}</div>
      </div>
  `;

  // Add click animation to the new line
  newCard.querySelector(".line").addEventListener("click", lineClickEffect);

  boxList.appendChild(newCard);

  // Reset and close
  document.getElementById("newBoxName").value = "";
  popup.classList.remove("show");
});


// ============================
// LINE CLICK EFFECT
// ============================
const lines = document.querySelectorAll(".line");

function lineClickEffect() {
  this.classList.add("clicked");
  setTimeout(() => {
    this.classList.remove("clicked");
  }, 300);
}

lines.forEach(line => {
  line.addEventListener("click", lineClickEffect);
});


// ============================
// CARD HOVER ANIMATION
// ============================
const cards = document.querySelectorAll(".exist-box-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => card.classList.add("hover"));
  card.addEventListener("mouseleave", () => card.classList.remove("hover"));
});
