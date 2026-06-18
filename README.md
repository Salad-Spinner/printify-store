# ⚡ WAM Studios - Automated Printify & Snipcart Storefront

An ultra-lightweight, automated print-on-demand e-commerce storefront built with **Astro** and hosted for free on **GitHub Pages**. 

This system securely bypasses local Mac network bottlenecks and browser CORS constraints by utilising a low-level async HTTPS stream to pull your 30+ products dynamically from the Printify API at build time, converting them into fast, flat HTML files. Front-end checkout transactions are handled securely by **Snipcart v3**.

## 🛠️ System Architecture

*   **Framework:** Astro (Static Site Generation mode)
*   **Data Pipeline:** Node.js native `https` stream (Runs securely during cloud build cycles)
*   **Fulfillment API:** Printify Developer REST Core
*   **Cart & Checkout:** Snipcart v3 (Version-locked to `3.10.1` to prevent browser redirects)
*   **Hosting Engine:** GitHub Pages + GitHub Actions CI/CD Pipeline
*   **Development Platform:** GitHub Codespaces (0 MB Local Mac Disk Footprint)

## 🚀 Project Directory Tree

```text
/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions cloud deployment workflow
├── public/
│   └── favicon.svg         # Storefront browser tab icon
├── src/
│   ├── components/
│   │   └── Snipcart.astro  # Modularized standard Snipcart tracking wrapper
│   ├── pages/
│   │   ├── index.astro     # Main catalog grid (Lists all 30+ items dynamically)
│   │   └── products/
│   │       └── [id].astro  # Dynamic router (Generates individual subpages per product)
│   └── utils/
│       └── printify.js     # Shared proxy-bypassing HTTPS data-stream utility
├── .env                    # Hidden cloud variables token profile (Git ignored)
├── astro.config.mjs        # Production path and subfolder rules configuration
└── package.json            # Core project dependency manifest
```

##  Genie Cloud Terminal Commands

All deployment and development commands are run directly from your browser's cloud terminal within **GitHub Codespaces**:

| Command | Action |
| :--- | :--- |
| `npm install` | Downloads dependencies into your secure cloud container |
| `npm run dev` | Starts the cloud preview server on port `4321` |
| `npm run build` | Locally compiles your active API products into static HTML files |
| `git add .` | Stages code, layout changes, and asset additions |
| `git commit -m "msg"` | Locks in your workspace modifications |
| `git push origin main` | Pushes changes to GitHub and triggers automatic site deployment |

## 🔒 Security & Environment Rules

To keep your storefront functional and secure, your **Private Printify Access Tokens** must never be committed to open Git repositories. 

Ensure your cloud editor container contains a hidden `.env` text file matching this structural block:
```env
PUBLIC_PRINTIFY_API_TOKEN=your_private_printify_developer_token_here
```
*Note: This secret must also be mirrored inside your GitHub Repository dashboard settings under `Settings > Secrets and variables > Actions` to allow the GitHub Actions runner script to build your product subpages successfully.*

## 🛍️ Transaction Verification

This store is configured in **Test Mode** by default. To simulate customer checkouts and verify that variants (sizes/colours) pass to your fulfillment pipeline smoothly, use the following sandbox credentials at checkout:
*   **Card Number:** `4242 4242 4242 4242`
*   **Expiry Date:** Any future date (e.g., `12/29`)
*   **CVC/CVV:** `123`
