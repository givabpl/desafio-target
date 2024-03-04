def inverter_string():
    input_string = input('Digite a palavra: ')
    string_invertida = ''
    
    for i in range(len(input_string) - 1, -1, -1):
        string_invertida += input_string[i]
    
    print(string_invertida)

inverter_string()
