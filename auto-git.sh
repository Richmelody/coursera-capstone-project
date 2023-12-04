#!/bin/bash

# Prompt for a commit message
read -p "Enter your commit message: " commit_message

# Commit all changes
git add .
git commit -m "$commit_message"

# Push to the remote repository
git push

