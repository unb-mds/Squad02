import os
from collections import defaultdict
try:
    from .search import buscarValor
    from .name import verNomeMunicipio
    from .schedule import meseano
    from .regex import regexMunicipio
    from .regexGeral import regexMunicipio2
except ImportError:
    from search import buscarValor
    from name import verNomeMunicipio
    from schedule import meseano
    from regex import regexMunicipio
    from regexGeral import regexMunicipio2

def agrupar(pasta):
    if not os.path.isdir(pasta):
        print(f'A pasta "{pasta}" não foi encontrada.')
        return

    arquivos = os.listdir(pasta)
    somas = defaultdict(lambda: defaultdict(lambda: defaultdict(lambda: {"cultura": 0.0, "total": 0.0})))

    for arquivo in arquivos:
        caminho_arquivo = os.path.join(pasta, arquivo)
        if os.path.isfile(caminho_arquivo):
            municipio = verNomeMunicipio(arquivo)
            ano, mes = meseano(arquivo)
            regex = regexMunicipio(municipio)
            regexGeral = regexMunicipio2(municipio)

            valores_encontrados = buscarValor(caminho_arquivo, regex)
            valores_encontrados_geral = buscarValor(caminho_arquivo, regexGeral)

            soma_valores_cultura = sum(valores_encontrados)
            soma_valores_total = sum(valores_encontrados_geral)
            
            somas[municipio][ano][mes]["cultura"] += soma_valores_cultura
            somas[municipio][ano][mes]["total"] += soma_valores_total

    return somas