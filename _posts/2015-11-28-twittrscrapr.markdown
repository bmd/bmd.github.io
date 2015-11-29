---
layout: post
title: TwittrScrapr
date: 2015-11-28
author: Brendan
categories: Projects
---

Let me start out by saying that there is already an armada of great tools out there for interacting with Twitter. While there are some [amazing examples](http://currents.plos.org/outbreaks/article/twitter-improves-influenza-forecasting/) of what you can do with it in aggregate, most social media data is noisy, difficult to work with, and notoriously hard to interpret, unless you already know exactly what you're looking for.

Most existing tools work to fill this gap - to either aggregate data in ways that are meaningful to their users, or sift through data to *find* the important stuff. That's great, but good tools cost a lot of money, and sometimes, you do know exactly what you're looking for. You know where it is, and what users are creating it, and you just need a way to get it out.

[TwittrScrapr](https://github.com/bmd/twittrscrapr) does exactly that. The interface is simple - it runs locally, and you provide it with a list of user accounts in a text file. Depending on what command you run, TwittrScrapr will either fetch any available public posts from the timelines of those users, or pull the profile data of the users themselves.

At BSD, we use TwittrScrapr to maintain small-scale influencer programs, where premium tools like [Littlebird](www.getlittlebird.com/) just aren't going to deliver enough ROI to justify the investment. It's a hacky solution to an unusual problem, but hey, sometimes you just need the right tool for the job.

**[Check it out.](https://github.com/bmd/twittrscrapr)**