#/bin/bash
################################################################################
## set variables
PROJECT_NAME="app-mggk01-image-finder" ; 
##
PROJECT_DATA_DIR="$REPO_REACTJS/$PROJECT_NAME/src/data" ;
PROJECT_DATA_DIR_IN="$REPO_REACTJS/$PROJECT_NAME/src/data/data_in" ;
PROJECT_DATA_DIR_OUT="$REPO_REACTJS/$PROJECT_NAME/src/data/data_out" ;
mkdir -p "$PROJECT_DATA_DIR_IN" "$PROJECT_DATA_DIR_OUT" ; 
##
CSVFILE_BASENAME="mggk_summary_cloudflare_ImagesUrlsWPcontentUploads.csv" ; 
CSVFILE_DOWNLOADED="$PROJECT_DATA_DIR_IN/$CSVFILE_BASENAME" ; 
JSON_FILE_OUT="$PROJECT_DATA_DIR_OUT/$(basename $CSVFILE_BASENAME).json" ; 
################################################################################

## download data from server
SERVER_DIR="https://vps.abhishekpaliwal.com//scripts-html-outputs/data-reactapps/mggk" ; 
wget "$SERVER_DIR/$CSVFILE_BASENAME" -O "$CSVFILE_DOWNLOADED" ; 

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
convertCsvFileToJson | jq > $JSON_FILE_OUT ;
## print some lines from json file
echo; echo "################################################################################" ; 
echo ">> WORDCOUNT IN ORIGINAL FILE: $(wc $CSVFILE_DOWNLOADED)" ; 
echo; echo "##++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++" ; 
echo ">> PRINT FIRST FEW LINES FROM JSON FILE => $JSON_FILE_OUT" ; 
head $JSON_FILE_OUT ;
echo "################################################################################" ; 
################################################################################
