---
sidebar_position: 1
title: Installation
description: Modern, user-friendly HTTP client for the API era. HTTPie is designed for testing, debugging, and interacting with HTTP APIs.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation

Ready to make APIs human-friendly? Let’s get **HTTPie** installed on your machine. 

## Objective
By the end of this guide, you will have the HTTPie Command Line Interface (CLI) installed and verified on your operating system.

## Prerequisites
* Access to a terminal or command prompt.
* Administrator or `sudo` privileges on your machine.

## Step-by-Step Instructions

Select your operating system below to see the specific commands.

**macOS:**
<Tabs>
  <TabItem value="mac" label="macOS" default>

We recommend using **Homebrew** for the easiest maintenance.

1.  Open your terminal.
2.  Run the installation command:
    ```bash
    brew install httpie
    ```
3.  Wait for Homebrew to link the binary.

  </TabItem>
  <TabItem value="win" label="Windows">
    
**Windows:**
    
You can install HTTPie via **Winget**, **Scoop**, or **Chocolatey**.

1.  Open PowerShell or Command Prompt.
2.  Run **one** of the following commands:

    **Using Winget (Recommended):**
    ```powershell
    winget install httpie
    ```

    **Using Chocolatey:**
    ```powershell
    choco install httpie
    ```

  </TabItem>
  <TabItem value="linux" label="Linux">

HTTPie is available in most package managers.

**Debian/Ubuntu:**
```bash
curl -SsL [https://packages.httpie.io/deb/KEY.gpg](https://packages.httpie.io/deb/KEY.gpg) | sudo gpg --dearmor -o /usr/share/keyrings/httpie.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/httpie.gpg] [https://packages.httpie.io/deb](https://packages.httpie.io/deb) ./" | sudo tee /etc/apt/sources.list.d/httpie.list
sudo apt update
sudo apt install httpie
```

**Fedora/RHEL:**
```bash
sudo dnf install httpie
```

**Arch Linux:**
```bash
sudo pacman -S httpie
```

</TabItem> <TabItem value="python" label="Python (Universal)">


If you have Python installed, you can use <code>pip</code> on any OS.

```bash
pip install httpie
```

</TabItem> </Tabs>

## Verification
Let’s make sure everything is working correctly

1. Run the version command:

```bash
http --version
```
2. You should see an output similar to <code>3.2.2</code> (or the latest version).

>  Troubleshooting If your terminal says `command not found`, try restarting your terminal session to refresh your system paths.
