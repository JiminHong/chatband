# ChatBand

## What is ChatBand?
![alt text](https://github.com/JiminHong/chatband/blob/master/public/img/chatband_logo.png "Logo Title Text 1")


For musicians who love to manage gigs & communicate with band members Chatband is a group-friendly message and menager app.

## Main Features

1. Messaging your band members
⋅⋅⋅Users can create a private chat with their musician
friends or your band members. In addition, user can create
a group chat to communicate with his/her band
members. Users can always invite new members to their
group chat easily.

2. Organizing different band groups & events
⋅⋅⋅Musicians normally have more than one group to
work with. Each group has different members, schedules,
and the way to communicate. In order to stop this
confusion, ChatBand lets users organize their multiple
different groups. Another feature that makes
user’s life convenient is RSVP function. A leader can
add potential musicians to the group, let them
take a look the gigs, and let them decide if they are
available to participate this gig.

3. Sharing video and audio files with your members
⋅⋅⋅Musicians watch videos and listens to the music for
many reasons such as reference for their next concert or
tutorials. In case they want to share those videos
they can share them with their own group members.

## Tech Spec
It is currently using a MEAN Stack (MongoDB, ExpressJS, AngularJS, and NodeJS) and version of this app is 5.0.0.

## Installation

Make a directory to store this file.
```
$ mkdir YOUR_FOLDER_NAME
```

Go into the directory you made.
```
$ CD /YOUR_FOLDER_NAME
```

Create an empty Git repository or reinitialize an existing one.
```
$ git init
```

Create/Add a remote.
```
$ git remote add YOUR_REMOTE_NAME https://github.com/JiminHong/chatband.git
```

Pull down the code from master branch
```
$ git pull github master
```

Install NPMs

```
$ npm install
```

Run the server

```
$ ENV=development node server
```

Open another tab (command + t) and Compass Watch

```
$ cd public
```
```
$ compass watch
```

## Database
Heroku Database uri : mongodb://jhong:jhong@ds055545.mongolab.com:55545/heroku_sf66wt12

## Do you see any typekit error?
I have two typekit using. One for local and one for heroku. If you go to public/index.html you will see the script for typekit. You can delete one of them depending on what you are testing on.
