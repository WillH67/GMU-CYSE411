# 12. Real-World Case Study – Broken Access Control (IDOR)

Before completing the next part of the exercise, students must review the following real-world examples of **Broken Access Control / IDOR vulnerabilities**.

Recommended references:

OWASP Top 10 – Broken Access Control  
https://owasp.org/Top10/A01_2021-Broken_Access_Control/

Example case discussion (HackerOne / Bug Bounty style reports):

https://hackerone.com/reports/39767

In multiple real-world incidents, attackers discovered that web applications exposed predictable identifiers in URLs or API endpoints such as:

```
/api/user/1021
/api/user/1022
/api/user/1023
```

If the backend system **does not verify whether the requesting user is authorized to access the resource**, an attacker can enumerate identifiers and retrieve data belonging to other users.

This vulnerability class has affected:

- Universities
- Healthcare portals
- Banking APIs
- Social media platforms

In many cases, attackers were able to collect large datasets containing:

- Personal information
- Account details
- Financial records
- Academic records

This type of attack is particularly dangerous because it often requires **very little technical skill** once the endpoint is discovered.

---

# 13. Threat Treatment and Security Controls

After ranking the threats using DREAD, the next step is to determine **how the organization should respond to these risks**.

Threat treatment involves selecting actions to manage the identified risks.

Typical treatment options include:

| Treatment | Description |
|-----------|-------------|
| Accept | The risk is acknowledged but no mitigation is implemented |
| Avoid | The system design is changed to eliminate the risk |
| Transfer | The risk is transferred to another party (e.g., insurance or outsourcing) |
| Mitigate | Controls are implemented to reduce likelihood or impact |

Most security engineering activities focus on **mitigation**.

---

# 14. Security Control Types

Security controls can be categorized according to their role in the system lifecycle.

| Control Type | Purpose | Example |
|--------------|---------|--------|
| Preventive | Prevent attacks from occurring | Access control, authentication, input validation |
| Detective | Detect attacks in progress or after occurrence | Logging, monitoring, IDS |
| Corrective | Restore system functionality after an attack | Backups, patching, incident response |

These categories correspond to the **defense strategy used by the organization**.

---

# 15. Mitigation Exercise

For each threat identified earlier, propose **at least one security control**.

Your controls must include **at least one example of each control type**:

- Preventive
- Detective
- Corrective

Complete the following table.

| Threat | Preventive Control | Detective Control | Corrective Control |
|------|------|------|------|
| Threat 1 | | | |
| Threat 2 | | | |
| Threat 3 | | | |
| Threat 4 | | | |
| Threat 5 | | | |

Hints:

Examples of preventive controls for this system may include:

- Authorization checks on API endpoints
- Role-based access control (RBAC)
- Input validation

Examples of detective controls may include:

- API request logging
- Anomaly detection
- Security monitoring

Examples of corrective controls may include:

- Revocation of compromised credentials
- Data restoration from backups
- Incident response procedures

---

# 16. Final Reflection

Briefly answer the following questions:

1. Which mitigation controls reduced **Likelihood**?
2. Which controls reduced **Impact**?
3. Do you believe preventive controls alone are sufficient to secure the system?
4. How could architectural changes reduce the attack surface?

---

# 17. Instructor Notes (Optional)

This exercise intentionally separates three security engineering activities:

1. **Threat Identification** – understanding how attackers interact with the system
2. **Threat Ranking** – prioritizing threats using DREAD
3. **Threat Treatment** – selecting appropriate security controls

The goal is to demonstrate that **security engineering is a structured decision-making process**, not only vulnerability discovery.