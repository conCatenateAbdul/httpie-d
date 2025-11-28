---
sidebar_position: 2
title: Error Codes
description: Understand what the exit codes mean for scripting.
---

# Exit Codes

When scripting with HTTPie, checking the exit code `$?` allows your script to react to failures.

| Code | Meaning | Explanation |
| :--- | :--- | :--- |
| `0` | **Success** | The request was sent and HTTPie finished normally. |
| `1` | **Error** | Generic internal error (e.g., syntax error in command). |
| `2` | **Plugin Error** | An installed plugin crashed. |
| `3` | **Key Interrupt** | User cancelled (Ctrl+C). |
| `4` | **Network/Status** | Connection failed OR `--check-status` failed (e.g., 404/500). |
| `5` | **SSL Error** | Certificate verification failed. |
| `6` | **Too Many Redirects** | Use `--max-redirects` to increase limit. |

## Example Usage

```bash
http --check-status GET google.com
if [ $? -eq 4 ]; then
  echo "Server returned a 4xx or 5xx error!"
fi
