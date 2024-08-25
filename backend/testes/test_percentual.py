import os
import json
import unittest
from unittest.mock import patch, mock_open
import sys
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..','..')))
from backend.functions.percentual import calcularPercentualCultura

class TestCalcularPercentualCultura(unittest.TestCase):
    @patch('builtins.open', new_callable=mock_open)
    def test_calcularPercentualCultura(self, mock_open_file):
      
        somasTotais = {
            'Municipio1': {
                '2021': {1: {"cultura": 10.0, "total": 50.0}, 2: {"cultura": 20.0, "total": 100.0}},
                '2022': {1: {"cultura": 15.0, "total": 75.0}, 2: {"cultura": 25.0, "total": 125.0}}
            },
            'Municipio2': {
                '2021': {1: {"cultura": 30.0, "total": 150.0}, 2: {"cultura": 40.0, "total": 200.0}},
                '2022': {1: {"cultura": 35.0, "total": 175.0}, 2: {"cultura": 45.0, "total": 225.0}}
            }
        }
        pasta_saida = 'fake_path'

     
        percentuais_esperados = {
            '2021': {
                'percentual total 2021': 20.0,
                'Municipio1': 20.0,
                'Municipio2': 20.0
            },
            '2022': {
                'percentual total 2022': 20.0,
                'Municipio1': 20.0,
                'Municipio2': 20.0
            }
        }

      
        percentuais = calcularPercentualCultura(somasTotais, pasta_saida)

        
        mock_open_file.assert_called_once_with(os.path.join(pasta_saida, 'percentuais.json'), 'w', encoding='utf-8')

       
        handle = mock_open_file()
        written_data = ''.join(call.args[0] for call in handle.write.mock_calls)
        self.assertDictEqual(json.loads(written_data), percentuais_esperados)

if __name__ == '__main__':
    unittest.main()
