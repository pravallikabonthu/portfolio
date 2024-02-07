##### How to start creating Portfolio Resume#####
1.created repository in github
2.In Vs code cloned the repository (connect your github in vscode so it will automaticaaly takes the repository)
3.create react app - npx-create-react-app ./
4.npm start
(Git commands ---add,commit,push)
#####################
git init
git add README.md
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/pravallikabonthu/portfolio.git
git push -u origin main
########################
let's make a folder structure
-Remove the unnecessary files(app.tes.js , logo.svg , setupTest.js)
-Add folders under
 src -
        - assets
            -images
        - components
            - profile
            - header
            - footer
            - timeline
            - button
            -ImageGalley
        - pages
            - Resume
            - portfolio
        - utils
            - resumeDate.js


Note:
----
links(material-ui): https://mui.com/material-ui/react-dialog/
link(Gallery-ui) :  https://www.npmjs.com/package/react-image-gallery


deploy the code:
    1.firebase init
    2.firebase deploy
1.npm install -g firebase-tools or (sudo npm install -g firebase-tools)
    if you want to login differemt account and use firebase logout
2.firebase login
3.select hosting operations
4.select public : build
5.configure as single page app: yes
6.set up automatic builds with github: no
7.npm run build
    if you want to do change and deploy it again.you need to use two commands:
        1.npm run build
        2.firebase deploy

