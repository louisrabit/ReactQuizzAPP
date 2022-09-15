import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Number one Programming Language in 2022  ?',
			answerOptions: [
				{ answerText: 'Ruby', isCorrect: false },
				{ answerText: 'PHP', isCorrect: false },
				{ answerText: 'Java', isCorrect: false },
				{ answerText: 'JavaScript/TypeScript', isCorrect: true },
			],
		},
		
		{
			questionText: 'What is the most popular JavaScript framework in 2022?',
			answerOptions: [
				{ answerText: 'React', isCorrect: true },
				{ answerText: 'Node', isCorrect: false },
				{ answerText: 'Vue', isCorrect: false },
				{ answerText: 'Ember', isCorrect: false },
			],
		},
		{
			questionText: 'In HTML how can you make a numbered list?',
			answerOptions: [
				{ answerText: '<ol>', isCorrect: true },
				{ answerText: '<ul>', isCorrect: false },
				{ answerText: '<dl>', isCorrect: false },
				{ answerText: '<list>', isCorrect: false },
			],
		},
    {
			questionText: 'Which of these tags are all <table> tags?',
			answerOptions: [
				{ answerText: '<table><head><tfoot>', isCorrect: false },
				{ answerText: '<table><tr><td>', isCorrect: true },
				{ answerText: '<thead><body><tr>', isCorrect: false },
				{ answerText: '<table><tr><tt>', isCorrect: false },
			],
		},
	];

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{false ? (
				<div className='score-section'>You scored 1 out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='question-text'>This is where the question text should go</div>
					</div>
					<div className='answer-section'>
						<button>Answer 1</button>
						<button>Answer 2</button>
						<button>Answer 3</button>
						<button>Answer 4</button>
					</div>
				</>
			)}
		</div>
	);
}
