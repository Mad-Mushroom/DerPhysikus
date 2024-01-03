@echo off
title GitHub Upload bei deiner MUTTER

echo ### FETCHING ##############################################
git fetch
echo ### PULLING ###############################################
git pull

echo ### ADDING ################################################
git add .

set /p msg=Message? 
echo ### COMMITING #############################################
git commit -m "%msg%"
echo ### PUSHING ###############################################
git push

pause
exit
