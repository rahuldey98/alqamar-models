# alqamar-models

Shared TypeScript DTOs and API response models for Alqamar backend/frontend projects.

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
  LoginRequestDto,
  LoginResponseDto,
  UserRequestDto,
  UserResponseDto,
  ApiResponse,
} from "@rahuldey98/alqamar-models";
```

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

