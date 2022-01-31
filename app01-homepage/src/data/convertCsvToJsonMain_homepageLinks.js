const fs = require('fs');
const Papa = require('papaparse');

/* =========================================================== */
// CONCATENATING ALL CSV FILES INTO ONE CSV FILE
projectDir = process.env.REPO_REACTJS + '/app01-homepage/src/data/' ; 
inDir = projectDir + 'data_in/' ; 
outDir = projectDir + 'data_out/' ; 
outFileFinalCsv = outDir + 'combinedCategoryLinksData.csv' ; 
outFileFinalJson = outDir + 'combinedCategoryLinksData.json' ; 
const combinedFileData = require('child_process').execSync('cat ' + inDir + '*.csv').toString('UTF-8') ; 
fs.writeFileSync(outFileFinalCsv, combinedFileData) ; 
/* =========================================================== */

/* =========================================================== */
// FUNCTION TO WRITE CSV DATA TO A JSON FILE
function writeToJsonFile(myDataObject) {
    try {
    fs.writeFileSync(outFileFinalJson, JSON.stringify(myDataObject)) ; 
    console.log('file written successfully') ; 
    } catch (err) {
    console.error(err) ; 
    }
}
/* =========================================================== */

/* =========================================================== */
// USE PAPA PARSE TO READ CSV FILE DATA
const csvFilePath = outFileFinalCsv ; 
const file = fs.createReadStream(csvFilePath) ;
/* ====== */
Papa.parse(file, {
  header: true,
  skipEmptyLines: true,
  complete: function(results) {
    console.log('=========================================='); 
    console.log('Complete', results.data.length, 'records.'); 
    console.log('=========================================='); 
    console.log(results.data); 
    console.log('=========================================='); 
    writeToJsonFile(results.data) ;
    console.log('=========================================='); 
    for (let singleRow of results.data.entries()) {
      try {
      console.log('<a href="' + singleRow[1]['ANCHORTEXT'] + '">' + singleRow[1].URL + '</a>');
      }
      catch(error) {
          console.error(error) ;
      }
    }
  } 
});
/* =========================================================== */
