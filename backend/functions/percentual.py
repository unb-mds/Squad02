import os
import json

def calcularPercentualCultura(somasTotais, pasta_saida):
    percentuais = {}

    for municipio, somasAnoMes in somasTotais.items():
        for ano, meses in somasAnoMes.items():
            if ano not in percentuais:
                percentuais[ano] = {"percentual total " + ano: 0, "total_ano": 0, "total_cultura_ano": 0}

            total_ano_municipio = sum(mes.get("total", 0) for mes in meses.values() if isinstance(mes, dict))
            total_cultura_ano_municipio = sum(mes.get("cultura", 0) for mes in meses.values() if isinstance(mes, dict))

            percentuais[ano]["total_ano"] += total_ano_municipio
            percentuais[ano]["total_cultura_ano"] += total_cultura_ano_municipio

            if total_ano_municipio > 0:
                percentual_municipio = (total_cultura_ano_municipio / total_ano_municipio) * 100
            else:
                percentual_municipio = 0
            percentual_municipio = round(percentual_municipio, 2)

            percentuais[ano][municipio] = percentual_municipio

    for ano, dados in percentuais.items():
        total_ano = dados.pop("total_ano")
        total_cultura_ano = dados.pop("total_cultura_ano")

        if total_ano > 0:
            percentual_total_ano = (total_cultura_ano / total_ano) * 100
        else:
            percentual_total_ano = 0
        percentuais[ano]["percentual total " + ano] = round(percentual_total_ano, 2)

    caminho = os.path.join(pasta_saida, 'percentuais.json')

    with open(caminho, 'w', encoding='utf-8') as f:
        json.dump(percentuais, f, ensure_ascii=False, indent=4)

    return percentuais
