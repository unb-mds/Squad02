def regexMunicipio2(municipio):
    regex_dict = {
        'arraial do cabo': r'(?:.?R\$\s((?:\d{1,3}(?:\.\d{3}),\d{2}))).',
        'belford roxo': r'(?:.?R\$\s((?:\d{1,3}(?:\.\d{3}),\d{2}))).',
        'niteroi': r'(?:.?R\$\s((?:\d{1,3}(?:\.\d{3}),\d{2}))).',
        'nova iguaçu': r'(?:.?R\$\s((?:\d{1,3}(?:\.\d{3}),\d{2}))).',
        'rio de janeiro': r'(?:.?R\$\s((?:\d{1,3}(?:\.\d{3}),\d{2}))).',
        'são josé de mereti': r'(?:.?R\$\s((?:\d{1,3}(?:\.\d{3}),\d{2}))).',
    }
    regex_padrao = r'(?:.?R\$\s((?:\d{1,3}(?:\.\d{3}),\d{2}))).'

    return regex_dict.get(municipio, regex_padrao)