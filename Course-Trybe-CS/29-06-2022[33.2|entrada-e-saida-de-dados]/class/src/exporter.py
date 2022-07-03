import csv

def export_report(report_data:dict):
    FILE_PATH ="data/report.csv"
    with open(FILE_PATH, mode="w") as file:
        file_writer =  csv.writer(file)
        for key, value in report_data.items():
            file_writer.writerow([key, value])