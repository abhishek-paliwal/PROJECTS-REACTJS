#/bin/bash
################################################################################
## set variables
PROJECT_NAME="app01-homepage" ;
PROJECT_APP_URL="https://app01-homepage.vercel.app" ;
#PROJECT_APP_URL="https://app01-homepage.abhishekpali.us/index.html" ;
##
PROJECT_DATA_DIR="$REPO_REACTJS/$PROJECT_NAME/src/data" ;
PROJECT_DATA_DIR_IN="$REPO_REACTJS/$PROJECT_NAME/src/data/data_in" ;
PROJECT_DATA_DIR_OUT="$REPO_REACTJS/$PROJECT_NAME/src/data/data_out" ;
mkdir -p "$PROJECT_DATA_DIR_IN" "$PROJECT_DATA_DIR_OUT" ;
##
CSVFILE_BASENAME="combinedCategoryLinksData.csv" ;
CSVFILE_OUT="$PROJECT_DATA_DIR_OUT/$CSVFILE_BASENAME" ;
JSON_FILE_OUT="$PROJECT_DATA_DIR_OUT/$( basename $CSVFILE_BASENAME | sed 's|.csv|.json|ig' )" ;
################################################################################

##++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
## Cleaning up the data (sort and remove duplicates)
## Getting csv header (by reading only the first line of first file)
TMP_HEADERFILE="$DIR_Y/tmp_csv_header.txt" ; 
cat $PROJECT_DATA_DIR_IN/*.csv | head -1 > $TMP_HEADERFILE ; 
cat $TMP_HEADERFILE | grep -iv "^$" > $CSVFILE_OUT ;
## Appending rest of the data
cat $PROJECT_DATA_DIR_IN/*.csv |grep -iv 'ANCHORTEXT' | sed 's/"//ig' |grep -iv "^$" | sort -u >> $CSVFILE_OUT ;
##++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

## convert downloaded data to json format
function FUNC_step1_convertCsvFileToJson () {
    inFile="$CSVFILE_OUT" ;
    tmpFile="$DIR_Y/tmp0.txt" ;
    cat $inFile | grep -iv 'ANCHORTEXT' | grep -iv "^$" > $tmpFile ;
    echo "[" ;
    while read line; do
        ## IDENTIFYING COMMA-SEPARATED FIELDS
        #echo "LINE = > $line" ;
        ##
        F_CATEGORY="$(echo $line | cut -d ';' -f1)" ;
        F_URL="$(echo $line | cut -d ';' -f2)" ;
        F_ANCHORTEXT="$(echo $line | cut -d ';' -f3)" ;
        echo "{ \"CATEGORY\" : \"$F_CATEGORY\",\"URL\" : \"$F_URL\",\"ANCHORTEXT\" : \"$F_ANCHORTEXT\" },"
    done < $tmpFile ;
    echo "{ \"CATEGORY\" : \"99-TMP-LINKS\",\"URL\" : \"$PROJECT_APP_URL\",\"ANCHORTEXT\" : \"Our Homepage\" }" ;
    echo "]" ;
}
##++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

## call function and prettify output json
FUNC_step1_convertCsvFileToJson | jq > $JSON_FILE_OUT ;

## print some lines from json file
echo; echo "################################################################################" ;
echo ">> WORDCOUNT IN ORIGINAL FILE: $(wc $CSVFILE_OUT)" ;
echo; echo "##++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++" ;
echo ">> PRINTING FULL JSON FILE => $JSON_FILE_OUT" ;
cat $JSON_FILE_OUT ;
echo "################################################################################" ;
################################################################################