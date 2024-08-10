import os
import json
from collections import defaultdict
from format import formatar

def salvarSomas(pasta, somasTotais):
    # Certifique-se de que a pasta de saída existe
    if not os.path.exists(pasta):
        os.makedirs(pasta)

    dados = defaultdict(lambda: defaultdict(lambda: defaultdict(float)))

    for municipio, somasAnoMes in somasTotais.items():
        for ano, somaMeses in somasAnoMes.items():
            for mes, soma in somaMeses.items():
                dados[ano][municipio][mes] += soma

    dados_json = {
        ano: {
            municipio: {mes: formatar(soma) for mes, soma in somaMeses.items()}
            for municipio, somaMeses in mmesessoma.items()
        }
        for ano, mmesessoma in dados.items()
    }

    caminho = os.path.join(pasta, 'somasTotais.json')
    
    with open(caminho, 'w', encoding='utf-8') as f:
        json.dump(dados_json, f, ensure_ascii=False, indent=4)