import fs from "fs";
import csv from "csv-parser";

export async function readCsv(
  filePath: string
): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const rows: any[] = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => rows.push(row))
      .on("end", () => resolve(rows))
      .on("error", reject);
  });
}