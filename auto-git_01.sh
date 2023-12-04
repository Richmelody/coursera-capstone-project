#!/bin/bash

while true; do
  # Prompt for a commit message
  read -p "Enter your commit message: " commit_message

  # Commit all changes
  git add .
  git commit -m "$commit_message"

  # Push to the remote repository
  git push

  # Display message and wait for 5 minutes
  echo "Waiting for 5 minutes..."
  sleep 300  # 300 seconds = 5 minutes

  # Ask if the user wants to run it again immediately
  read -p "Do you want to run it again immediately? (y/n): " run_immediately

  if [ "$run_immediately" == "n" ]; then
    # If the user doesn't want to run it immediately, continue waiting
    continue
  fi

  # If the user wants to run it immediately, start the next iteration without waiting
done

