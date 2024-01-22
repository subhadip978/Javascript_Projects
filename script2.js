
const questions=[{
	question:"what is the largest tree in the world?",
	option:[{
		text:"mango",correct:"true"},
		{text:" bambo",correct:"false"},
		{text:"banana",correct:"false"},
		{text:"orange",correct:"false"},
]
	
	},
	{
		question:"what is the largest tree in the world?",
		option:[{
			text:"mango",correct:"true",
			text:" bambo",correct:"false",
			text:"banana",correct:"false",
	}]
		
		},
]






const questionElement=document.getElementById("question");
const ansbtn=document.getElementById('ansbtn');


let currentQuestionindex=0;
function showQuestion(){
	resetState();
	
	let currentQuestion=questions[currentQuestionindex];

	questionElement.innerHTML=currentQuestion.question;

	currentQuestion.option.forEach(item=>{
		const button=document.createElement("button");
			button.innerHTML=item.text;
			button.classList.add("btn");
			ansbtn.appendChild(button);
			button.dataset.correct=item.correct ;
			button.addEventListener('click',selectAnswer);


	})


}

function selectAnswer(event){
	if(event.target.dataset.correct==="true"){
		event.target.classList.add("correct");
	}
	else{
		event.target.classList.add("incorrect");
	}
}

function resetState(){
	while(ansbtn.firstChild){

		ansbtn.removeChild(ansbtn.firstChild);
	}
}

showQuestion();
