#include <stdio.h>
#include <stdbool.h>

int main() {

    // absolute randomness

    int hello = 5;
    char string[] = "Hello";
    printf("%d \n", hello);
    printf("%s \n", string);
    char a = puts(string);
    printf("%c \n", a);

    for (int i = 0; i < 5; ++i) {
        printf("%c %c %c %c %c \n", string[i], string[i + 1], string[i + 2], string[i + 3], string[i + 4]);
    }

    for (int i = 0; i < 5; ++i) {
        printf("%c \n", string[5] - i);
    }

    int num = 5;

    switch (num == hello) {
        case true:
            printf("You're damn right, it's true");
            break;
        case false:
            printf("NO, Its ACTUALLY FALSE");
            break;
        default:
            printf("Nothing to compare");
            break;
    }

    char arrayOfStrings[5][10] = {"These", "tokens", "are", "private", "thank you"};

    for (int i = 0; i <= 5; ++i) {
        printf("\n%s", arrayOfStrings[i]);
    }

    return 0;
}
