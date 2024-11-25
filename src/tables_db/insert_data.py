import yfinance as yf
from datetime import datetime
import psycopg2

# Database connection details
DB_HOST = 'localhost'
DB_NAME = 'data'
DB_USER = 'postgres'
DB_PASSWORD = 'databiz232'

# Symbols to fetch data for
symbols = ['AAPL', 'GSPC', 'MSFT']  # SP500 is '^GSPC' in Yahoo Finance

# Connect to PostgreSQL
conn = psycopg2.connect(
    host=DB_HOST,
    database=DB_NAME,
    user=DB_USER,
    password=DB_PASSWORD
)
cursor = conn.cursor()

# Function to fetch and insert data
def fetch_and_insert_data(symbol):
	print("Fetching data for {}...".format(symbol))
	stock_data = yf.download(symbol, start="2023-01-01", end="2023-11-01", interval="1d")

	for date, row in stock_data.iterrows():
		open_price = float(row['Open'])
		high_price = float(row['High'])
		low_price = float(row['Low'])
		close_price = float(row['Close'])
		date_str = date.strftime('%Y-%m-%d')

		cursor.execute("""
			INSERT INTO symbols (symbol, date, open, high, low, close)
			VALUES (%s, %s, %s, %s, %s, %s)
		""", (symbol, date_str, open_price, high_price, low_price, close_price))

	conn.commit()
	print("Inserted data for {}".format(symbol))

# Fetch and insert data for each symbol
for symbol in symbols:
    fetch_and_insert_data(symbol)

# Close the connection
cursor.close()
conn.close()
print("Data inserted successfully!")

