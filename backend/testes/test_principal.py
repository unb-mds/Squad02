import unittest
from unittest.mock import patch
import sys 
import os 
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))
from backend.functions.principal import principal 



class TestPrincipal(unittest.TestCase):

    @patch('backend.functions.principal.salvarSomas')
    @patch('backend.functions.principal.agrupar')
    @patch('backend.functions.principal.calcularPercentualCultura')
    def test_principal(self, mock_calcularPercentualCultura, mock_agrupar, mock_salvarSomas):
        
        dados_agregados = {
            'Municipio1': {
                '2023': {
                    '07': 300.0
                }
            },
            'Municipio2': {
                '2024': {
                    '01': 700.0
                }
            }
        }

        dados_percentuais = {
            'Municipio1': {
                '2023': {
                    '07': 50.0  # Percentual calculado
                }
            },
            'Municipio2': {
                '2024': {
                    '01': 100.0  # Percentual calculado
                }
            }
        }

        
     

      
        principal()

        
        mock_agrupar.assert_called_once_with("./.gitignore/arquivos_renomeados")
        
        mock_salvarSomas.assert_called_once_with(
            "./Front end/projeto-react/src/components/public ", 
            mock_agrupar.return_value
        )

        mock_calcularPercentualCultura.assert_called_once_with(
            mock_agrupar.return_value,
            "./Front end/projeto-react/src/components/public "
        )
if __name__ == '__main__':
    unittest.main()
