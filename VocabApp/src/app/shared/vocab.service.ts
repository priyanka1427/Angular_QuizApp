import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VocabService {
  //---------------- Properties---------------
  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  correctAnswerCount: number = 0;

  //---------------- Helper Methods---------------
  constructor(private http: HttpClient) { }
  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  //---------------- Http Methods---------------

  getQuestions() {
    var questions = [
      {
        question: "Which is the largest country in the world by population?",
        options: ["India", "USA", "China", "Russia"],
        answer: 2
      },
      {
        question: "When did the second world war end?",
        options: ["1945", "1939", "1944", "1942"],
        answer: 0
      },
      {
        question: "Which was the first country to issue paper currency?",
        options: ["USA", "France", "Italy", "China"],
        answer: 3
      },
      {
        question: "Which city hosted the 1996 Summer Olympics?",
        options: ["Atlanta", "Sydney", "Athens", "Beijing"],
        answer: 0
      },
      {	
        question: "Who invented telephone?",
        options: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"],
        answer: 1
      }
    ];
  
    return {
      getQuestion: function(id) {
        if(id < questions.length) {
          return questions[id];
        } else {
          return false;
        }
      }
  
  }

  getAnswers() {
    function(scope, elem, attrs) {
			scope.start = function() {
				scope.id = 0;
				scope.quizOver = false;
				scope.inProgress = true;
				scope.getQuestion();
			};

			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
			}

			scope.getQuestion = function() {
				var q = quizFactory.getQuestion(scope.id);
				if(q) {
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
					scope.answerMode = true;
				} else {
					scope.quizOver = true;
				}
			};

			scope.checkAnswer = function() {
				if(!$('input[name=answer]:checked').length) return;

				var ans = $('input[name=answer]:checked').val();

				if(ans == scope.options[scope.answer]) {
					scope.score++;
					scope.correctAns = true;
				} else {
					scope.correctAns = false;
				}

				scope.answerMode = false;
			};

			scope.nextQuestion = function() {
				scope.id++;
				scope.getQuestion();
			}

			scope.reset();
		}
	}
  }

}