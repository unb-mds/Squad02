import os
import json

def calcularPercentualCultura(somasTotais, pasta_saida):
    percentuais = {}
    total_cultura_global = 0
    total_global = 0

    for municipio, somasAnoMes in somasTotais.items():
        for ano, meses in somasAnoMes.items():
            if ano not in percentuais:
                percentuais[ano] = {"percentual total " + ano: 0}

            total_ano = sum(mes.get("total", 0) for mes in meses.values() if isinstance(mes, dict))
            total_cultura_ano = sum(mes.get("cultura", 0) for mes in meses.values() if isinstance(mes, dict))

            if total_ano > 0:
                percentual_ano = (total_cultura_ano / total_ano) * 100
            else:
                percentual_ano = 0
            percentuais[ano]["percentual total " + ano] = round(percentual_ano, 2)  

            total_cultura_municipio = sum(mes.get("cultura", 0) for mes in meses.values() if isinstance(mes, dict))
            total_municipio = sum(mes.get("total", 0) for mes in meses.values() if isinstance(mes, dict))
            
            if total_municipio > 0:
                percentual_municipio = (total_cultura_municipio / total_municipio) * 100
            else:
                percentual_municipio = 0
            percentuais[ano][municipio] = round(percentual_municipio, 2)

            total_cultura_global += total_cultura_ano
            total_global += total_ano

    caminho = os.path.join(pasta_saida, 'percentuais.json')

    with open(caminho, 'w', encoding='utf-8') as f:
        json.dump(percentuais, f, ensure_ascii=False, indent=4)

    return percentuais
