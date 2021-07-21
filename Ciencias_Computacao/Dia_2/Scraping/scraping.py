import requests
from requests.exceptions import HTTPError, ReadTimeout
import dependecies as deps
from responses import make_requests


pacotes = deps.get_dependecies()
urls = deps.get_dependecies_urls(pacotes)

responses = make_requests(urls)
extract_data_from(responses)
