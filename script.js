function getValue(param){
    let input = document.getElementById("calculator-screen").value;    
    let number = parseInt(document.getElementById("number" + param).value);    

    if(input==='0'){
        document.getElementById("calculator-screen").value = number        
    } else {
        document.getElementById("calculator-screen").value += number
    }
}

function ac(){
    document.getElementById('calculator-screen').value = '0'
}

function calculate(){
    let total = eval(document.getElementById("calculator-screen").value)    
    document.getElementById("calculator-screen").value = total
}