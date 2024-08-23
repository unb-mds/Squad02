from group import agrupar
from sums import salvarSomas
from percentual import calcularPercentualCultura

def principal():
    pasta_arquivos = "./.gitignore/arquivos_renomeados"
    pasta_saida = "./Front end/projeto-react/src/components/public "  # Substitua pelo caminho desejado
    
    somasTotais = agrupar(pasta_arquivos)
    
    if somasTotais:
        salvarSomas(pasta_saida, somasTotais)
        calcularPercentualCultura(somasTotais, pasta_saida)

if __name__ == "__main__":
    principal()