---
sidebar_position: 3
title: API Testing
description: Use HTTPie in scripts and CI/CD pipelines to verify API health.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# API Testing & Scripting

HTTPie isn't just for manual exploration; it is a powerful tool for automated testing. You can use it to verify that your API returns the correct status codes and data structures.

## Objective
You will learn how to use HTTPie's check-status flags and exit codes to write a simple API test script.

## Prerequisites
* Basic command line knowledge (Bash/Shell).
* An API endpoint to test.

## enforcing Status Codes
By default, HTTPie exits successfully (code `0`) even if the API returns a 404 or 500 error. To use HTTPie in a CI/CD pipeline, you need it to fail when the API fails.

### The `--check-status` Flag
This flag tells HTTPie to exit with an error code if the HTTP status is not 200 OK.

<Tabs>
  <TabItem value="pass" label="Scenario: Success" default>

**Command:**
```bash
http --check-status GET httpbin.org/status/200
```

**Result:**
<ul>
  <li>Output: Shows the HTTP 200 response.</li>
  <li>Exit Code: <code>0</code> (Success).</li>
  <li>Pipeline: Continues to the next step.</li>
</ul>

</TabItem> <TabItem value="fail" label="Scenario: Failure">

**Command:**
```bash
http --check-status GET httpbin.org/status/404
```
**Result**
<ul>
  <li>Output: Shows the HTTP 404 response.</li>
  <li>Console <code>Error: http: error: 404 Not Found</code></li>
  <li>Exit Code: <code>4</code> [(See Error Codes)] (https://github.com/conCatenateAbdul/httpie-d/docs/guides/troubleshooting)</li>
  <li>Pipeline: Stops immediately.</li>
</ul>
  </TabItem>
</Tabs>

**Scripting Example**
You can combine HTTPie with standard shell tools like grep to verify specific data fields.

```powershell
#!/bin/bash

# 1. Store the token (simulated)
TOKEN="12345"

# 2. Check if the user is active
# We use -b (body only) and pipe to grep
response=$(http -b GET httpbin.org/json)

if echo "$response" | grep -q '"slideshow"'; then
  echo "✅ Test Passed: Slideshow field exists."
else
  echo "❌ Test Failed: API response structure changed."
  exit 1
fi
```

**Explanation**
<ul>
  <li><code>--check-status:</code> Transforms HTTP errors into System errors.</li>
  <li><code>-b</code> / <code>--body:</code> Outputs only the JSON payload, making it easier for tools like <code>grep</code> or <code>jq</code> to parse.</li>
</ul>
