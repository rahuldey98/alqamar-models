# alqamar-models

Shared TypeScript types and API contracts for Alqamar backend/frontend projects. This package is **types-only** — it has no runtime dependencies and emits near-empty `.js` files alongside `.d.ts`.

## Package

- Name: `@rahuldey98/alqamar-models`
- Registry: `https://npm.pkg.github.com`

## Install in Another Project

GitHub Packages requires authentication, including for public packages.

1. Create/update `.npmrc` in the consumer project:

```ini
@rahuldey98:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

2. Export a token with `read:packages`:

```bash
export NODE_AUTH_TOKEN=YOUR_GITHUB_PAT
```

3. Install:

```bash
npm install @rahuldey98/alqamar-models
```

## Usage

```ts
import type {
  // common
  ApiResponse,
  ApiSuccessResponse,
  ApiErrorResponse,
  UserRole,
  Status,
  UserGender,
  DayOfWeek,
  DateString,
  TimeString,

  // entities
  User,
  Class,
  ClassSchedule,
  Course,
  Enrollment,
  Attendance,

  // api
  LoginRequest,
  LoginResponse,
  UserResponse,
  CreateUserRequest,
  CreateUserResponse,
  UpdateUserRequest,
  UpdateUserParams,
  UpdateUserResponse,
  GetStudentResponse,
  CreateClassRequest,
  CreateClassResponse,
  MarkAttendanceRequest,
  MarkAttendanceResponse,
  GetAttendanceQuery,
  GetAttendanceResponse,
} from "@rahuldey98/alqamar-models";
```

### Structure

- `entities/` — canonical domain types (single source of truth: `User`, `Class`, `Course`, `Enrollment`, `Attendance`).
- `api/<resource>/<endpoint>` — request/response types per endpoint, derived from entities with `Pick`/`Omit`/`Partial`.
- `common/` — `ApiResponse<T>`, string-literal enums, branded scalar aliases (`DateString`, `TimeString`).

## Local Development

```bash
npm ci
npm run build
```

## Publish a New Version

Use the included release helper:

```bash
export NODE_AUTH_TOKEN=YOUR_GITHUB_PAT
./publish.sh
```

The script will:
- ask for bump type (`patch`, `minor`, `major`) if not passed
- build the package
- bump version
- commit `dist` + version files
- tag release
- publish to GitHub Packages
- push commit and tag

You can also pass the bump type directly:

```bash
./publish.sh patch
```

