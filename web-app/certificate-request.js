const certificateType = document.getElementById("certificateType");
const requirementsContainer = document.getElementById("requirementsContainer");
const submitBtn = document.getElementById("submitBtn");

const requirementsMap = {
    clearance: [
        "Valid Government-Issued ID",
        "Proof of Residency",
        "Community Tax Certificate"
    ],
    residency: [
        "Valid Government-Issued ID",
        "Proof of Residency",
        "Community Tax Certificate"
    ],
    indigency: [
        "Valid Government-Issued ID",
        "Proof of Indigency"
    ]
};

function renderRequirements(type) {
    requirementsContainer.innerHTML = "";

    if (!requirementsMap[type]) {
        submitBtn.disabled = true;
        submitBtn.classList.remove("enabled");
        return;
    }

    requirementsMap[type].forEach(req => {
        const div = document.createElement("div");
        div.classList.add("requirement");

        div.innerHTML = `
            <label>${req} (Required)</label>
            <input type="file" class="req-file" accept="image/*" required>
        `;

        requirementsContainer.appendChild(div);
    });

    attachFileListeners();
}

function attachFileListeners() {
    const files = document.querySelectorAll(".req-file");

    function checkFiles() {
        let complete = true;
        files.forEach(file => {
            if (!file.files.length) complete = false;
        });

        submitBtn.disabled = !complete;
        submitBtn.classList.toggle("enabled", complete);
    }

    files.forEach(file => file.addEventListener("change", checkFiles));
}

certificateType.addEventListener("change", function () {
    renderRequirements(this.value);
});
