# Fabric Infrastructure Resources

## Knowledge

- [Repository: environment vocabulary](../rtls-fabric-infrastructure/tf/modules/environment-data/locals.tf)
  Canonical tier and client-subbrand definitions. Use for: deciding what a tier or banner means in Fabric.
- [Repository: DMO client configuration](../rtls-fabric-infrastructure/tf/prod/ie-db/dmo/client-locals/locals.tf)
  Concrete client example defining shared Atlas clusters. Use for: tracing configuration into resources.
- [Repository: client Atlas core](../rtls-fabric-infrastructure/tf/prod/ie-db/dmo/core/compute_storage.tf)
  Creates Atlas projects, shared clusters, and workforce users. Use for: understanding the long-lived core state.
- [Repository: client compute persistence](../rtls-fabric-infrastructure/tf/prod/ie-db/dmo/compute-bootstrap/compute_storage.tf)
  Creates namespaced clusters and shared-cluster database access. Use for: understanding application-level persistence.
- [Repository: Atlas replica set](../rtls-fabric-infrastructure/tf/modules/compute/mongodb-atlas/atlas-replicaset/main.tf)
  The final `mongodbatlas_advanced_cluster` resource and backup policy. Use for: evaluating cluster changes.
- [Repository: Atlas blue/green user](../rtls-fabric-infrastructure/tf/modules/compute/mongodb-atlas/atlas-blue-green-user/main.tf)
  Password-user creation and rotation. Use for: understanding credentials and active-user selection.
- [MongoDB Atlas documentation: Projects](https://www.mongodb.com/docs/atlas/tutorial/manage-projects/)
  Primary documentation for Atlas project isolation and membership.
- [MongoDB Atlas documentation: Database users](https://www.mongodb.com/docs/atlas/security-add-mongodb-users/)
  Primary documentation for database-user authentication, roles, and scopes.
- [MongoDB Atlas Terraform provider: `mongodbatlas_advanced_cluster`](https://registry.terraform.io/providers/mongodb/mongodbatlas/latest/docs/resources/advanced_cluster)
  Provider contract for the cluster resource used by this repository.
- [MongoDB Atlas documentation: Azure workload identity federation](https://www.mongodb.com/docs/atlas/workload-oidc/)
  Primary documentation for passwordless workload identities.
- [Repository: compute event namespaces](../rtls-fabric-infrastructure/tf/dev/ie-db/dmo/compute-bootstrap/compute_events.tf)
  Derives event tiers and creates Azure Service Bus namespaces. Use for: tracing a Dapr-enabled namespace to its broker.
- [Repository: Dapr and eventing identities](../rtls-fabric-infrastructure/tf/modules/compute/cluster-bootstrap/application_identities.tf)
  Creates managed identities, role assignments, federated credentials, and Key Vault identity secrets. Use for: understanding runtime authentication.
- [Repository: Dapr Argo CD application](../rtls-fabric-infrastructure/charts/app-of-apps/latest/templates/dapr.yaml)
  Installs the official Dapr control-plane chart. Use for: locating cluster-level Dapr ownership.
- [Repository: data events](../rtls-fabric-infrastructure/tf/modules/data/data-events/main.tf)
  Creates the data-environment Service Bus, `fabric-data-etl` topic, and Databricks publisher credential.
- [Dapr documentation: Publish and subscribe overview](https://docs.dapr.io/developing-applications/building-blocks/pubsub/pubsub-overview/)
  Primary source for Dapr's broker-independent API, delivery semantics, and subscription models.
- [Dapr component documentation: Azure Service Bus Topics](https://docs.dapr.io/reference/components-reference/supported-pubsub/setup-azure-servicebus-topics/)
  Primary source for component metadata, Entra authentication, and entity-management behavior.
- [Microsoft Learn: Service Bus queues, topics, and subscriptions](https://learn.microsoft.com/azure/service-bus-messaging/service-bus-queues-topics-subscriptions)
  Primary source for durable messaging and topic fan-out semantics.
- [Microsoft Learn: AKS workload identity](https://learn.microsoft.com/azure/aks/workload-identity-overview)
  Primary source for Kubernetes service-account token federation into managed identities.
- [Repository: KFL multitenant infrastructure](../rtls-fabric-infrastructure/tf/prod/ie-db/kfl/compute-bootstrap/locals.tf)
  Concrete Assortment and Promo namespaces with tenant-specific and common MongoDB databases. Use for: tracing infrastructure isolation.
- [Repository: Assortment KFL deployment](../rtls-fabric-deployments/assortment/prod/clients/kfl/kfl.values.yaml)
  Declares KFL tenant keys, banner codes, allowed groups, and tenant-specific configuration. Use for: tracing deployment-time tenant wiring.
- [Repository: Promo KFL deployment](../rtls-fabric-deployments/promo/prod/clients/kfl/kfl.values.yaml)
  Declares the KLDE and KLSK tenants and their authorization groups. Use for: a second concrete multitenant deployment.
- [Repository: tenant database bootstrap](../rtls-fabric-infrastructure/tf/modules/compute/mongodb-atlas/atlas-shared-cluster-database/main.tf)
  Creates one database-scoped Atlas user and Key Vault connection string per tenant or common database.
- [Repository: Pricing request tenant context](../rtls-pricing/webtool/server/src/middleware/rtls-context.js)
  Validates tenant selection and user access before binding the request context. Use for: understanding the HTTP trust boundary.
- [Repository: Pricing asynchronous tenant context](../rtls-pricing/webtool/server/src/utils/rtls-context-storage.js)
  Couples Node AsyncLocalStorage tenant context to the active Mongo connection. Use for: understanding ambient routing.
- [Repository: Pricing analytics config accessor](../rtls-pricing/analytics/analytics/config_accessor.py)
  Merges tenant overrides and isolates the reserved common configuration in Python analytics.
- [OWASP Cheat Sheet: Multi-Tenant Security](https://cheatsheetseries.owasp.org/cheatsheets/Multi_Tenant_Security_Cheat_Sheet.html)
  Vendor-neutral security guidance on tenant context, authorization, isolation, background jobs, and observability. Use for: reviewing repository safeguards against established controls.

## Wisdom (Communities)

- Repository pull requests and the RTLS infrastructure maintainers
  Use for: validating whether a proposed client, tier, banner, or access change matches current operational intent.
