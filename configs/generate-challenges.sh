replace_solutions(){
  perl -0pe 's/<solution>[\s\S]*?<\/solution>/ Solution code here.../g' $1solutions-14.test.js > $1challenges-14.test.js
}
export -f replace_solutions

ls -d ../curriculum/14-google-books/challenges/ | xargs -I % bash -c 'replace_solutions %'
