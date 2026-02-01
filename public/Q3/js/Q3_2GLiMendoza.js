function confirmSubmit() { 
    return confirm("Are you sure you want to submit the form?"); 
} 

function confirmReset() { 
    return confirm("Are you sure you want to reset the form?"); 
} 

function checkEmpty(event) { 
    if (event.target.value.trim() === "") { 
        event.target.classList.add("missing"); 
    } 
    else { 
        event.target.classList.remove("missing"); 
    } 
}