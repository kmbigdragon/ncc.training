# 1. Setup & Connectivity

### Authentication:
We can use 2 types of Authentication below
- **HTTPS:** Usually I use this in my personal laptop where I got GitHub CLI installed and logged in (using a browser to login).
- **SSH:** This is logging in using a key that generated in the computer that is used to connect to GitHub/GitLab by adding the public key. I mostly use this in the VPS or server I manage.

### Remote Management:
- `git remote -v` is used to list connected remotes. For example, in my ML project:

  `PS D:\WORKSPACE\ML\fraud-detection> git remote -v`

  origin  https://github.com/kmbigdragon/fraud-detection.git (fetch)

  origin  https://github.com/kmbigdragon/fraud-detection.git (push)
- `git remote add origin <url/ssh>` is used very often to connect to a remote HTTPS/SSH git on GitHub/GitLab... and name that remote "origin".

- `git remote set-url <remote_name> <url/ssh>` is used to change the url/ssh of the remote named `<remote_name>`.


# 2. Regular Workflow
### Staging & Committing:
- `git add .` is to stage all the added/modified/deleted files.
- `git add <directory/file>` is to stage a single directory or file.
- `git commit -m <message>` is to commit the staged contents with a message, like "fixed bugs" or something else.
### Syncing:
- `git fetch` is used to only download the data without merging directly into the content we are currently working with.
- `git pull` is fetching and merging directly into stuffs we're working with.
- `git push -u <remote_name> <branch>` is to upload commits to branch `<branch>` on remote named `<remote_name>`.


# 3. Branching & Navigation
### Management:
- `git checkout -b <name>` is used to create a new branch and switch to that branch.
- `git branch -d <name>` is used to delete a branch named `<name>`.
### Navigation:
- `git checkout <branch>` is used to switch to an existing branch with its contents.
- `git checkout <commit_hash>` is used to inspect a commit in the history with commit hash but not being in any branch.
- `git checkout -- <file_name>` is to discard the uncommitted changes in the file named `<file_name>`.


# 4. Merging Strategies
### Standard merge:
- `git merge <branch>` is used to merge the branch name `<branch>` into current branch.
### Merge types:
- **No Fast Forward (`--no-ff`)** is to merge and generate a merge commit usually `Merge branch <branch_name> of <url>`.
- **Fast Forward:** is used in case of there are no commits on the current branch till the target branch's latest commit, to merge target branch into current branch without creating a merge commit and linearize them.
- **Squash (`--squash`)** is used to combine all commits in the target branch into one single commit into current branch(not creating a merge commit).
### Cross Branch 
- `git pull <remote_origin> <other_branch>` is used to fetch the data from other_branch and then merge into current branch. Adding `--rebase` is to make a rebasement instead of merging.

# 5. Context Switching
- `git stash` is to save the ongoing state into a stack.
- `git stash list` is to view list of saved stashes.
- `git stash apply` is to apply stash but still keep it in stack (like peek).
- `git stash pop` is to apply and remove stash from the stack.

# 6. History Manipulation & Reset
### Reset:
- `git reset --soft` is to soft reset (undo commit keeping changes staged).
- `git reset --mixed` is to undo commit and make changes unstaged.
- `git reset --hard` is to hard reset (undo commit and undo all changes made).
### Force Push:
- `git push --force` is to force push without caring about conflicts, overwrite the remote history (Should only be used in feature-branch, not main or master).