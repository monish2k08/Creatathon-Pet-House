// ADVANCED PET DATA
const pets = [
  {
    name: "Buddy",
    type: "dog",
    age: "young",
    gender: "male",
    img: "https://images.unsplash.com/photo-1507149833265-60c372daea22"
  },
  {
    name: "Luna",
    type: "cat",
    age: "adult",
    gender: "female",
    img: "https://images.unsplash.com/photo-1595433562696-a8b1cb8c037b"
  },
  {
    name: "Snowball",
    type: "rabbit",
    age: "young",
    gender: "female",
    img: "https://images.unsplash.com/photo-1618828665345-b3bbbd6f66a7"
  },
  {
    name: "Rocky",
    type: "dog",
    age: "adult",
    gender: "male",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    img: "https://images.unsplash.com/photo-1552053831-71594a27632d"
  }
];

// LOAD PET CARDS
function loadPets() {
  const type = typeFilter.value;
  const age = ageFilter.value;
  const gender = genderFilter.value;
  const search = searchInput.value.toLowerCase();

  petContainer.innerHTML = "";

  pets.forEach(p => {
    if (
      (type === "all" || p.type === type) &&
      (age === "all" || p.age === age) &&
      (gender === "all" || p.gender === gender) &&
      p.name.toLowerCase().includes(search)
    ) {
      petContainer.innerHTML += `
        <div class="pet-card" onclick="openPetModal('${p.name}')">
          <img src="${p.img}">
          <h3>${p.name}</h3>
          <p>Type: ${p.type}</p>
          <p>Age: ${p.age}</p>
          <p>Gender: ${p.gender}</p>
        </div>
      `;
    }
  });
}

loadPets();
// SHOW LOADER INITIALLY
document.getElementById("pawLoader").style.display = "block";

// HIDE LOADER WHEN PAGE FULLY LOADED
window.addEventListener("load", () => {
  const loader = document.getElementById("pawLoader");

  loader.classList.add("hide");

  setTimeout(() => {
    loader.style.display = "none";
  }, 600); // matches CSS fade duration
});

// EVENT LISTENERS
typeFilter.onchange = loadPets;
ageFilter.onchange = loadPets;
genderFilter.onchange = loadPets;
searchInput.oninput = loadPets;

// MODAL HANDLER
function openPetModal(name) {
  const pet = pets.find(p => p.name === name);
  modal.style.display = "flex";

  modalName.innerHTML = pet.name;
  modalInfo.innerHTML = `${pet.type} • ${pet.age} • ${pet.gender}`;

  modalImg.src = pet.img;

  if (pet.video) {
    modalVideo.style.display = "block";
    modalVideo.src = pet.video;
  } else {
    modalVideo.style.display = "none";
  }
}

closeModal.onclick = () => modal.style.display = "none";
window.onclick = e => e.target === modal ? modal.style.display = "none" : "";

// DARK MODE
darkToggle.onclick = () => document.body.classList.toggle("dark");
