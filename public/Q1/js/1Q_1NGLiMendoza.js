function checkInput(){
    let age = document.getElementById("age").value;
    let maxAge = document.getElementById("maxAge").value;
    let numPerDay = document.getElementById("numPerDay").value;
    let resultHere = (Number(numPerDay) * 365) * (Number(maxAge) - Number(age));
    document.getElementById("resultHere").innerHTML = `<b> You will need ${resultHere} to last you until the ripe old age of ${maxAge} </b>`;
}