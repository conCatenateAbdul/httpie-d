---
sidebar_position: 4
title: Authentication
description: Master the different authentication methods supported by HTTPie.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authentication Strategies

Most public APIs require you to prove your identity. HTTPie supports several authentication methods out of the box.

## Objective
You will authenticate requests using Basic Auth, Bearer Tokens, and API Keys.



## Prerequisites
* Credentials for the API you are accessing.

## Supported Methods

<Tabs>
  <TabItem value="basic" label="Basic Auth" default>

### Basic Authentication
The standard username/password scheme.

**Syntax:** `-a username:password`

**Command:**
```bash
http -a admin:secret GET httpbin.org/basic-auth/admin/secret
```

**Interactive Mode:** If you omit the password, HTTPie will prompt you securely so it doesn't appear in your shell history.
```bash
http -a admin GET httpbin.org/basic-auth/admin/secret
```
</TabItem> <TabItem value="bearer" label="Bearer Token">

**Bearer Token (JWT)**

Common in OAuth2 and modern web apps.

**Syntax:** `Authorization:"Bearer <token>"`

**Command:**
```bash
http GET httpbin.org/bearer Authorization:"Bearer my-jwt-token-123"
```
*<strong>Note<strong>: We manually set the header here, but you can also install the httpie-jwt-auth plugin for a dedicated flag.*

</TabItem> <TabItem value="netrc" label=".netrc File">

**The .netrc File**
Avoid typing credentials entirely by storing them in a `~/.netrc` file. HTTPie reads this automatically.

File Content (`~/.netrc`)

```powershell[plaintext]
machine api.example.com
login myuser
password mypassword
```

**Command:**
```bash
http [api.example.com/profile](https://api.example.com/profile)
```
*(No flags needed!)*

</TabItem> </Tabs>

**Explanation**

<ul>
  <li><code>-a</code> / <code>--auth</code>: The shorthand flag for Basic Auth.</li>
  <li>Header manipulation: For schemes like Bearer or API Keys (X-API-Key), simply setting the header is often the fastest method.</li>
</ul>
