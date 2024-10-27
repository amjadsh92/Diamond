

n = int(input())
length = 1 + 2 * (n - 1)
stars = ""
empty =""

for i in range(0, n):
    for j in range(0, int(1 + 2 * i)):
        stars += '*'

    for j in range(0, (length - (1 + 2 * i)) // 2 ):

        empty += " "

    print(empty +stars + empty)      
    stars = ""
    empty = ""   

for i in range(0, n - 1):
    for j in range(0, int(length - (2 * (i + 1) ))):
        stars += "*"
    for j in range((2 * (i + 1)) // 2):
        empty += " "

    print(empty +stars + empty)      
    stars = ""
    empty = ""    









