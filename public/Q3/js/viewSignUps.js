document.addEventListener("DOMContentLoaded", () => {
    loadSignups("ALL");

    document.getElementById("clubFilter").addEventListener("change", (e) => {
        loadSignups(e.target.value);
    });
});

function loadSignups(filterClub) {
    const tableBody = document.querySelector("#signupTable tbody");
    const messageDiv = document.getElementById("message");
    const totalText = document.getElementById("total");

    tableBody.innerHTML = "";
    messageDiv.innerHTML = "";

    let signups = localStorage.getItem("signups");

    if (!signups) {
        messageDiv.innerHTML = "<p>No sign-ups found.</p>";
        totalText.textContent = "Total Sign-ups: 0";
        return;
    }

    signups = JSON.parse(signups);

    let filtered = signups;
    if (filterClub !== "ALL") {
        filtered = signups.filter(s => s.club === filterClub);
    }

    if (filtered.length === 0) {
        messageDiv.innerHTML = "<p>No sign-ups for this club.</p>";
        totalText.textContent = "Total Sign-ups: 0";
        return;
    }

    filtered.forEach(s => {
        const row = document.createElement("tr");

        const gradeMap = {
            g7: "Grade 7",
            g8: "Grade 8",
            g9: "Grade 9",
            g10: "Grade 10",
            g11: "Grade 11",
            g12: "Grade 12"
        };

        const clubMap = {
            bake_club: "Bake Club",
            celluloid: "Celluloid",
            mun: "MUN",
            likha: "Likha",
            volant: "Volant",
            sightlines: "Sightlines",
            kamalayan: "Kamalayan"
        };

        row.innerHTML = `
            <td>${clubMap[s.club] || s.club}</td>
            <td>${s.studentID}</td>
            <td>${s.fullName}</td>
            <td>${gradeMap[s.grade] || s.grade}</td>
            <td>${s.email}</td>
            <td>${s.mobile}</td>
            <td>${s.status}</td>
        `;


        tableBody.appendChild(row);
    });

    totalText.textContent = `Total Sign-ups: ${filtered.length}`;
}
