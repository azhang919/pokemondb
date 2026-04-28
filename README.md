# PokemonDB - Julikit & Jennova

## Running Locally
```
npm cache clean --force
npm i
npm run dev
```

### Creating Distro for Preview
```
npm run build
npm run preview
```

### Deploying to GitHub Pages

Note: GitHub Actions workflow is currently disabled. After pushing changes to main, simply run the below command to kick off a deployment build. Under the repo's Settings > Pages, make sure it is configured to "Deploy from a branch" with `gh-pages/root` as the configurable source.

```
npm run deploy
```