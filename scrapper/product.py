class Product:

    def __init__(self, name, price, image_url, product_url, vendor):
        """
        Product class init method.
        :param name: Name of the product
        :param price: Price of the product
        :param image_url: Url of product image
        :param product_url: Url of product
        :param vendor: Name of vendor eg. daraz, sastodeal
        """
        self.name = name
        self.price = price
        self.image_url = image_url
        self.product_url = product_url
        self.vendor = vendor

    def __str__(self):
        return "name: " + self.name + ", price: Nrs." + str(self.price) + ", vendor: " + self.vendor

    def serialize(self):
        return {
            'name': self.name,
            'price': self.price,
            'image_url': self.image_url,
            'product_url': self.product_url,
            'vendor': self.vendor
        }
