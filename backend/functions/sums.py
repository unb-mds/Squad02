import os
import json
from collections import defaultdict
try:
    from .format import formatar
except ImportError:
    from format import formatar

def salvarSomas(pasta, somasTotais):
    if not os.path.exists(pasta):
        os.makedirs(pasta)

    dados = defaultdict(lambda: defaultdict(lambda: defaultdict(lambda: {"cultura": 0.0, "total": 0.0})))

    for municipio, somasAnoMes in somasTotais.items():
        for ano, somaMeses in somasAnoMes.items():
            for mes, soma in somaMeses.items():
                dados[ano][municipio][mes]["cultura"] += soma["cultura"]
                dados[ano][municipio][mes]["total"] += soma["total"]

    dados_json = {
        ano: {
            municipio: {
                mes: {
                    "cultura": formatar(soma["cultura"]),
                    "total": formatar(soma["total"])
                }
                for mes, soma in somaMeses.items()
            }
            for municipio, somaMeses in mmesessoma.items()
        }
        for ano, mmesessoma in dados.items()
    }

    caminho = os.path.join(pasta, 'somasTotais.json')
    
    with open(caminho, 'w', encoding='utf-8') as f:
        json.dump(dados_json, f, ensure_ascii=False, indent=4)