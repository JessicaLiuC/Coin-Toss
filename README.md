# Travel App

## Steps to test the app
1. Install the Expo Go app on your phone
2. cd into the Coin Toss directory 
    - first type `ls` to see what files are in your current location
    - if didn't see it, then `cd` to the location
3. run `npm install` (you only need to do this once when you first set up)
4. run `npx expo start`
5. scan the QR code in the terninal and the app should be launched

## Steps to go to your branch
!!! Very important: Don't work on main branch !!!
1. Check the branch in vscode 
    - one way is to check on your left bottom side of the screen
    - or run `git branch` 
2. If it is not your branch, run `git checkout -b [your branch]`
    - or you click on left buttom side of the screen and choose your branch

## Steps to upload your code to github
After you finish your coding, remember to upload your code from local to github
1. `git add [filename]`
2. `git commit -m [notes]`
3. `git push --set-upstream origin [your branch]`
Or... I'll do a live demo during next meeting for simpler way to upload code :p

## Steps to merge your branch with the main branch
1. `cd` to the main branch
2. `git pull`
3. `git merge [your branch]`