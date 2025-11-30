---
sidebar_position: 1
title: Command Line Options
description: A quick reference for common HTTPie flags.
---

# Command Line Options Reference

Use this cheat sheet to quickly find the flag you need.

## Request Items
| Flag | Description | Example |
| :--- | :--- | :--- |
| `-j`, `--json` | (Default) Set Content-Type to application/json | `http -j PUT ...` |
| `-f`, `--form` | Serialize data as form fields | `http -f POST ...` |
| `-m`, `--multipart` | Force multipart/form-data | `http -m POST ...` |

## Output Options
| Flag | Description | Example |
| :--- | :--- | :--- |
| `-v`, `--verbose` | Print the whole request and response | `http -v GET ...` |
| `-h`, `--headers` | Print only the response headers | `http -h GET ...` |
| `-b`, `--body` | Print only the response body | `http -b GET ...` |
| `--offline` | Build request but don't send (dry run) | `http --offline ...` |

## Authentication
| Flag | Description | Example |
| :--- | :--- | :--- |
| `-a`, `--auth` | Basic Auth credentials | `-a user:pass` |
| `--auth-type` | Specify auth method (basic, digest) | `--auth-type digest` |
