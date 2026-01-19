function totalMeal() {

    let mp = document.getElementById("price").value;
    let tip = document.getElementById("tip").value;
    let sc = document.getElementById("charge").value;
    let totalCost = (Number(mp) + Number(tip) + Number(sc / 100 * mp));
    let finaltotalCost = totalCost.toFixed(2);
    document.getElementById("totalCost").innerHTML = finaltotalCost;
 
}