# Mission: Safely change Fabric infrastructure

## Why
Build enough repository-specific understanding to modify or extend Fabric infrastructure without crossing client, environment, identity, data, or eventing boundaries.

## Success looks like
- Trace infrastructure from client configuration through Terraform, Argo CD, Helm, and runtime resources
- Predict which clients, tiers, namespaces, identities, vaults, networks, and managed services a change will affect
- Explain subsystem boundaries such as Atlas persistence and Dapr-backed eventing
- Review a Terraform plan and identify unsafe scope, access, replacement, connectivity, or resilience changes

## Constraints
- Treat repository code and primary vendor documentation as authoritative
- Never apply infrastructure while learning; use read-only inspection and plans

## Out of scope
- Application business logic, database schema design, and production data migrations
- General cloud concepts that do not affect this Fabric repository
