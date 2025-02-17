# NestJS TypeORM Migrations Tutorial

This repository demonstrates how to implement and manage database migrations using NestJS and TypeORM. It provides a step-by-step guide to setting up and working with migrations in a NestJS application.

## Prerequisites

- Node.js (v20 or higher)
- PostgreSQL
- NestJS CLI (`npm i -g @nestjs/cli`)

## Installation

1. Clone the repository:

```bash
git clone git@github.com:safwat-fathi/migration-tutorial.git
cd migration-tutorial
```

1. Install dependencies:

```bash
npm install
```

1. Configure your database connection in:

- `app.module.ts`
- `./config/orm.config.ts`

## Project Structure

```bash
migration-tutorial/
./src
├── app.module.ts
├── config
│   └── orm.config.ts
├── main.ts
├── migrations
│   ├── [timestamp]-CreateUserTable.ts
│   ├── [timestamp]-AddAddressToUser.ts
│   └── [timestamp]-AddPhoneToUser.ts
├── types
│   └── env.d.ts
└── users
    ├── entities
    │   └── user.entity.ts
└── README.md
```

## Available Scripts

```bash
# Generate a new migration
npm run migration:generate src/migrations/[MigrationName]

# Run pending migrations
npm run migration:run

# Revert the last migration
npm run migration:revert

# Show migration status
npm run typeorm -- migration:show -d ormconfig.ts
```

## Step-by-Step Guide

1. **Project Setup**
   - Install NestJS and required dependencies
   - Configure TypeORM in app.module.ts
   - Create ormconfig.ts

2. **Create Entity**
   - Define User entity with basic fields
   - Configure entity in app.module.ts

3. **Initial Migration**
   - Generate first migration for User table
   - Run the migration
   - Verify database changes

4. **Adding New Fields**
   - Modify User entity
   - Generate new migration
   - Apply changes to database

## Database Configuration

Update the following files with your database credentials:

```typescript
// app.module.ts and ormconfig.ts
{
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your_username',
  password: 'your_password',
  database: 'your_database',
}
```

## Best Practices

1. Always set `synchronize: false` in production
2. Never modify existing migrations
3. Create new migrations for each change
4. Test migrations by running them both up and down
5. Keep migrations small and focused
6. Version control your migrations

## Common Issues

1. **Migration Generation Fails**
   - Ensure your database is running
   - Check database credentials
   - Make sure the project is built (`npm run build`)

2. **Migration Doesn't Apply**
   - Check migration status
   - Verify database connectivity
   - Look for error messages in logs

## Contributing

Feel free to submit issues and enhancement requests.

## License

[MIT](LICENSE)

This README provides:

- Clear installation instructions
- Project structure overview
- Available commands
- Step-by-step guide
- Configuration details
- Best practices
- Common issues and solutions
