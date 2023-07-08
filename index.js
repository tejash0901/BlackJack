// let first=getRandomCard()
// let second=getRandomCard()
//let sum=first+second

let player={
    name:"Tejash",
    score:250
}


let sum=0
let winner=false
let alive=false
let msg=""
let st=document.getElementById("wel")
let sumEl=document.querySelector("#sum")
let c=document.getElementById("Cards")

let play=document.getElementById("player")
play.textContent=player.name +": $ "+player.score
let totalCards=[]

function renstart(){
    if(sum<=20){
        msg="do u wish to continue?"
    }
    else if(sum===21){
        msg="winner"
        winner=true
    }
    else{
        msg="lost"
        alive=false
    }

    st.textContent=msg
    sumEl.textContent="Sum: "+sum
    c.textContent="Cards:"
    printi()
}

function newcard(){

    if(alive==true && winner==false){
        let card=getRandomCard()
        sum+=card
        totalCards.push(card)
        renstart()
    }

    
}

function printi(){
    for(var i=0;i<totalCards.length;i+=1)
    c.textContent+=totalCards[i]+","
}

function start(){
    alive=true
    let first=getRandomCard()
    let second=getRandomCard()
    sum=first+second
    totalCards.push(first)
    totalCards.push(second)

    renstart()
}

function getRandomCard(){
    return Math.floor(Math.random()*13)+1
}