# hexo-friendly-link

Automatically generate friendly permalink for Hexo.

## Installation

``` bash
npm install hexo-friendly-link --save
```

## Usage

Modify `permalink` in `_config.yml`:

``` yaml
permalink: :friendly_link/
```

## How it works

`hexo-friendly-link` works by generating the hex encoded unix timestamp, it uses the published date of the post.

## Limitation

If you modify the published date of the post, the generated link will be different. Or if multiple posts are created in the same second, the generated links are the same. In these case, the generated links are unstable. But for most personal blog sites, these are unlikely to happen.

## License

MIT
