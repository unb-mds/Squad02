from datetime import date

from gazette.spiders.base.dionet import DionetGazetteSpider
from calcular_data import Calcular_data
ano, mes, dia = Calcular_data.calcula_data()


class RjRioDeJaneiroSpider(DionetGazetteSpider):
    TERRITORY_ID = "3304557"
    name = "rj_rio_de_janeiro"
    allowed_domains = ["doweb.rio.rj.gov.br"]
    start_date = date(ano, mes, dia)

    BASE_URL = "https://doweb.rio.rj.gov.br"
