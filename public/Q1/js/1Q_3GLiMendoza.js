var dNumber = Math.floor(Math.random() * 100) + 1; 

    function checkIt() {
           
        let guess = document.getElementById("numGuess").value;
        let result = document.getElementById("result").value;          
        if (guess > dNumber)
        {
            document.getElementById("result").innerText ='Lower';
        }
        else if (guess < dNumber)
        {
            document.getElementById("result").innerText ='Higher';
        }
        else
        {
            document.getElementById("result").innerText ='You are correct!';
        }
           
    }