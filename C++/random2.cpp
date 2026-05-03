#include <iostream>

int globVar = 1337;

int globalFunc(int x) {
    if (x >= 100)
        std::cout<<"Congratulations on your perfect score!"<<std::endl;
    else if (x >= 90 && x <= 99)
        std::cout<<"Well done on your high score!"<<std::endl;
    else if (x >= 75 && x <= 89)
        std::cout<<"Very good, you passed!"<<std::endl;
    else
        std::cout<<"Oh no! you failed, better luck next time"<<std::endl;
}

int main() { 
    
    int locVar = 606;
    const char* locStrVar = "Data Handling";

    std::cout<<globVar<<" "<<locVar<<" Hello"<<std::endl;
    std::cout<<locStrVar<<std::endl;

    globalFunc(globVar);
 
    return 0;
}
