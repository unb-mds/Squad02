import unittest
from backend.functions.regexGeral import regexMunicipio2  # Ajuste o caminho de importação conforme necessário

class TestRegexMunicipio2(unittest.TestCase):
    
    def test_regex_municipio_conhecido(self):
        # Testando municípios conhecidos
        municipios = {
            'arraial do cabo': r'(?:.?R\$\s((?:\d{1,3}(?:\.\d{3}),\d{2}))).',
            'belford roxo': r'(?:.?R\$\s((?:\d{1,3}(?:\.\d{3}),\d{2}))).',
            'niteroi': r'(?:.?R\$\s((?:\d{1,3}(?:\.\d{3}),\d{2}))).',
            'nova iguaçu': r'(?:.?R\$\s((?:\d{1,3}(?:\.\d{3}),\d{2}))).',
            'rio de janeiro': r'(?:.?R\$\s((?:\d{1,3}(?:\.\d{3}),\d{2}))).',
            'são josé de mereti': r'(?:.?R\$\s((?:\d{1,3}(?:\.\d{3}),\d{2}))).',
        }

        for municipio, regex_esperado in municipios.items():
            with self.subTest(municipio=municipio):
                self.assertEqual(regexMunicipio2(municipio), regex_esperado)

    def test_regex_municipio_desconhecido(self):
        # Testando um município desconhecido
        municipio_desconhecido = 'cidade desconhecida'
        regex_esperado = r'(?:.?R\$\s((?:\d{1,3}(?:\.\d{3}),\d{2}))).'
        self.assertEqual(regexMunicipio2(municipio_desconhecido), regex_esperado)

if __name__ == '__main__':
    unittest.main()
