#!/bin/bash

# pulls new material from cms and theme
# redeploys 
function update {
  git pull origin master; 
  git submodule update --remote themes/hugo-pathways-theme; 
  git add .; 
  git commit -m "updated theme"; 
  git push origin master; 
}

# engineering
engineering=/Users/tatecarson/Documents/webDev/Websites/Pathways/pre-engineering
for dir in "$engineering"/*; do
    if test -d "$dir"; then
      cd $dir; 
      update; 
    fi
done

# ddem
ddem=/Users/tatecarson/Documents/webDev/Websites/Pathways/ddem
for dir in "$ddem"/*; do
    if test -d "$dir"; then
      cd $dir; 
      update; 
    fi
done

# computational thinking 
cs=/Users/tatecarson/Documents/webDev/Websites/Pathways/computational-thinking
for dir in "$cs"/*; do
    if test -d "$dir"; then
      cd $dir; 
      update; 
    fi
done

# computational thinking 
bio=/Users/tatecarson/Documents/webDev/Websites/Pathways/biomedical
for dir in "$bio"/*; do
    if test -d "$dir"; then
      cd $dir; 
      update; 
    fi
done
