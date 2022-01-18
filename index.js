
//timer function
const timerfn=()=>{
    let time=01;
    let timer1=setInterval(() => {
        console.log(time)
        newtime="00 : "+ time;
        time++;
        document.getElementById('timer').innerText=newtime;
        if(time==21){
            clearInterval(timer1);
            document.getElementById('msg').innerText="You ran out of time"
            gameend();
        }

        //function to stop interval
        const stop=_=>{ 
            clearInterval(timer1);
        }

        //calling stop interval function if answer is clicked
        let ansclicked=document.getElementsByClassName('ans')
        for (click of ansclicked){
            addEventListener('click',stop)
            console.log(click)
        }

    }, 1000)
}

//functions to update the question
const question1=_=>{
    document.getElementById('question1').style.display='block';
    timerfn();
    const halfopt=_=>{
        let a='option2';
        let b='option3';
        half(a,b);
    }
    document.getElementById('half').addEventListener('click',halfopt)
}
const question2=_=>{
    document.getElementById('question1').style.display='none';
    document.getElementById('question2').style.display='block'
    const halfopt=_=>{
        let a='option1q2';
        let b='option4q2';
        half(a,b);
    }
    document.getElementById('half').addEventListener('click',halfopt)
}
const question3=_=>{
    document.getElementById('question2').style.display='none';
    document.getElementById('question3').style.display='block';
    const halfopt=_=>{
        let a='option2q3';
        let b='option4q3';
        half(a,b);
    }
    document.getElementById('half').addEventListener('click',halfopt)
}
const question4=_=>{
    document.getElementById('question3').style.display='none';
    document.getElementById('question4').style.display='block';
    const halfopt=_=>{
        let a='option1q4';
        let b='option3q4';
        half(a,b);
    }
    document.getElementById('half').addEventListener('click',halfopt)
}
const question5=_=>{
    document.getElementById('question4').style.display='none';
    document.getElementById('question5').style.display='block';
    const halfopt=_=>{
        let a='option1q5';
        let b='option4q5';
        half(a,b);
    }
    document.getElementById('half').addEventListener('click',halfopt)
}


//function to end game if wrong answer is clicked
const gameend=_=>{
    document.getElementById('gamescreen').style.display='none';
    document.getElementById('restart').style.display='flex';
}

//CHECK OPTION A OF QUESTION 1
const checkAq1=_=>{
    document.getElementById('option1').classList.add('trueanswer');
    document.getElementById('option2').classList.add('notclicked');
    document.getElementById('option3').classList.add('notclicked');
    document.getElementById('option4').classList.add('notclicked');
    setTimeout(question2,1500);
    timerfn();
    
}

//CHECK OPTION B OF QUESTION 1
const checkBq1=_=>{
    document.getElementById('option2').classList.add('fail');
    document.getElementById('option3').classList.add('notclicked');
    document.getElementById('option4').classList.add('notclicked');
    document.getElementById('option1').classList.add('trueanswer');
    setTimeout(gameend,2500);
}

//CHECK OPTION C OF QUESTION 1
const checkCq1=_=>{
    document.getElementById('option3').classList.add('fail');
    document.getElementById('option2').classList.add('notclicked');
    document.getElementById('option4').classList.add('notclicked');
    document.getElementById('option1').classList.add('trueanswer');
    setTimeout(gameend,2500);
}

//CHECK OPTION D OF QUESTION 1
const checkDq1=_=>{
    document.getElementById('option4').classList.add('fail');
    document.getElementById('option2').classList.add('notclicked');
    document.getElementById('option3').classList.add('notclicked');
    document.getElementById('option1').classList.add('trueanswer');
    setTimeout(gameend,2500);
}

//question 1 answers event listner
document.getElementById('option1').addEventListener('click',checkAq1)
document.getElementById('option2').addEventListener('click',checkBq1)
document.getElementById('option3').addEventListener('click',checkCq1)
document.getElementById('option4').addEventListener('click',checkDq1)


// question 2 answers check

//CHECK OPTION A OF QUESTION 2
const checkAq2=_=>{
    document.getElementById('option1q2').classList.add('fail');
    document.getElementById('option2q2').classList.add('trueanswer');
    document.getElementById('option3q2').classList.add('notclicked');
    document.getElementById('option4q2').classList.add('notclicked');
    setTimeout(gameend,2500);    
}

//CHECK OPTION B OF QUESTION 2
const checkBq2=_=>{
    document.getElementById('option1q2').classList.add('notclicked');
    document.getElementById('option2q2').classList.add('trueanswer');
    document.getElementById('option3q2').classList.add('notclicked');
    document.getElementById('option4q2').classList.add('notclicked');
    setTimeout(question3,1500);
    timerfn();    
}

//CHECK OPTION C OF QUESTION 2
const checkCq2=_=>{
    document.getElementById('option1q2').classList.add('notclicked');
    document.getElementById('option2q2').classList.add('trueanswer');
    document.getElementById('option3q2').classList.add('fail');
    document.getElementById('option4q2').classList.add('notclicked');
    setTimeout(gameend,2500);    
}

//CHECK OPTION D OF QUESTION 2
const checkDq2=_=>{
    document.getElementById('option1q2').classList.add('notclicked');
    document.getElementById('option2q2').classList.add('trueanswer');
    document.getElementById('option3q2').classList.add('notclicked');
    document.getElementById('option4q2').classList.add('fail');
    setTimeout(gameend,2500);    
}

//question 2 answers event listner
document.getElementById('option1q2').addEventListener('click',checkAq2)
document.getElementById('option2q2').addEventListener('click',checkBq2)
document.getElementById('option3q2').addEventListener('click',checkCq2)
document.getElementById('option4q2').addEventListener('click',checkDq2)

// question 3 answers check

//CHECK OPTION A OF QUESTION 3
const checkAq3=_=>{
    document.getElementById('option1q3').classList.add('trueanswer');
    document.getElementById('option2q3').classList.add('notclicked');
    document.getElementById('option3q3').classList.add('notclicked');
    document.getElementById('option4q3').classList.add('notclicked');
    setTimeout(question4,1500);
    timerfn();    
}

//CHECK OPTION B OF QUESTION 3
const checkBq3=_=>{
    document.getElementById('option1q3').classList.add('trueanswer');
    document.getElementById('option2q3').classList.add('fail');
    document.getElementById('option3q3').classList.add('notclicked');
    document.getElementById('option4q3').classList.add('notclicked');
    setTimeout(gameend,2500);    
}

//CHECK OPTION C OF QUESTION 3
const checkCq3=_=>{
    document.getElementById('option1q3').classList.add('trueanswer');
    document.getElementById('option2q3').classList.add('notclicked');
    document.getElementById('option3q3').classList.add('fail');
    document.getElementById('option4q3').classList.add('notclicked');
    setTimeout(gameend,2500);    
}

//CHECK OPTION D OF QUESTION 3
const checkDq3=_=>{
    document.getElementById('option1q3').classList.add('trueanswer');
    document.getElementById('option2q3').classList.add('notclicked');
    document.getElementById('option3q3').classList.add('notclicked');
    document.getElementById('option4q3').classList.add('fail');
    setTimeout(gameend,2500);    
}


//question 3 answers event listner
document.getElementById('option1q3').addEventListener('click',checkAq3)
document.getElementById('option2q3').addEventListener('click',checkBq3)
document.getElementById('option3q3').addEventListener('click',checkCq3)
document.getElementById('option4q3').addEventListener('click',checkDq3)


// question 4 answers check

//CHECK OPTION A OF QUESTION 4
const checkAq4=_=>{
    document.getElementById('option1q4').classList.add('fail');
    document.getElementById('option2q4').classList.add('notclicked');
    document.getElementById('option3q4').classList.add('notclicked');
    document.getElementById('option4q4').classList.add('trueanswer');
    setTimeout(gameend,2500);
}

//CHECK OPTION B OF QUESTION 4
const checkBq4=_=>{
    document.getElementById('option1q4').classList.add('notclicked');
    document.getElementById('option2q4').classList.add('fail');
    document.getElementById('option3q4').classList.add('notclicked');
    document.getElementById('option4q4').classList.add('trueanswer');
    setTimeout(gameend,2500);    
}

//CHECK OPTION C OF QUESTION 4
const checkCq4=_=>{
    document.getElementById('option1q4').classList.add('notclicked');
    document.getElementById('option2q4').classList.add('notclicked');
    document.getElementById('option3q4').classList.add('fail');
    document.getElementById('option4q4').classList.add('trueanswer');
    setTimeout(gameend,2500);    
}

//CHECK OPTION D OF QUESTION 4
const checkDq4=_=>{
    document.getElementById('option1q4').classList.add('notclicked');
    document.getElementById('option2q4').classList.add('notclicked');
    document.getElementById('option3q4').classList.add('notclicked');
    document.getElementById('option4q4').classList.add('trueanswer');
    setTimeout(question5,1500);
    timerfn();    
}


//question 4 answers event listner
document.getElementById('option1q4').addEventListener('click',checkAq4)
document.getElementById('option2q4').addEventListener('click',checkBq4)
document.getElementById('option3q4').addEventListener('click',checkCq4)
document.getElementById('option4q4').addEventListener('click',checkDq4)



// question 5 answers check

//CHECK OPTION A OF QUESTION 5
const checkAq5=_=>{
    document.getElementById('option1q5').classList.add('fail');
    document.getElementById('option2q5').classList.add('trueanswer');
    document.getElementById('option4q5').classList.add('notclicked');
    document.getElementById('option3q5').classList.add('notclicked');
    setTimeout(gameend,2500);
}

//CHECK OPTION B OF QUESTION 5
const checkBq5=_=>{
    document.getElementById('option1q5').classList.add('notclicked');
    document.getElementById('option2q5').classList.add('trueanswer');
    document.getElementById('option3q5').classList.add('notclicked');
    document.getElementById('option4q5').classList.add('notclicked');
    setTimeout(question5,1500);
    timerfn();    
}

//CHECK OPTION C OF QUESTION 5
const checkCq5=_=>{
    document.getElementById('option1q5').classList.add('notclicked');
    document.getElementById('option2q5').classList.add('trueanswer');
    document.getElementById('option4q5').classList.add('fail');
    document.getElementById('option3q5').classList.add('notclicked');
    setTimeout(gameend,2500);
}

//CHECK OPTION D OF QUESTION 5
const checkDq5=_=>{
    document.getElementById('option1q5').classList.add('notclicked');
    document.getElementById('option2q5').classList.add('trueanswer');
    document.getElementById('option4q5').classList.add('notclicked');
    document.getElementById('option3q5').classList.add('fail');
    setTimeout(gameend,2500);
}

//question 5 answers event listner
document.getElementById('option1q5').addEventListener('click',checkAq5)
document.getElementById('option2q5').addEventListener('click',checkBq5)
document.getElementById('option3q5').addEventListener('click',checkCq5)
document.getElementById('option4q5').addEventListener('click',checkDq5)


//lifeline 50:50 usage timer
const half=(a,b)=>{
    document.getElementById(a).classList.add('half')
    document.getElementById(b).classList.add('half')
    document.getElementById('half').style.display='none'
    document.getElementById('used').style.display='flex'
}


//event listner to start game
document.getElementById('start').addEventListener('click',_=>{
    document.getElementById('startgame').style.display='none';
    document.getElementById('blacklayer').style.display='none';
    let ansclass=document.querySelectorAll('.ans');
    for(ans of ansclass){
        ans.style.display='block'
    }
    let queclass=document.querySelectorAll('.questions')
    for(que of queclass){
        que.style.display='flex'
    }
    question1();
})

//event listner to reset game
document.getElementById('resetGame').addEventListener('click',_=>{
    window.location.reload();
})
