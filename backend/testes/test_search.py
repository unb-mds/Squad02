import unittest
import os 
import sys 
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..','..')))
from backend.functions.search import buscarValor

class TestBuscarValor(unittest.TestCase):
        
    def test_arquivo_vazio(self):
        arquivo_vazio = "arquivo_vazio.txt"
        with open(arquivo_vazio, 'w'):
            pass

        resultado = buscarValor(arquivo_vazio, r"\d+")
        self.assertEqual(resultado, [])

    def test_busca_simples(self):
        arquivo_com_valores = "arquivo_com_valores.txt"
        with open(arquivo_com_valores, 'w') as f:
            f.write("primeiro valor 10. Segundo valor 2")

        resultado = buscarValor(arquivo_com_valores, r"\d+")
        self.assertEqual(resultado, [10.0, 2.0])  

    def test_busca_com_numeros_decimais(self):
        arquivo_com_valores = "arquivo_com_valores.txt"
        with open(arquivo_com_valores, 'w') as f:
            f.write("primeiro valor 10.00 ,Segundo valor  2.13")

        resultado = buscarValor(arquivo_com_valores, r"\d+\.\d+")
        self.assertEqual(resultado, [1000.0, 213.0])  

    def test_busca_com_ignorar_caixa(self):
        arquivo_com_valores = "arquivo_com_valores.txt"
        with open(arquivo_com_valores, 'w') as f:
            f.write("PRIMEIRO VALOR 10.4, segundo valor 5.3, tErCeiro Valor 2.3")

        resultado = buscarValor(arquivo_com_valores, r"\d+\.\d+")
        self.assertEqual(resultado, [104.0, 53.0, 23.0])  

if __name__ == '__main__':
    unittest.main()
