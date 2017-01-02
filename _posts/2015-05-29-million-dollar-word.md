---
layout: post
title: The Million Dollar Word
description: |
  A little web app with a deceptively simple premise. Can you find a word worth
  exactly $1,000,000? The answer involves more math than you think!
date: 2015-05-29
tags: [projects, code, algorithms]
comments: false
share: false
---

A little while ago, I was given a "brain teaser" that goes like this. Suppose
that we take each letter of the alphabet and assign it a dollar value sequentially.
So, A is $1, B is $2 and so on, and then multiply the values of a word together
to find its total value. For example, the word "CAT" would multiply out to
$3 * $1 * $20 = $60. The question is - can you find an English word that's worth
exactly $1,000,000? If not, can you _prove_ that no English word is worth
exactly $1,000,000?

The solution it turns out is simple to articulate, but interesting to think
about from a design perspective because of the second part of the question. I've
turned this problem into a little web application that you can
[play right here](http://themilliondollarword.herokuapp.com).
