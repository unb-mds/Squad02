def regexMunicipio(municipio):
    regex_dict = {
        'arraial do cabo': r'(?:Secretaria Municipal de Educação, Cultura, Ciência e Tecnologia|cultura|tecnologia|educação|show|rede)[^R$]*R\$\s*((?:\d{1,3}(?:\.\d{3})*,\d{2}|\d+,\d{2}))',
        'belford roxo': r'(?:SECRETARIA MUNICIPAL DE CULTURA)[^R$]*R\$\s*((?:\d{1,3}(?:\.\d{3})*,\d{2}|\d+,\d{2}))',
        'niteroi': r'(?:SECRETARIA MUNICIPAL DAS CULTURAS)[^R$]*R\$\s*((?:\d{1,3}(?:\.\d{3})*,\d{2}|\d+,\d{2}))',
        'nova iguaçu': r'(?:Secretaria Municipal de Cultura)[^R$]*R\$\s*((?:\d{1,3}(?:\.\d{3})*,\d{2}|\d+,\d{2}))',
        'rio de janeiro': r'(?:SECRETARIA MUNICIPAL DE CULTURA)[^R$]*R\$\s*((?:\d{1,3}(?:\.\d{3})*,\d{2}|\d+,\d{2}))',
        'são josé de mereti': r'(?:Secretaria Municipal de Educação, Cultura e Turismo|Secretaria Municipal de Cultura, Lazer, Direitos Humanos e Igualdade Racial|Secretaria Municipal de Cultura e Turismo|Secretaria Municipal de Cultura, Turismo, Direitos Humanos e Igualdade Racial|cultura)[^R$]*R\$\s*((?:\d{1,3}(?:\.\d{3})*,\d{2}|\d+,\d{2}))',
    }
    regex_padrao = r'Secretaria Municipal.*?R\$\s*((?:\d{1,3}(?:\.\d{3})*,\d{2}|\d+,\d{2}))\b'

    return regex_dict.get(municipio, regex_padrao)
