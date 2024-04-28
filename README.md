# paulmichalet.com

Personal and public web pages.

## Context

I was looking to learn a different perspective on an [old idea](https://github.com/Paulmicha/projet-complexe), something that could serve as a more general scratchpad for interactive data visualizations.

I have built my [previous project with Sapper - Sveltekit](https://github.com/Paulmicha/research-journal) and I'm mostly working with 11ty for simpler static sites. I was curious about Solid, so when I saw the recent [Solid Start RC release](https://github.com/solidjs/solid-start), I thought I would give it a shot.

## Reasoning

The first phase is essentially a SSG to deploy just a few static pages. Then I eventually would like to publish a few prototypes of dataviz / mapping experiments ; perhaps with a more complex local stack.

## Local dev

At this stage it's just git clone, then :

```sh
pnmp i
pnpm dev
```

Visit [pcom.localhost:3000](http://pcom.localhost:3000)

## Compile static site

```sh
pnpm build
```
