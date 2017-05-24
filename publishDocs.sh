#!/usr/bin/env bash
cd ./example-angular/
ng build --prod --aot false
rm -rf ../docs/*
cp -R ./dist/* ../docs/
cd ..
git add ./docs/.
git status
#MANUAL STEP - PUBLISH NEW DOCS: npm run commit