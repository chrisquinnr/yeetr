# Yeetr

For when you want to yeet things. Files mainly.

Yeetr provides a cli wrapper for various methods of sharing files. Sharing and serving are, by design, ephemeral, so, they will expire. For persistent storage, sharing and deployments, you should use something else, like Netlify, Vercel, or roll your own S3 hosting.

## Use

```
npm install yeetr -g
```

Yeetr by default will offer a list of files in your current working directory. You can scroll through this list, or use the autocomplete function to narrow down the selection. Hit enter to confirm, and that's it.

# Usage

## Send

When you just want to send a file to someone, use

```
yeet [dir] [expiry]
```

So just running `yeet` in your current directory will let you select a file and then use our default 1 day expiry for hosting.

Sending files uses [file.io](https://file.io), a wonderful service that provides ephemeral file storage.

You can specify the expiry time, but remember that the link expires as soon as it's downloaded as well.

```
// lists files in current dir
yeet

// current dir, expires in 3 days
yeet . 3d

// expires in 4 years
yeet . 4w

// another dir, in 2 months
yeet /Users/rasputin/gifs 2m
```

## Serve

We're going to yeet your entire static site. Coming soon

# Built with

- commander.js
- inquirer
- axios
- chalk

All of which are awesome and made by far more talented people than I.

# About

## What is this I don't even

Building this was a learning experience for me in trying to develop a CLI in node.js. My goal was to focus on a simple and streamlined user experience. I really enjoy well-designed CLI programs and wanted to try making one myself.

## Why only temporary storage?

Frequently in software development we need to

- swap snippets of code, documentation, configuration
- deliver an asset without polluting email threads or slack channels
- stage a project for someone to view

Uploading a file for sharing invariably leaves an artifact behind: a file attached to an email, or an old version of the documentation left rotting on a chat client somewhere.

For situations where you need one-time file sharing that auto-expires, just `yeet` it.

## How secure is this?

Only as secure as uploading something to internet. Which is probably not secure enough if you're asking this question.

If you want to securely share credentials I'd head on over to magic wormhole.

## Etmology

> Where's the file you sent?
>
> > Oh, I yote it over a couple hours aho

> Why's George so late?
>
> > He was yeeting files late last night to family and friends

![alt text](yeet.png 'I yought')
