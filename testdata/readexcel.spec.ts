import{test} from '@playwright/test'
import excel from "exceljs"
import path from "path"
test("reading test data", async({page}){
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../testdata/readexcel.xlsx"))

})