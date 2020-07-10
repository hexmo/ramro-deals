
# nepali-shopping-guide

__Skills showcase project for FuseMachines AI Program__

## About the app
* Simple online price comparison app for comparing prices across shopping sites in Nepal.
* It utilizes the power of web scrapping to scrape product data from various nepali sites like [daraz](https://www.daraz.com.np/), [sastodeal](https://www.sastodeal.com/) and [hamrobazar](http://hamrobazar.com/) to find best deals for your money.
* This app will help you to save time as well as money. 

## Running this app
#### Requirements
* [Python](https://www.python.org/) 3.6 or above
* [pip](https://pypi.org/project/pip/) to manage and install dependencies
* [Git](https://git-scm.com/) (only required when contributing to this project)

#### Downloading the source code
You can [download ZIP](https://github.com/hexmo/ramro-deals/archive/master.zip) file and decompress it or alternatively you can run the following command in your terminal
```
git clone https://github.com/hexmo/ramro-deals.git
```
to clone project in you computer.

#### Setting up environment
We need some python libraries to be installed before running this application. For that we will create virtual environmet where we will install all the dependencies. To do that we will download **virtualenv** package by running the following command in your terminal.
```
pip install --user virtualenv
```
After installing this package we need to create virtual environment with the following command inside the project root directory.
```
python -m venv env
```
where **env** is name of your environment,
Now, lets activate this environment.
* On windows use the following command
```
.\env\Scripts\activate
```
* On Linux and macOS use the following command
```
source env/bin/activate
```
Now, we will install all the dependencies for this project using the following command.
```
pip install -r requirements.txt
```

#### Running the project
Use the following commands to run the project.
* On windows
```
set FLASK_APP=app.py
flask run
```
* On Linux and macOS
```
export FLASK_APP=app.py
flask run
```
You can use following command for **flask** instructions.
```
flask --help
```
Open URL provided after running these commands to run this project in your browser.

#### Closing the peoject
Use **CTRL + C** key combination to stop the flask application and use following command to exit virtual environment in your terminal.
```
deactivate
```

## Contributors
* Mohit Acharya [@hexmo](https://github.com/hexmo)
* Sachindra Silwal [@binchin](https://github.com/binchin)
* Sandesh Dhakal [@sandesh8888](https://github.com/sandesh8888)
