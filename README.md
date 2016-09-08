# PebbleBE watchface
An analog Pebble watchface based on Rocky.js. Displays the title and date of the next PebbleBE event on Meetup.
Used to demo and teach Rocky.js during @[DriesOeyen](https://nexworx.com)'s [PebbleBE](http://www.meetup.com/pebblebe/) talk on September 8, 2016.

This watchface has not been published to the Pebble appstore, since the appstore doesn't support Rocky.js apps at this time.

![Screenshot](https://raw.githubusercontent.com/DriesOeyen/pebblebe-face-pebble/master/screenshot.png)

## Using this repository
The best way to learn from this repository, is to traverse its commits chronologically.
Open the commit history and begin by taking a look at the oldest commit. It implements a base app as a Hello World-style example.
When you understand what's happening, move on to the next commit. It will build upon the previous one and introduce new concepts.
Keep doing this for all commits in the repo.

When you end up at the last commit, you should have a good idea of how Rocky.js apps work.
You'll have a basic grasp of how you can implement features like drawing an analog watchface, displaying text and fetching data from the internet.
From there, you can use that knowledge to create your own Rocky.js-based projects. When you do, make sure to take a look at the links at the bottom of this page.

## Compatibility
Rocky.js watchfaces are compatible with the following hardware platforms: Basalt (Pebble Time and Pebble Time Steel), Chalk (Pebble Time Round) and Diorite (Pebble 2). Aplite (Pebble and Pebble Steel) is not supported.
This quick demo app was specifically created for Basalt. It should run on other supported platforms, but things may look weird.

If you don't have supported hardware, you can still run and play with the app in an emulator in your desktop browser.

## Build and run through your browser
You can easily import and build this project yourself – no local development tools required! You can then run the app in an emulator or even on your own watch.
Simply follow the steps below to build the project through CloudPebble, Pebble's official IDE that runs in your browser.

1. Log into CloudPebble at https://cloudpebble.net
2. Import this repo as a project:
   * Click the Import button
   * Select the Import from GitHub tab
   * Choose a name for your CloudPebble project
   * Enter this GitHub URL: github.com/DriesOeyen/pebblebe-face-pebble
   * Leave the default branch (master)
   * Leave Use as Git remote unchecked
   * Click Import
3. Plug in your Meetup API key:
   * In the sidebar, go to index.js under PebbleKit JS
   * At the top of the file, you'll see a meetup_api_key variable set to null
   * Grab your Meetup API key from: https://secure.meetup.com/meetup_api/key
   * Plug the API key into the meetup_api_key variable and save the file
4. Compile the project:
   * In the sidebar, go to Compilation
   * Click Run build
   * After the build completes, use the buttons that appear on the same screen to run the app in an emulator or send it to the Pebble connected to your phone.

## Additional resources
* Rocky.js tutorial: https://developer.pebble.com/tutorials/js-watchface-tutorial/part1/
* Rocky.js documentation: https://developer.pebble.com/docs/rockyjs/
* PebbleBE Meetup group: http://www.meetup.com/PebbleBE/
