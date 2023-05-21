# Turborepo starter

This is an official qiankun pnpm starter turborepo.

## What's inside?

1. nextjs throw errors: assertion failed [block != nullptr]: BasicBlock requested for unrecognized address

```bash
$ node -e 'console.log(process.arch)'
// That will probably output x86

$ arch
// This will probably output i386
```

或者将此添加到您的 settings.json

```json
  "terminal.integrated.profiles.osx": {
    "bash": {
      "path": "arch",
      "args": ["-arm64", "bash", "-l"],
      "overrideName": true
    }
  },
  "terminal.integrated.defaultProfile.osx": "bash"
```
