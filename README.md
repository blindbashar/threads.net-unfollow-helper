## Threads.net Unfollow Helper Script

# Use
1. Navigate to www.threads.net and log in
2. Click on "#,### followers" in your bio
3. Switch to the 'Following' tab
4. Paste this script into your browser's dev console
5. Manually click through the stack of 'Unfollow' bubbles
6. Scroll down the 'Following' list to load more profiles
7. Repeat

### Tested and works on Firefox and Chrome.

## Bonus points:

Steps to Add a Bookmarklet:

1. Create a New Bookmark (Any Page):
- You can't directly create a bookmarklet without first creating a regular bookmark. So, start by bookmarking any page. It doesn't matter which one. You can do this by:
  - Clicking the star icon in the address bar.
  - Pressing Ctrl+D (Windows/Linux) or Cmd+D (macOS).
  - Right-clicking on a page and selecting "Bookmark This Page".
  - Going to "Bookmarks" > "Bookmark This Page" in the Firefox menu.

2. Edit the Bookmark:
- Find the bookmark you just created. The easiest way is usually:
  - Bookmarks Toolbar: If the bookmark is on your toolbar, right-click on it.
  - Bookmarks Menu: If it's in the Bookmarks menu, click the menu, find the bookmark, and right-click on it.
  - Bookmarks Manager: Press Ctrl+Shift+O (Windows/Linux) or Cmd+Shift+O (macOS) to open the Library (Bookmarks Manager). Find your bookmark there, and right-click it.
    - From the right-click menu, select "Edit Bookmark" (or a similar option like "Properties" – the wording might vary slightly depending on your Firefox version).

3. Paste the JavaScript Code:
- Crucially: In the edit window, find the field labeled "Location" (or sometimes "URL"). This is where the magic happens.
- Replace the existing URL with your bookmarklet code. The code must start with javascript:. This prefix tells the browser to execute the code instead of treating it as a web address.

#### ORIGINAL README
##### https://github.com/sanderbell/unfollow-on-threads
```
Mass Unfollow on Threads.net

Overview

This script allows you to mass unfollow accounts on Threads.net 

Prerequisites

Before using this script, ensure that you have the following:

- Google Chrome: The script is designed to run in the Google Chrome browser.

Instructions

1. Open Google Chrome and navigate to the Threads website
2. Log in to your account
3. Go to your profile by clicking on your profile picture or name
4. Click on the 'Following' tab to see the list of accounts you are following
5. Open JavaScript console
6. Execute the script
```
