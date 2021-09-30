function getHistory(){
   return  document.getElementById('history-value').innerText
}
// alert(getHistory());
function printHistory(num){
    document.getElementById('history-value').innerText=num;
}
function printOutput(){
    return document.getElementById('output-value').innerText;
}
function printOutput(num){
    document.getElementById('output-value').innerText=num;
}
printOutput("222");
printHistory("3+4");