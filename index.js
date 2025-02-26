// Code your solutions in this file

function writeCards(array, event){
    const messages = [];
    for (let i = 0; i < array.length; i++){
        messages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(number){
    let i = 0;
    while(i <= number){
        console.log(number);
        number--;
    }
}