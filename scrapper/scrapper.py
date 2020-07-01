import requests
from bs4 import BeautifulSoup
from product import Product


def search(search_key):
    sasto_deal_scrapper('ludo')


def sasto_deal_scrapper(search_key):
    products = []

    url = "https://www.sastodeal.com/catalogsearch/result/"
    params = {'q': search_key}
    page = requests.get(url=url, params=params)
    soup = BeautifulSoup(page.content, 'html.parser')

    items = soup.find_all('div', class_='product-item-info')[:-1]

    for item in items:
        # Scrape data
        name = item.find(class_="product-item-link").get_text().strip()
        price = int(item.find(class_="price").get_text()[3:].replace(',', ''))
        image_url = item.find('img', class_="product-image-photo").get('src')
        product_url = item.find('a', class_="product-item-link").get('href')

        # Creating and adding Product objects to products[] list
        products.append(Product(name, price, image_url, product_url, "sastodeal"))

    return products
