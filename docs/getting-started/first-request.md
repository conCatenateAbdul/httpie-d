---
sidebar_position: 2
title: Your First Request
description: Make your first API call using HTTPie.
---

# Your First Request

Now that you have the toolbelt installed, let's verify that HTTPie lives up to its promise: making APIs simple.

## Objective
You will send a `GET` request to a public API and inspect the formatted, colorized response.



[Image of HTTP request response cycle]


## Prerequisites
* [Installation](./installation) is complete.
* Internet connection.

## The "Hello World" of HTTPie

In traditional tools like `curl`, you might need to add flags to format JSON or colorize output. HTTPie does this by default.

### Step 1: Send the Request
We will query the GitHub API. It is public, fast, and returns nice JSON data.

Copy and paste this command into your terminal:

```bash
http https://api.github.com/zen https://api.github.com/zen
```
