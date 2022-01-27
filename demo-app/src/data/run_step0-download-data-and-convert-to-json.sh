#/bin/bash
################################################################################
## set variables
PROJECT_NAME="demo-app" ; 
PROJECT_DATA_BASEDIR="$REPO_REACTJS/$PROJECT_NAME/src/data" ;
CSVFILE_BASENAME="mggk_summary_cloudflare_ImagesUrlsWPcontentUploads.csv" ; 
CSVFILE_DOWNLOADED="$PROJECT_DATA_BASEDIR/$CSVFILE_BASENAME" ; 
JSON_FILE="$PROJECT_DATA_BASEDIR/$(basename $CSVFILE_BASENAME).json" ; 
################################################################################

## download data from server
SERVER_DIR="https://vps.abhishekpaliwal.com//scripts-html-outputs/data-reactapps/mggk" ; 
wget "$SERVER_DIR/$CSVFILE_BASENAME" -O "$PROJECT_DATA_BASEDIR/$CSVFILE_BASENAME" ; 

################################################################################

## convert downloaded data to json format
function convertCsvFileToJson () {
    inFile="$CSVFILE_DOWNLOADED" ;
    tmpFile="$DIR_Y/tmp0.txt" ;
    cat $inFile | grep -iv '##URL' > $tmpFile ;
    echo "[" ;
    while read line; do
        echo "{ \"url\" : \"$line\" }," 
    done < $tmpFile ;
    echo "{ \"url\" : \"https://www.mygingergarlickitchen.com.com/\" }
    ]" ;
}
################################################################################

## call function and prettify output json
convertCsvFileToJson | jq > $JSON_FILE ;
## print some lines from json file
echo "################################################################################" ; 
head $JSON_FILE ;
################################################################################
