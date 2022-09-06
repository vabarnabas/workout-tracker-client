# workout-tracker-client

>

[![NPM](https://img.shields.io/npm/v/workout-tracker-client.svg)](https://www.npmjs.com/package/workout-tracker-client) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save workout-tracker-client
```

## Usage

```tsx
import * as React from "react"

import { useClient } from "workout-tracker-client"

const Example = () => {
  const example = useClient()
  return <div>{example}</div>
}
```

## License

MIT © [vabarnabas](https://github.com/vabarnabas)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
