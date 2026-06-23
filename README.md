# Educational Program Monitoring Dashboard

A premium, data-driven analytics dashboard for monitoring educational program impact, attendance trends, and grant performance. Built with Next.js 15, TypeScript, Drizzle ORM, and Tailwind CSS.

## 🚀 Quick Start

Follow these steps to get the project running locally on your machine.

### 1. Prerequisites
- **Node.js**: v18 or higher
- **npm**: v9 or higher

### 2. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add the following:
```env
NEXT_PUBLIC_NAME="Your Name"
NEXT_PUBLIC_EMAIL="your.email@example.com"
NEXT_PUBLIC_WEBSITE_URL="https://yourwebsite.com"

# Optional: Turso Configuration (for production deployment)
TURSO_DATABASE_URL=...
TURSO_AUTH_TOKEN=...
```

### 4. Database Setup
The project uses SQLite with Drizzle ORM. You need to generate the local database file and apply the schema:
```bash
# Generate the SQL migrations
npm run db:generate

# Apply migrations to the local SQLite database
npm run db:migrate
```

### 5. Database Configuration
Ensure your configuration files match the following for local development:

#### `drizzle.config.ts`
```typescript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: "./database/pbl.db",
  },
});
```

#### `db/index.ts`
```typescript
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";

const sqlite = new Database("./database/pbl.db");

export const db = drizzle(sqlite);
```

### 6. Data Import
The dashboard relies on school-level responses, grant finance data, and performance metrics stored in CSV files. Import them into your database:

```bash
# Import school-level responses (Attendance, Participation)
npm run import:schools

# Import Grant Finance data
npm run import:finance

# Import Grant Performance metrics
npm run import:performance

# Import Evidence Assets (Image paths and captions)
npm run import:evidence
```

### 7. Running the Development Server
Once the data is imported, start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🛠 Features

- **Dynamic Interactive Dashboard**: High-level KPIs and trends with reactive filtering for months, districts, blocks, and subjects.
- **Grant Performance Reports**: Automated, data-rich reports for donors including budget utilization and impact narratives.
- **Advanced Analytics**: Deep-dive visualizations for attendance, participation, and evidence submission trends.
- **Comparative Rankings**: Leaderboards for identifying top-performing districts and blocks requiring intervention.
- **Evidence Gallery**: Visual verification of program activities with automated asset path resolution.

## 🏗 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite with Drizzle ORM
- **State Management**: SWR (Stale-While-Revalidate) for data fetching
- **Charts**: Recharts

## 📁 Project Structure

- `/app`: Next.js pages and API routes.
- `/components`: Reusable UI components (KPI cards, charts, tables).
- `/db`: Database schema definitions and connection setup.
- `/hooks`: Custom React hooks for data fetching and state management.
- `/lib/analytics`: Business logic for metric calculations and data aggregation.
- `/scripts`: Utility scripts for importing data from CSV files.
- `/types`: Shared TypeScript interfaces and types.

## 📧 Contact

**Author**: Lokesh Verma  
**Website**: [lokeshverma.in](https://lokeshverma.in)  
**Email**: [lokeshverma.tech@gmail.com](mailto:lokeshverma.tech@gmail.com)
