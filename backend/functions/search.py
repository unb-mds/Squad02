import os
import re

def buscarValor(arquivo, regex):
    if not os.path.isfile(arquivo):
        print(f'O arquivo "{arquivo}" não foi encontrado.')
        return []

    with open(arquivo, 'r', encoding='utf-8') as f:
        conteudo = f.read()
        matches = re.findall(regex, conteudo, re.IGNORECASE)
        
        valores = []
        for valor in matches:
            valor = valor.replace('.', '').replace(',', '.')
            try:
                valores.append(float(valor))
            except ValueError:
                print(f'Valor inválido encontrado e ignorado: {valor}')
        
        return valores