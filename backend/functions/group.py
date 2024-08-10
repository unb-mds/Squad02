import os
from collections import defaultdict
from search import buscarValor
from name import verNomeMunicipio
from schedule import meseano
from regex import regexMunicipio

def agrupar(pasta):
    if not os.path.isdir(pasta):
        print(f'A pasta "{pasta}" não foi encontrada.')
        return

    arquivos = os.listdir(pasta)
    somas = defaultdict(lambda: defaultdict(lambda: defaultdict(float)))

    for arquivo in arquivos:
        caminho_arquivo = os.path.join(pasta, arquivo)
        if os.path.isfile(caminho_arquivo):
            municipio = verNomeMunicipio(arquivo)
            ano, mes = meseano(arquivo)
            regex = regexMunicipio(municipio)
            valores_encontrados = buscarValor(caminho_arquivo, regex)
            soma_valores = sum(valores_encontrados)
            somas[municipio][ano][mes] += soma_valores

    return somas
