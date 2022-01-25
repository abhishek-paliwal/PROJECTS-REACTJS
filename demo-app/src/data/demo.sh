#/bin/bash

myfile="mggk_summary_cloudflare_ImagesUrlsWPcontentUploads.txt" ; 

echo "[" ;
while read line; do
echo "{ \"url\" : \"$line\" }," 
done < $myfile ;

echo "{ \"url\" : \"https://www.mggk.com/\" }
]" ;
