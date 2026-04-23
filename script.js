// ---------- FILTERS ----------
function applyFilters() {
    let type = document.getElementById("typeFilter").value;
    let age = document.getElementById("ageFilter").value;

    let pets = document.querySelectorAll(".pet");

    pets.forEach(pet => {
        let t = pet.dataset.type;
        let a = parseInt(pet.dataset.age);
        let show = true;

        if (type !== "all" && t !== type) show = false;

        if (age !== "all") {
            if (age == "3" && a < 3) show = false;
            else if (a != age && age != "3") show = false;
        }

        pet.style.display = show ? "block" : "none";
    });
}


// ---------- FORM VALIDATION ----------
document.getElementById("adoptForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pet = document.getElementById("petName").value.trim();
    let reason = document.getElementById("reason").value.trim();
    let msg = document.getElementById("formMsg");

    if (name === "" || email === "" || pet === "" || reason === "") {
        msg.style.color = "red";
        msg.textContent = "Please fill all fields correctly!";
        return;
    }

    msg.style.color = "green";
    msg.textContent = "Your adoption request was submitted successfully! ❤️";
});


// ---------- DARK MODE ----------
document.getElementById("themeBtn").onclick = function () {
    document.body.classList.toggle("dark");

    this.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};
