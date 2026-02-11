const form = document.getElementById("feedbackForm");
const reviews = document.getElementById("reviews");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value || "Anonymous";
    const skin = document.getElementById("skinType").value || "N/A";
    const acne = document.getElementById("acne").value || "N/A";
    const text = document.getElementById("review").value;

    if (!text) {
        alert("Please write a review");
        return;
    }

    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
        <strong>${name}</strong>
        <span>Skin Type: ${skin} | Reduced Acne: ${acne}</span>
        <p>${text}</p>
    `;

    reviews.appendChild(card);
    form.reset();
});
