import{test} from '@playwright/test'
import excel from "exceljs"
import path from "path"
test("reading test data", async({page}){
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../testdata/readexcel.xlsx"))
    let sheet = await book.getWorksheet("sheet1")
    let data = await sheet?.getRow(1).getCell(1)
    console.log(data);

})