---
sidebar_position: 2
title: Output Options
description: Control what HTTPie prints to your terminal and how it looks.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Output Options

HTTPie aims to be human-readable by default. However, you often need to customize the output for scripts, debugging, or personal preference.

## Objective
Customize the output verbosity, formatting styles, and download behaviors.

## Controlling Visibility (`--print`)
By default, HTTPie prints the **response headers** and **response body**. You can change this using the `-p` (or `--print`) flag.

The flag accepts a string of characters:
* `H`: Request Headers
* `B`: Request Body
* `h`: Response Headers
* `b`: Response Body

<Tabs>
  <TabItem value="default" label="Default Behavior" default>

**Command:**
```bash
http httpbin.org/get
```
*Prints: Response Headers (`h`) + Response Body (`b`)*
</TabItem> <TabItem value="verbose" label="Verbose (-v)">

**Command:**
```bash
http -v httpbin.org/get
```
Prints: Whole Request (`HB`) + Whole Response (`hb`)
</TabItem> <TabItem value="custom" label="Custom (-p)">

**Command:**
```bash
http -p Hh httpbin.org/get
```
Prints: Only Request Headers (`H`) and Response Headers (`h`). Great for debugging caching without cluttering the screen with data.
</TabItem> </Tabs>

**Formatting & Colors**

**JSON Formatting (`--pretty`)**
HTTPie detects JSON and formats it automatically. You can force this behavior if the Content-Type header is missing.
<ul>
  <li> <code>--pretty=all</code> (Default): Colors and indentation.</li>
  <li><code>--pretty=colors:</code> Colors only.</li>
  <li><code>--pretty=format:</code> Indentation only.</li>
  <li><code>--pretty=none:</code> Raw output (fastest).</li>
</ul>

**Color Schemes (`--style`)**

Don't like the default colors? Switch themes.
```bash
http --style=solarized httpbin.org/get
```
*Common styles: `fruity` (default), `monokai`, `solarized`, `paraiso-dark`.*

**Downloading Data (`-d`)**

When the response is a binary file (like an image), HTTPie detects it and warns you. To save it, use the download flag.
**1. 1. Auto-save:** Uses the filename provided by the server (via `Content-Disposition`) or the URL.
```bash
http -d httpbin.org/image/png
```
**2. Custom filename:** Pipe output to a specific file.
```bash
http httpbin.org/image/png > my-image.png
