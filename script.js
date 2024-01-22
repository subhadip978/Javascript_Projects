const questions=[
	{

		question:"what is the largets animal?",
	
		answers:[
			{text:"elephant",correct:true},
			{text:"bluewhale",correct:false},
			{text:"godzilla",correct:false}
		]
	},

	{

		question:"what is the largets desert?",
	
		answers:[
			{text:"elephant",correct:true},
			{text:"bluewhale",correct:false},
			{text:"godzilla",correct:false}
		]
	},

	{

		question:"what is the smallest continent?",
	
		answers:[
			{text:"ASIA",correct:true},
			{text:"Australia",correct:false},
			{text:"Africa",correct:false}
		]
	},


]


const questionElement=document.getElementById("question");
const ansbtn=document.getElementById("ansbtn");
const nextbtn=document.getElementById('nextbtn');


let score=0;
let currentInd=0;

const  startQuiz=()=>{
score=0;
currentInd=0;	
showQuestion();
}

const showQuestion=()=>{

	resetState();
	let currentQuestion=questions[currentInd];
	let questionNo=currentInd+1 ;
	questionElement.innerHTML=questionNo + " "+currentQuestion.question ;
	//console.log(currentQuestion.question );


		currentQuestion.answers.forEach(answer=>{
			const button=document.createElement("button");
			button.innerHTML=answer.text ;
			button.classList.add("btn");
			ansbtn.appendChild(button);
			if(answer.correct){
				button.dataset.correct=answer.correct ;
			}
			button.addEventListener('click',selectAnswer);


		})
}

function resetState(){
	nextbtn.style.display="none";
	while(ansbtn.firstChild){
		ansbtn.removeChild(ansbtn.firstChild);
	}
}

function selectAnswer(e){

	const selectbtn= e.target;
	if(e.target.dataset.correct==="true"){
		e.target.classList.add("correct");
		score++;
	}
	else{
		e.target.classList.add("incorrect");
	}

	Array.from(ansbtn.children).forEach(button=>{


		if(button.dataset.correct==="true"){
			button.classList.add("correct");
		}
		else{
			button.disabled=true;
		}
	})
	nextbtn.style.display="block";
}


function handlenextbtn(){
		currentInd++;

		showQuestion();

}

nextbtn.addEventListener('click',()=>{
	handlenextbtn();
})
startQuiz();
