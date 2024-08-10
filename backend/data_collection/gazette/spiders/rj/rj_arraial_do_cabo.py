import datetime

from gazette.spiders.base.instar import BaseInstarSpider
from calcular_data import Calcular_data
ano, mes, dia = Calcular_data.calcula_data()



class RjArraialdoCabopider(BaseInstarSpider):
    TERRITORY_ID = "3300258"
    name = "rj_arraial_do_cabo"
    allowed_domains = ["arraial.rj.gov.br"]
    base_url = "https://www.arraial.rj.gov.br/portal/diario-oficial"
    start_date = date(ano, mes, dia)

