#!/bin/bash
THIS_SCRIPT_NAME="$(basename $0)" ;
THIS_SCRIPT_NAME_SANS_EXTENSION="$(echo $THIS_SCRIPT_NAME | sed 's/\.sh//g')" ;

##++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
## CREATING SCRIPT USAGE FUNCION AND CALLING IT VIA '--help'
usage()
{
cat <<EOM
USAGE: $(basename $0)
    ################################################################################
    ## USAGE:
    #### > bash $THIS_SCRIPT_NAME
    ################################################################################
    ## Run this program to get the latest data from all the servers for all the apps
    ## and to sync the build folders of all apps to dreamobjects server.
    ## This program simply calls other bash scripts.
    ################################################################################
    ## CREATED BY: PALI
    ## CREATED ON: 2022-01-31
    ################################################################################
EOM

exit 0 ## EXITING IF ONLY USAGE IS NEEDED
}
## Calling the usage function
if [ "$1" == "--help" ] ; then usage ; fi
##++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

####################### ADDING COLOR TO OUTPUT ON CLI ##########################
echo "Currently sourcing the bash color script, which outputs chosen texts in various colors ..." ;
source $REPO_SCRIPTS/2000_vendor_programs/color-logger.sh
info "This enables use of keywords for coloring, such as: debug, info, error, success, warn, highlight." ;
debug "Read it's help by running: >> bash $DIR_GITHUB/Bash-Scripts-To-Make-Life-Easier/2000_vendor_programs/color-logger.sh -h"
##############################################################################

##############################################################################
## SETTING VARIABLES
REACTJS_APPS_ROOTDIR="$REPO_REACTJS" ;
WORKDIR="$DIR_Y/_OUTPUT_$THIS_SCRIPT_NAME_SANS_EXTENSION" ;
mkdir -p $WORKDIR ; ## create dir if not exists
echo "##########################################" ; 
echo "## PRESENT WORKING DIRECTORY = $WORKDIR" ;
echo "##########################################" ; 

time_taken="$WORKDIR/tmp-time-taken-$THIS_SCRIPT_NAME_SANS_EXTENSION.txt" ;
echo "$(date) = START-TIME" > $time_taken
##############################################################################

##+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function STEP1_FUNC_RUN_DATA_UPDATE_PROGRAMS_FOR_EACH_APP () {
    ## Calling scripts for data update and syncing (add others as needed)
    ## app-mggk01-image-finder
    bash $REACTJS_APPS_ROOTDIR/app-mggk01-image-finder/run_step0-download-data-and-convert-to-json.sh ;
    ## app01-homepage
    bash $REACTJS_APPS_ROOTDIR/app01-homepage/run_step0-app-homepage-convert-csv-links-data-to-json.sh ;
    ##
}
####
function STEP2_FUNC_RENDER_APPS_AND_SYNC_BUILD_FOLDERS_TO_SERVER () {
    ## RUN THIS FUNCTION ONLY AT THE END
    bash $REACTJS_APPS_ROOTDIR/03_build_and_sync_apps_to_dreamobjects_by_rclone.sh ;
}
##+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

## CALLING FUNCTIONS
STEP1_FUNC_RUN_DATA_UPDATE_PROGRAMS_FOR_EACH_APP ;
STEP2_FUNC_RENDER_APPS_AND_SYNC_BUILD_FOLDERS_TO_SERVER ;
##+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

################################################################################
############################### PROGRAM ENDS ###################################
################################################################################
echo "$(date) = END-TIME" >> $time_taken
cat $time_taken
