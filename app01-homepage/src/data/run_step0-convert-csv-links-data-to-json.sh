#/bin/bash
################################################################################
## set variables
PROJECT_NAME="app01-homepage" ;
##
PROJECT_DATA_DIR="$REPO_REACTJS/$PROJECT_NAME/src/data" ;
PROJECT_DATA_DIR_IN="$REPO_REACTJS/$PROJECT_NAME/src/data/data_in" ;
PROJECT_DATA_DIR_OUT="$REPO_REACTJS/$PROJECT_NAME/src/data/data_out" ;
mkdir -p "$PROJECT_DATA_DIR_IN" "$PROJECT_DATA_DIR_OUT" ;
##
CSVFILE_BASENAME="combinedCategoryLinksData.csv" ;
CSVFILE_OUT="$PROJECT_DATA_DIR_OUT/$CSVFILE_BASENAME" ;
JSON_FILE_OUT="$PROJECT_DATA_DIR_OUT/$(basename $CSVFILE_BASENAME).json" ;
################################################################################

##++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
## clean up the data (sort and remove duplicates)
# get csv header (by reading only the first line of first file)
TMP_HEADERFILE="$DIR_Y/tmp_csv_header.txt" ; 
cat $(fd -I -t f -e csv --search-path="$PROJECT_DATA_DIR_IN" | head -1) > $TMP_HEADERFILE ; 
cat $TMP_HEADERFILE > $CSVFILE_OUT
cat $(fd -I -t f -e csv --search-path="$PROJECT_DATA_DIR_IN") | grep -iv 'ANCHORTEXT' | grep -iv '^$' | sort -u >> $CSVFILE_OUT ;

## convert downloaded data to json format
function step2_convertCsvFileToJson () {
    inFile="$CSVFILE_OUT" ;
    tmpFile="$DIR_Y/tmp0.txt" ;
    cat $inFile | grep -iv 'ANCHORTEXT' > $tmpFile ;
    echo "[" ;
    while read line; do
        ## SEPARATE FIELDS
        F_CATEGORY="$(echo $line | cut -d',' -f1)" ;
        F_ANCHORTEXT="$(echo $line | cut -d',' -f2)" ;
        F_URL="$(echo $line | cut -d',' -f3)" ;
        echo "{ \"CATEGORY\" : \"$F_CATEGORY\",\"ANCHORTEXT\" : \"$F_ANCHORTEXT\",\"URL\" : \"$F_URL\" },"
    done < $tmpFile ;
    echo "{ \"CATEGORY\" : \"PERSONAL\",\"ANCHORTEXT\" : \"This Homepage\",\"URL\" : \"#\" },"
    echo "]" ;
}
##++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

## call function and prettify output json
step2_convertCsvFileToJson | jq > $JSON_FILE_OUT ;

## print some lines from json file
echo; echo "################################################################################" ;
echo ">> WORDCOUNT IN ORIGINAL FILE: $(wc $CSVFILE_OUT)" ;
echo; echo "##++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++" ;
echo ">> PRINT FIRST FEW LINES FROM JSON FILE => $JSON_FILE_OUT" ;
head $JSON_FILE_OUT ;
echo "################################################################################" ;
################################################################################