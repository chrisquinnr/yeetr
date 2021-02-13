# Yeetr

For when you want to yeet things.

Yeetr provides a cli wrapper for various methods of sharing files. Sharing and serving are, by design, ephemeral. For persistent storage, sharing and deployments, you should use something else, like Netlify, Vercel, or roll your own S3 hosting.

## Use

```
npm install yeetr -g
```

Yeetr by default will offer a list of files in your current working directory. You can scroll through this list, or use the autocomplete function to narrow down the selection. Hit enter to confirm, and that's it.

## Built with

commander.js
inquirer

### Send

When you just want to send a file to someone, use

```
yeet send
```

Sending files uses [https://file.io], a wonderful service that provides ephemeral file storage.

You can specify the expiry, but remember that the link expires as soon as it's downloaded as well.

```
yeet s -t 1d
```

Using the `s` alias, we also pass the `-t` parameter to define the expiry time. Possible units

### Serve

Coming soon

## Options

## About

This package only exists because of the works of people far more talented than I. Building this was a learning experience for me in trying to develop a CLI in node.js. My goal was to focus on a simple and streamlined user experience.

## Etmology

![alt text](yeet.png 'I yought')
