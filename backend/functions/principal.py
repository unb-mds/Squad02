from group import agrupar
from sums import salvarSomas

def principal():
    pasta_arquivos = "./.gitignore/arquivos_renomeados"
    pasta_saida = "./Front end/projeto-react/src/components/public "  # Substitua pelo caminho desejado
    
    somasTotais = agrupar(pasta_arquivos)
    
    if somasTotais:
        salvarSomas(pasta_saida, somasTotais)

if __name__ == "__main__":
    principal()