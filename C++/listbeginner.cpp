#include <iostream>
#include <cstdlib>
using namespace std;

int main() {
	
	int count;
	
	cout << "\n Enter how many prompts do you want (caution: individual prompts): ";
	cin >> count;
	
	count--;
	
	// testing ^ v
	
	cout << "\n Think big, every input you type must be higher than your enemy \n\n";
	
	typedef double long ARRAYTEST;
	
	ARRAYTEST one[count], two[count];
	
	int score = 0;
	int limit = 0;
	
	for (int i = 0; i <= sizeof(one) / sizeof(one[0]); i++) {
		cout << "Give value to ARRAYTEST one["<<i<<"]: ";
		cin >> one[i];
		cout << "Your answer is "<<one[i]<<"\n";
		two[i] = rand();	
	}
	
	for (int i = 0; i <= sizeof(two) / sizeof(two[0]); i++) {
		if (one[i] < two[i]){
			cout << "\nEnemy has " << two[i] << " versus your " << one[i] << " forces! enemy won! "<< "\n";
			limit++;
		} else {
			cout << "\nEnemy has " << two[i] << " versus your " << one[i] << " forces! YOU won! "<< "\n";
			score++;
			limit++;
		}
	}
	
	cout << "\n You scored "<<score<<" out of "<<limit<<"!\n";
	
}
