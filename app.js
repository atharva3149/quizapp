const questions = [

    {
        'que': 'which of the following is the markup lang',
        'a' : 'HTML',
        'b' : 'PHP',
        'c' : 'CSS',
        'd' : 'PYTHON',
        'correct' : 'a',
    },


    {
        'que': 'when was javascript intoduced',
        'a' : '1995',
        'b' : '1996',
        'c' : '1997',
        'd' : '1993',
        'correct' : 'a',
    },

    {
        'que': 'which language is used for designing the page',
        'a' : 'HTML',
        'b' : 'PHP',
        'c' : 'CSS',
        'd' : 'PYTHON',
        'correct' : 'c',
    }
]

let index = 0;
let total = questions.length;
let right = 0,
wrong = 0;
const quesBox = document.getElementById("quesBox")  
const optionInputs = document.querySelectorAll('.options')


const loadQuestion = () => {
  if(index === total){
    return endQuiz()
  }
    reset();
    const data = questions[index]
  
   quesBox.innerText = ` ${index+1}) ${data.que}`;
optionInputs[0].nextElementSibling.innerText = data.a;
optionInputs[1].nextElementSibling.innerText = data.b;
optionInputs[2].nextElementSibling.innerText = data.c;
optionInputs[3].nextElementSibling.innerText = data.d;

}


const submitquiz = () => {
    const data = questions[index];
    const ans = getanswer()
    if( ans === data.correct){

        right++;

    }
    else{
     wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getanswer = ()  => {
    let answer;
    optionInputs.forEach(
        (input) =>{
            if(input.checked){
            answer = input.value;
          
            }
        }
    )

    return answer;
}

const reset = () =>{

    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = ()  => {
    document.getElementById("box").innerHTML = `

    <div style="text-align:center">
    <h3>THANK YOU FOR PLAYING QUIZ</h3>
    <h2>${right} / ${total} are correct</h2>
    </div>
    `
}
//initial call
loadQuestion();

