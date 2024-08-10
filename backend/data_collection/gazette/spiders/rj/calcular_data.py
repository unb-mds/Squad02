from datetime import datetime, timedelta
import os

class Calcular_data():
    @staticmethod
    def calcula_data():
        file_path = 'Front end\projeto-react\src\components\public\somasTotais.json'
        if os.path.exists(file_path):    
            hoje = datetime.now()
            semana_passada = hoje - timedelta(weeks=1)
            ano, mes, dia = semana_passada.strftime('%Y-%m-%d').split('-')
            return ano, mes, dia
        return 2023, 1, 1