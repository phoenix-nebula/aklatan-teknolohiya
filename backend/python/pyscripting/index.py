print('Enter a passage with percentage problem:')
passage = input()
print('Enter passage value 1:')
value1 = int(input())
print('Enter passage value 2:')
value2 = int(input())
print('Enter a question for the passage:')
question = input()

def calculation (x, y):
    ans = (x / y) * 100
    return int(ans)

print(question)
answer = int(input("Enter your answer"))
finAns = answer

ans = calculation(value1, value2)

if ans == answer:
    print("Congratulations, you've got your correct answer!")
    print(f"Your answer is a {type(finAns)} and it is {finAns}")
else:
    print("Sorry! you've got the wrong answer")
    print(f"Your answer is a {type(finAns)} and it is {finAns}")
