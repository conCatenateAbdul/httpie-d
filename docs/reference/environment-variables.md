---
sidebar_position: 3
title: Environment Variables
description: Configure HTTPie globally using system variables.
---

# Environment Variables

You can configure HTTPie's behavior globally without adding flags to every command. This is useful for setting up proxies or changing the default configuration directory.

## Configuration Directory

| Variable | Description | Default (Linux/Mac) |
| :--- | :--- | :--- |
| `HTTPIE_CONFIG_DIR` | Where HTTPie stores sessions and config files. | `~/.config/httpie` |

## Proxy Settings
HTTPie respects the standard system proxy variables. If you work in a corporate environment, set these in your `.bashrc` or `.zshrc`.

| Variable | Description | Example |
| :--- | :--- | :--- |
| `HTTP_PROXY` | Proxy for HTTP requests. | `http://10.10.1.10:8080` |
| `HTTPS_PROXY` | Proxy for HTTPS requests. | `https://10.10.1.10:8080` |
| `NO_PROXY` | Hosts to exclude from proxying. | `localhost,127.0.0.1,internal.corp` |

## Default Options
To apply specific flags to **every** request automatically, use `HTTPIE_DEFAULT_OPTIONS`.

**Example:** Always use the `solarized` style and always follow redirects.

```bash
export HTTPIE_DEFAULT_OPTIONS="--style=solarized --follow"
```

Now, running `http google.com` is equivalent to http `--style=solarized` `--follow google.com`.

:::warning Overriding Defaults Be careful when scripting! If you set HTTPIE_DEFAULT_OPTIONS in your local environment, your scripts might behave differently on other machines that don't have those variables set. :::
