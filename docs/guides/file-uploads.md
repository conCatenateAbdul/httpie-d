---
sidebar_position: 5
title: File Uploads
description: Upload binaries and verify multipart requests.
---

# File Uploads

*Note: This guide focuses specifically on binary data and multipart uploads. For standard form submissions, see the Basic Concepts guide.*

## Objective
Upload a local binary file (image, PDF) to a server endpoint.

## The Upload Syntax
To upload a file, use the `@` operator followed by the file path.

### 1. Simple File Upload
This sends the file as a `multipart/form-data` request.

```bash
http -f POST httpbin.org/post profile_pic@~/Images/me.jpg
```

### 2. Renaming the Field
Sometimes the API expects a specific field name (e.g., `avatar`).

```bash
http -f POST httpbin.org/post avatar@~/Images/me.jpg
```
### 3. Uploading Raw Body
If the API expects the raw file content (not wrapped in a multipart form) as the request body:

```bash
http POST httpbin.org/post @~/Documents/report.pdf
