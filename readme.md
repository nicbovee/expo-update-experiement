# Expo Updates Experiment

An attempt to understand what happens to the over-the-air updates when a project is transferred to another org.

## Findings
* `expo-updates` is magic. When you install expo updates and you get your build pointed to a channel and the channel pointed to a branch, your updates will be installed on app launch unless you set `checkAutomatically` in the `updates` block of `app.json` to `ON_ERROR_RECOVERY.` There seemed to be a generic error when I immediately try to install updates again using `Updates.fetchUpdatesAsync()`. 
* I knew that you couldn't get updates in dev mode, but I didn't realize you could publish a simulator build that points to the channel you push updates to and that would let you quickly test out updates.