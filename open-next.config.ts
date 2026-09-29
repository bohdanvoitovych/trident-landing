import { defineCloudflareConfig } from '@opennextjs/cloudflare'

// Defaults only. The demo has no ISR and no on-demand revalidation, so there is
// no incremental cache (R2/KV) to wire up.
export default defineCloudflareConfig()
