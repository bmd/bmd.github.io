---
layout: post
title: Markov at the Movies
description: |
  I used Markov chains to build a tool to generate new versions of movies.
date: 2015-06-18
tags: [projects, data-science, python]
share: false
comments: false
---

A few weeks ago, I saw [a cool article](https://lauris.github.io/text-generation-markov-chain/)
about using Markov chains to generate text. Given a large enough corpus to draw
from, a Markov text generator will consistently come up with *plausible*
assemblages of words. So, what if we fed it some text that barely qualifies as
a plausible assemblage of words to begin with...something like the script of
Star Wars: Episode III?

[Well, here's what happened.](https://github.com/bmd/markov-at-the-movies). Mostly,
it just came up with gibberish. My first attempts, just feeding the entire script
into my code, failed miserably. Even varying the length of the input phrase didn't
really make much of a difference. There was just too much noise.

Things got a little better when I started to break things down into settings,
scene notes, and dialog. At least, you stopped having characters say things like
"INTERIOR, STAR DESTROYER", which isn't really a good approximation of dialog.

As the dialog got a little better, some other patterns started to emerge. It
turns out that most characters only have a couple lines of dialog, and so their
contribution to the script became basically a scrambled, but almost identical,
version of their actual lines. For example:

```
ODD BALL: Kenobi. Set S-foils in attack position.
```

is pretty much just a chopped up version of the actual dialogue.

```
ODD BALL: We're on your tail, General Kenobi. Set S-foils in attack position.
```

It's clear that my code is correctly figuring out the right pools of words to
associate with characters, but when those pools of words are small...there really
isn't much interesting to do.

It did much better with scene notes, I think because of the consistent voice
and frequency of prepositions. Prepositions are great for Markov text generators
because they provide natural linking points where you can pair one part of a
sentence with a part of a completely different sentence. There wasn't a lot of
semantic quality, but this example definitely passes the sniff test, even if it
doesn't make a ton of sense in the context of the Movie.

```
He hears strange bellowing cries and he spins toward the waiting Republic cruiser. The Republic cruiser lifts off and swings around, grabs on to the floor.
```

Ultimately, the exercise is fun, but natural language generation has long since passed techniques like this 
by. It still lives on in some examples like [Erowid Recruiter](https://twitter.com/erowidrecruiter),
but companies doing this at scale like Google and Apple have moved on to other designs
such as neural networks.
