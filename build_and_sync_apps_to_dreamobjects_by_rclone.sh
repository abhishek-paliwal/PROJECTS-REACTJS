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
    ## Run this app to sync the build folders of all apps to dreamobjects server.
    ## This program needs rclone tool to function.
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
WORKDIR="$DIR_Y/_OUTPUT_$THIS_SCRIPT_NAME_SANS_EXTENSION" ;
mkdir -p $WORKDIR ; ## create dir if not exists
echo "##########################################" ; 
echo "## PRESENT WORKING DIRECTORY = $WORKDIR" ;
echo "##########################################" ; 

time_taken="$WORKDIR/tmp-time-taken-$THIS_SCRIPT_NAME_SANS_EXTENSION.txt" ;
echo "$(date) = START-TIME" > $time_taken
##############################################################################

REACTJS_APPS_ROOTDIR="$REPO_REACTJS" ;
DREAMOBJECTS_SERVER="objects-us-east-1.dream.io" ;
ROOT_DOMAIN="abhishekpali.us" ; 
outfile1="$WORKDIR/step1.txt" ;

########################################
function FUNC_STEP1_GET_ALL_BASE_PROJECTS_DIRS () {
    outFile="$outfile1" ; 
    fd -I -t d -d1 --search-path="$REPO_REACTJS" > $outFile ; 
}
####
function FUNC_STEP2_BUILD_APPS_USING_NPM () {
    while read projectDir;
        cd $projectDir ;
        npm run build ; 
        cd $REACTJS_APPS_ROOTDIR ; 
    done < "$outFile1" ;
}
####
function FUNC_STEP3_CREATE_DIRS_ON_DREAMOBJECTS () {
    while read projectDir;
        APP_BASE_DIR="$(basepath $projectDir)" ; 
        PATH_REMOTE="$APP_BASE_DIR.$ROOT_DOMAIN" ;
        echo ">> CREATING REMOTE DIRECTORY => dreamobjects:$PATH_REMOTE" ; 
        #rclone mkdir dreamobjects:app02-foodblogfeeds.abhishekpali.us ;
        echo "rclone mkdir dreamobjects:$PATH_REMOTE" ; 
    done < "$outFile1" ; 
    echo ">> LISTING REMOTE DIRECTORIES ..." ; 
    rclone lsd dreamobjects: ; 
}
####
function FUNC_STEP4_SYNC_BUILT_APPS_TO_DREAMOBJECTS () {
    while read projectDir;
        APP_BASE_DIR="$(basepath $projectDir)" ; 
        APP_BUILD_DIR="$projectDir/build" ; 
        PATH_REMOTE="$APP_BASE_DIR.$ROOT_DOMAIN" ;
        echo ">> SYNCING TO REMOTE DIRECTORY => ( $APP_BUILD_DIR/ => dreamobjects:$PATH_REMOTE/ )" ;
        #rclone sync ./ dreamobjects:app-mggk01-image-finder.abhishekpali.us/ ; 
        rclone sync "$APP_BUILD_DIR/" dreamobjects:$PATH_REMOTE/ ; 
    done < "$outFile1" ;
}
####
function FUNC_STEP5_DISPLAY_CLOUDFLARE_DNS_CNAME_SETUP_INSTRUCTIONS () {
    echo ">> DON'T FORGET TO ADD FOLLOWING CNAMES TO CLOUDFLARE DNS FOR DOMAIN => $ROOT_DOMAIN" ;  
    while read projectDir;
        APP_BASE_DIR="$(basepath $projectDir)" ; 
        PATH_REMOTE="$APP_BASE_DIR.$ROOT_DOMAIN" ;
        PATH_CLOUDFLARE="$APP_BASE_DIR.$ROOT_DOMAIN.$DREAMOBJECTS_SERVER" ;
        success "CNAME => $PATH_REMOTE => $PATH_CLOUDFLARE" ;
        info "      >> Finally, check this app at => $PATH_CLOUDFLARE/index.html" ; 
    done < "$outFile1" ;
}
########################################

## Calling all functions sequentially
FUNC_STEP1_GET_ALL_BASE_PROJECTS_DIRS ; 
FUNC_STEP2_BUILD_APPS_USING_NPM ;
FUNC_STEP3_CREATE_DIRS_ON_DREAMOBJECTS ;
FUNC_STEP4_SYNC_BUILT_APPS_TO_DREAMOBJECTS ;
FUNC_STEP5_DISPLAY_CLOUDFLARE_DNS_CNAME_SETUP_INSTRUCTIONS ;

################################################################################
############################### PROGRAM ENDS ###################################
################################################################################
echo "$(date) = END-TIME" >> $time_taken
cat $time_taken
