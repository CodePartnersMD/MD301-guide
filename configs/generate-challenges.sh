replace_solutions(){
  perl -0pe 's/<solution>[\s\S]*?<\/solution>/ Solution code here.../g' $1solutions.test.js > $1challenges.test.js
}
export -f replace_solutions

ls -d ../curriculum/**/fundamentals/ | xargs -I % bash -c 'replace_solutions %'
