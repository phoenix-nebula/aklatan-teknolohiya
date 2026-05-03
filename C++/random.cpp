#include <iostream>
#include <string>

int parameter(int positive, int negative) {
    int total = positive + negative;
    std::cout<<total<<std::endl;
    return total;
}

void announcer(int hello) {
    if (hello == 1) {
        std::cout<<"We have 1 number here!"<<std::endl;
    } else if (hello == 2) {
        std::cout<<"We have number 2 here!"<<std::endl;
    }
}

char sayYourName() {
	std::string name;
	int age;
	std::string gender;
    std::cout<<"Say your name: "<<std::endl;
    std::cin>>name;
    std::cout<<"Good morning "<<name<<" please state your age"<<std::endl;
    std::cin>>age;
    std::cout<<"That's great! you are "<<age<<" years old!"<<std::endl;
    std::cout<<"Please state your gender"<<std::endl;
    std::cin>>gender;
    std::cout<<"I see, thank you for your time!"<<std::endl;
}

int positive2 = 100;
int negative2 = -33;

int parameterMedium = parameter(positive2, negative2);

int main() {
    int positive = 56;
    int negative = -54;

    announcer(parameter(positive, negative));
    parameter(positive2, negative);
    parameter(parameterMedium, negative);
    sayYourName();
}
