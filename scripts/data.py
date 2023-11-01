import json

import pandas as pd

# Reading data from an Excel file
df = pd.read_excel("./data.xlsx")

data_list = df.to_dict(orient="records")
for record in data_list:
    for key, value in record.items():
        if pd.isna(value):
            record[key] = None

with open("data.json", "w") as json_file:
    json.dump(data_list, json_file, indent=4)
