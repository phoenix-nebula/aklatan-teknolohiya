#include <iostream>
using namespace std;


float basePrice (int x, float y) {
	float calc = y - x;
	float calc2 = calc / x;
	float increase = calc2 * 100;
	
	cout << "The SRP "<<x<<" becomes "<<y<<". Which computes to a price increase of "<<increase<<"%\n";
	
	return increase;
}

float purchasePrice (float x, float y, float z) {
	float decimal = y / 100;
	float multiplier = 1 + decimal;
	float value = x * multiplier;
	
	cout << "With a retail price of "<<x<<", a markup of "<<z<<"% the price has increased with a "<<y<<"% sales tax, its final value of "<<value<<"\n";
	
	return value;
}


int main() {
	int SRP;
	float RetailPrice;
	float PricewTax;
	
	cout << "What is the Suggested Retail Price of your Product? (Integer)\n";
	cin >> SRP;
	cout << "What is the current Retail Price of your product (float)\n";
	cin >> RetailPrice;
	cout << "How many percentage is the sales tax? (float)\n";
	cin >> PricewTax;
	
	float base = basePrice(SRP, RetailPrice);
	
	float tax = purchasePrice(RetailPrice, PricewTax, base);
	
	return 0;
}
