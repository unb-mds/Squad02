import unittest
from unittest.mock import patch, mock_open
from collections import defaultdict
import sys 
import os 
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))
from backend.functions.group import agrupar  
    
class TestAgrupar(unittest.TestCase):

    @patch('backend.functions.group.os.path.isdir')
    @patch('backend.functions.group.os.listdir')
    @patch('backend.functions.group.os.path.isfile')
    @patch('backend.functions.group.verNomeMunicipio')
    @patch('backend.functions.group.meseano')
    @patch('backend.functions.group.regexMunicipio')
    @patch('backend.functions.group.buscarValor')
   
    def test_agrupar(self, mock_buscarValor, mock_regexMunicipio, mock_meseano, mock_verNomeMunicipio, mock_isfile, mock_listdir, mock_isdir):
        # Configurando os mocks
        mock_isdir.return_value = True
        mock_listdir.return_value = ['arquivo1.txt', 'arquivo2.txt']
        mock_isfile.return_value = True
        mock_verNomeMunicipio.side_effect = lambda x: 'Municipio87' if x == 'arquivo2.txt' else 'Municipio58'
        mock_meseano.side_effect = lambda x: ('2025', '07') if x == 'arquivo2.txt' else ('2024', '01')
        mock_regexMunicipio.side_effect = lambda x: 'regex1' if x == 'Municipio58' else 'regex2'
        mock_buscarValor.side_effect = lambda x, y: [100.0, 200.0] if y == 'regex1' else [300.0, 400.0]

        resultado = agrupar('caminho/para/pasta')

        # Estrutura esperada com valores "cultura" e "total"
        esperado = {
            'Municipio58': {
                '2024': {
                    '01': {
                        'cultura': 300.0,
                        'total': 700.0
                    }
                }
            },
            'Municipio87': {
                '2025': {
                    '07': {
                        'cultura': 700.0,
                        'total': 700.0
                    }
                }
            }
        }

    

        
        self.assertEqual(dict(resultado), esperado)

if __name__ == '__main__':
    unittest.main()