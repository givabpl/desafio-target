def is_fibonacci(num):
    fib1, fib2 = 0, 1
    while fib2 < num:
        fib1, fib2 = fib2, fib1 + fib2
    return fib2 == num

number_input = int(input("Informe um número: "))

if is_fibonacci(number_input):
    print(f"O número {number_input} faz parte da sequência de Fibonacci")
else:
    print(f"O número {number_input} não faz parte da sequência Fibonacci")