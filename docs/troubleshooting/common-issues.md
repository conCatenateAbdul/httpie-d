---
sidebar_position: 1
title: Common Issues
description: Solutions for SSL errors, timeouts, and connection refusals.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🛠️ Common Issues

Even the best tools encounter network hiccups. This guide helps you diagnose and fix the most frequent errors quickly.

## Objective
Diagnose and fix connectivity and SSL issues when using HTTPie.

## SSL Handshake Process
Understanding where the connection fails can help you pinpoint the issue. Here is a simplified view of the SSL/TLS handshake:

```mermaid
sequenceDiagram
    participant C as Client (HTTPie)
    participant S as Server
    
    Note over C,S: 1. Connection Establishment
    C->>S: ClientHello (I support TLS 1.2, 1.3)
    S-->>C: ServerHello (Let's use TLS 1.3)
    
    Note over C,S: 2. Certificate Exchange
    S-->>C: Server Certificate 📜
    
    alt Certificate Invalid?
        C->>C: ❌ Verification Failed!
        C--xS: Close Connection
    else Certificate Valid
        C->>C: ✅ Trusted!
    end
    
    Note over C,S: 3. Secure Session
    C->>S: Key Exchange
    C<->S: 🔒 Encrypted Data Transfer
```

## Troubleshooting Guide

<Tabs>
  <TabItem value="ssl" label="🔒 SSL/TLS Errors" default>

### SSL Certificate Verification Failed

:::danger Error
`requests.exceptions.SSLError: [SSL: CERTIFICATE_VERIFY_FAILED]`
:::

**Cause:**
You are connecting to a server with a **self-signed** or **expired** certificate. This is very common in staging or development environments.

**Solution:**
You can bypass verification using the `--verify=no` flag.

:::warning Security Risk
Only use this for trusted internal servers. Never use it for production sites!
:::

```bash
http --verify=no GET https://internal-api.local
```

  </TabItem>
  <TabItem value="timeout" label="⏱️ Timeouts">

### Connection Timeout

:::danger Error
`requests.exceptions.ConnectTimeout: HTTPSConnectionPool(...) Read timed out.`
:::

**Cause:**
The server is taking too long to respond, or a firewall is blocking the connection.

**Solution:**
Increase the default timeout limit (usually 30s) to allow for slower responses.

```bash
# Set timeout to 60 seconds
http --timeout=60 GET https://slow-api.example.com
```

  </TabItem>
  <TabItem value="refused" label="🚫 Connection Refused">

### Connection Refused

:::danger Error
`requests.exceptions.ConnectionError: [Errno 111] Connection refused`
:::

**Cause:**
*   The server is **down**.
*   You are connecting to the **wrong port**.
*   The application is not listening on `localhost`.

**Solution:**
Check if the service is running and listening on the expected port.

```bash
# Check if port 8000 is open
http GET localhost:8000
```

  </TabItem>
</Tabs>
