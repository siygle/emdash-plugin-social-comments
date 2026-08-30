# emdash-plugin-social-comments

EmDash plugin for tabbed Giscus + Bluesky comments.

Previously published as `emdash-plugin-bluesky-comments`. Plugin id is now `social-comments`. Existing Giscus settings stored under `bluesky-comments` are still read as a fallback.

## Install

```json
"emdash-plugin-social-comments": "github:siygle/emdash-plugin-social-comments#v0.3.0"
```

```js
import { socialCommentsPlugin } from "emdash-plugin-social-comments";
```

```astro
import { Comments } from "emdash-plugin-social-comments/astro";
```
