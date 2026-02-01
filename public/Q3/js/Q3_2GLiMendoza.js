function confirmReset() {
    return confirm("Are you sure you want to reset the form?");
}

function saveSignup(event) {
    event.preventDefault();

    if (!confirm("Are you sure you want to submit the form?")) {
        return false;
    }

    const form = event.target;

    const signupData = {
        studentID: form.StudentID.value,
        fullName: form.FullName.value,
        birthday: form.Birthday.value,
        email: form.EmailAddress.value,
        mobile: form.MobilePhone.value,
        grade: form.GradeLevel.value,
        status: form.InternExtern.value,
        club: form.OrganizationClub.value,
        reason: form.ReasonJoin.value
    };

    let signups = localStorage.getItem("signups");

    if (signups) {
        signups = JSON.parse(signups);
    } else {
        signups = [];
    }

    signups.push(signupData);

    localStorage.setItem("signups", JSON.stringify(signups));

    alert("Signup saved successfully!");
    form.reset();
    return false;
}

function checkEmpty(event) {
    if (event.target.value.trim() === "") {
        event.target.classList.add("missing");
    } else {
        event.target.classList.remove("missing");
    }
}

function goToView() {
    window.location.href = "viewSignUps.html";
}