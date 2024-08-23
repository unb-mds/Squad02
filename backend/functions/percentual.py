import os
import json

def calcularPercentualCultura(somasTotais, pasta_saida):
    percentuais = {}
    total_cultura_global = 0
    total_global = 0

    for municipio, somasAnoMes in somasTotais.items():
        for ano, meses in somasAnoMes.items():
            total_ano = sum(mes.get("total", 0) for mes in meses.values())
            total_cultura_ano = sum(mes.get("cultura", 0) for mes in meses.values())
            if total_ano > 0:
                percentual = (total_cultura_ano / total_ano) * 100
            else:
                percentual = 0
            if ano not in percentuais:
                percentuais[ano] = {}
            percentuais[ano][municipio] = round(percentual, 2)

            total_cultura_global += total_cultura_ano
            total_global += total_ano

    if total_global > 0:
        percentual_total = (total_cultura_global / total_global) * 100
    else:
        percentual_total = 0

    percentuais["percentual total"] = round(percentual_total, 2)

    caminho = os.path.join(pasta_saida, 'percentuais.json')

    with open(caminho, 'w', encoding='utf-8') as f:
        json.dump(percentuais, f, ensure_ascii=False, indent=4)

    return percentuais
