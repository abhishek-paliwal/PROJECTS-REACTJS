#/bin/bash

WORKDIR="${REPO_REACTJS}" ; 
echo ">> Current PWD => $WORKDIR" ; 

##++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function FUNC_CREATE_REACTJS_PROJECT () {
    echo ">> ENTER Name of the REACT APP project folder to create : " ; 
    read react_app_name ;
    npx create-react-app "$react_app_name" ;
    echo ">> REACT-JS app created. Contents of app folder listed below ..." ; 
    ls -al "$WORKDIR/$react_app_name" ; 
}
####
function FUNC_SELECT_FROM_OPTION () {
    echo ">> SELECT THE OPTION NUMBER FROM BELOW: " ; 
    select myOptn in "Create the ReactJS app" "Start the npm server" "Build react app" ;  do
        echo "You have chosen => $myOptn" ;
        ##++++++++++++
        case $myOptn in
        "Create the ReactJS app")
        FUNC_CREATE_REACTJS_PROJECT ; 
        ;;
        "Start the npm server")
        ## STARTING THE SERVER BUILDING AND RUNNING THE APP
        echo ">> STARTING THE NPM SERVER ..."  ; 
        npm start ; 
        ;;
        "Build react app")
        echo ">> BUILDING REACT APP ..."  ; 
        npm run build ; 
        ;;
        *)
        echo "*** Invalid entry. Breaking out. ***"
        break ;
        ;;
        esac
        ##++++++++++++
    done
}
##++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

## CALL FUNCTION
FUNC_CREATE_REACTJS_PROJECT ;
