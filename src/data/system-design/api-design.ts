import { Question } from "@/components/QuestionAccordion";
import restVsGraphql from "@/assets/images/rest-vs-graphql.png";
import idempotency from "@/assets/images/idempotency.png";
import rateLimiting from "@/assets/images/rate-limiting.png";
import pagination from "@/assets/images/pagination.png";
import apiVersioning from "@/assets/images/api-versioning.png";
import protocols from "@/assets/images/protocols.png";

export const apiDesignQuestions: Question[] = [
    {
        id: "1",
        question: "What is the difference between REST and GraphQL?",
        answer: `**REST (Representational State Transfer):**
- Architectural style processing resources via URL endpoints.
- Uses standard HTTP methods (GET, POST, PUT, DELETE).
- Over-fetching/Under-fetching is common.
- Stateless and cacheable.

**GraphQL:**
- Query language for APIs.
- Client requests exactly what data it needs.
- Single endpoint (usually POST).
- Solves over-fetching/under-fetching.
- Harder to cache at HTTP level.`,
        difficulty: "medium",
        type: "API Design",
        imageUrl: restVsGraphql,
        imageAlt: "REST vs GraphQL Comparison Diagram",
    },
    {
        id: "2",
        question: "What is Idempotency and why is it important in API design?",
        answer: `**Idempotency** means that making multiple identical requests has the same effect as making a single request.

**Importance:**
- Essential for reliable distributed systems.
- Needed for payment processing (don't charge user twice).
- Handles network retries safely.

**HTTP Methods:**
- GET, PUT, DELETE, HEAD, OPTIONS are idempotent.
- POST is NOT naturally idempotent (requires idempotency keys).`,
        difficulty: "hard",
        type: "API Design",
        imageUrl: idempotency,
        imageAlt: "Idempotency Workflow Diagram",
    },
    {
        id: "3",
        question: "Explain the concept of API Rate Limiting.",
        answer: `Rate limiting controls the number of requests a client can make to an API within a specific time window.

**Strategies:**
- **Token Bucket:** Tokens are added at a rate; requests consume tokens.
- **Leaky Bucket:** Requests are processed at a constant rate.
- **Fixed Window:** Count requests in a fixed time block.
- **Sliding Window:** Smooths out traffic spikes.

**Headers:**
- \`X-RateLimit-Limit\`: Request limit per window.
- \`X-RateLimit-Remaining\`: Requests left.
- \`X-RateLimit-Reset\`: Time until reset.`,
        difficulty: "medium",
        type: "API Design",
        imageUrl: rateLimiting,
        imageAlt: "Token Bucket and Fixed Window Rate Limiting Diagram",
    },
    {
        id: "4",
        question: "Compare Offset-based vs Cursor-based Pagination.",
        answer: `**Offset-based Pagination:**
- Uses \`LIMIT\` and \`OFFSET\` in SQL.
- **Pros:** Simple to implement; easy to jump to specific page.
- **Cons:** Performance degrades with large offsets (database skips rows); duplicate/missing items if data changes while paging.

**Cursor-based Pagination:**
- Uses a pointer (cursor) to the last item seen (e.g., \`last_seen_id\`).
- **Pros:** Highly efficient (constant time complexity); handles real-time data better (no skipped items).
- **Cons:** Cannot jump to arbitrary pages; requires unique orderable key.

**Verdict:** Use **Cursor-based** for infinite feeds and large datasets. Use **Offset-based** for admin dashboards or small lists.`,
        difficulty: "hard",
        type: "API Design",
        imageUrl: pagination,
        imageAlt: "Offset vs Cursor Pagination Strategy Comparison",
    },
    {
        id: "5",
        question: "What are the common API Versioning Strategies?",
        answer: `**1. URI Versioning:**
- Version in URL: \`/api/v1/users\`
- **Pros:** Explicit, easy to cache/route.
- **Cons:** Breaking changes require new URI.

**2. Query Parameter:**
- \`/api/users?version=1\`
- **Pros:** Simple.
- **Cons:** Can be messy; some caches ignore query params.

**3. Header Versioning (Content Negotiation):**
- \`Accept: application/vnd.myapi.v1+json\`
- **Pros:** Clean URLs; keeps resource semantically same.
- **Cons:** Harder to test/explore via browser; requires complex client logic.

**Recommendation:** **URI Versioning** is the industry standard for public APIs due to clarity and tooling support.`,
        difficulty: "medium",
        type: "API Design",
        imageUrl: apiVersioning,
        imageAlt: "API Versioning Methods: URI, Query Param, and Header",
    },
    {
        id: "6",
        question: "Compare Long Polling, WebSockets, and Server-Sent Events (SSE).",
        answer: `**Long Polling:**
- Client sends request; server holds it open until new data is available.
- **Use Case:** Legacy compatibility, simple notifications.
- **Overhead:** High header overhead per message.

**WebSockets:**
- Full-duplex communication over single TCP connection.
- **Use Case:** Real-time chat, multiplayer games, financial tickers.
- **Pros:** Low latency, bidirectional.

**Server-Sent Events (SSE):**
- Unidirectional (Server → Client) over HTTP.
- **Use Case:** News feeds, stock updates, social media notifications.
- **Pros:** Simple HTTP, auto-reconnection.

**Summary:** Use **WebSockets** for 2-way; **SSE** for 1-way updates; **Long Polling** as fallback.`,
        difficulty: "hard",
        type: "API Design",
        imageUrl: protocols,
        imageAlt: "Long Polling vs WebSockets vs SSE Comparison",
    },
    {
        id: "7",
        question: "gRPC vs REST: When should you use which?",
        answer: `**REST (Representational State Transfer):**
- **Protocol:** HTTP/1.1 (text/JSON).
- **Pros:** Human-readable, browser native, huge ecosystem, easy to cache.
- **Cons:** Text is larger than binary; no standardized schema; over-fetching.
- **Best For:** Public APIs, simple CRUD services.

**gRPC (Google Remote Procedure Call):**
- **Protocol:** HTTP/2 (binary Protobuf).
- **Pros:** Strongly typed contracts (.proto), smaller payload, higher performance, supports streaming.
- **Cons:** Not human-readable; requires client libraries; harder to debug in browser.
- **Best For:** Internal microservices, performance-critical systems, polyglot environments.`,
        difficulty: "hard",
        type: "API Design",
    },
];
