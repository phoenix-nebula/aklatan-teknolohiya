#include <iostream>
using namespace std;

int main() 
 {
	 int number;
	 
	 cout << "Enter number of questions: ";
	 cin >> number;
	 
	 cin.ignore();
	 
	 string questions[number];
	 string answers[number];
	 string userAnswer;
	 float score;
	 
	 for (int i = 0; i < number; i++) {
	 	cout << "Enter question number " << i + 1 << ":\n";
	 	getline(cin, questions[i]);
	 	cout << "Enter correct answer for question number " << i + 1 << ":\n";
		getline(cin, answers[i]); 
	 }
	 
	 for (int i = 0; i < number; i++) {
	 	cout << questions[i] << "\n";
	 	getline(cin, userAnswer);
	 	
	 	if (userAnswer == answers[i]) {
	 		cout << "Correct \n";
	 		score++;
		} else {
			cout << "Wrong \n";
		}
	 }
	 
	 cout << "Your score is "<<score<<" out of "<<number<<endl;
	 
	 float calculation = (score / number) * 100;
	 
	 if (calculation >= 60 && calculation <= 100) {
	 	cout << "Your grade is "<<calculation<<"%, you passed!";
	 } else if (calculation == 100) {
	 	cout << "Wow perfect score!";
	 } else if (calculation <= 60) {
	 	cout << "Your grade is "<<calculation<<"%, you failed, the passing is 70%";
	 }
	 
	 return 0;
}
