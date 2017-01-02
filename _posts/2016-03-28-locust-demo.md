---
layout: post
title: Load Testing with Locust - A gentle introduction
description: |
  A gentle introduction to user load testing with Python and Locust
date: 2016-03-28
tags: [projects, testing, python]
share: false
comments: false
---

_This post is adapted from a lightning talk I gave on load testing for web developers._

Users break web applications.

Users break web applications in an amazing variety of ways, from the "who would even try typing that in?" variety, to the "refreshing the page ten times in a row breaks what?".

Since we can't ban users from using our software (although I'm open to exploring the idea), there is a large problem domain devoted to testing applications and ensuring that they stand up to real world usage conditions.

I'm going to focus on one of those today - load testing - and a cool Python tool called **Locust** that makes it very easy to get up and running with load testing for web applications and APIs.

##### What is Locust?
From [locust.io](http://locust.io):
> Locust is an easy-to-use, distributed, user load testing tool. Intended for load testing web sites (or other systems) and figuring out how many concurrent users a system can handle.

Putting aside the jargon, this is really a simple concept. What Locust does is it makes a TON of requests to the system under test, very quickly, and then keeps track of the results so that it can report them back to you for analysis. Locust also supports distributed testing which means you can simulate a network of client systems, rather than just your own, if you want to introduce new variables into your testing like servers in multiple parts of the globe. Heck, you can even just use more servers to up the volume of requests if your goal is to test the resiliency of your systems to ultra-high request volumes.

##### Why Locust?
There are a lot of load testing tools out there, from simple, open-source projects like this one, to enterprise SaaS solutions. All of them do somethings well, and other things less well, because that's just how software is. The point of this talk isn't to claim that Locust is the right solution for every project, or even the "best" solution in any categorical way - it's simply to walk through one tool that you can use to solve a specific problem in your work.

That said, I think Locust has a few traits that recommend it to a lot of web developers.
1. Load testing is hard to do on small projects with tight timelines. There isn't budget, or time, to spend days or weeks setting up complex test harnesses and developing and deploying new systems. The ability to test locally, and scale to dedicated servers only if needed is a big advantage.
2. It's written in Python (2.7 compatibly, no Py3 support yet), which means that if you aren't already using Java in your day-to-day, you don't need to mess around with getting a Java development environment set up on your machine to run tests; you've already got a compatible version of Python instlled if you're using any modern Mac or \*nix distro.
3. Locust encourages loosely coupling your testing infrastructure and your main codebase, and it's easy to design one set of tests that can be used to test multiple web services, which is especially useful if you're interested in how several dependent services will perform concurrently!
4. You can use it for testing protocols other than HTTP. You'll spend some extra time writing the transport adapters you need, but at its heart, Locust is just a generic measurement protocol.
5. An efficient CLI, or built-in web-based UI, take your pick!

##### Why NOT Locust?
Locust isn't perfect though, so here's where it might not be as good a fit for you.

1. Locust is not a replacement for unit and integration testing. It doesn't do much to help you trace errors beyond logging the HTTP response statuses and any messages in the body. It's a specialist tool, rather than an all-in-one testing solution.
2. It can be frustrating to implement complex API scenarios because there's little abstraction over the HTTP calls themselves in Locust's native interface. I'd be interested to see someone write a package or set of packages that define behaviors that map to groups of Locust tasks with more abstraction.

##### A Quick Demo

**Let's get set up**
Locust will interact with your existing application purely over http - which means it works equally well with any language. I've used locust primarily for testing PHP applications, but pick your poison.

```sh
$ mkdir locust && cd locust
$ git init

# set up your virtual environment. If you don't have virtualenvwrapper
# installed, I highly recommend you install it with pip install
# virtualenvwrapper.
$ mkvirtualenv locust          
(locust) $ pip install locustio

# Keep Locust from throwing ugly warnings if it can't use pyZmq
(locust) $ pip install zmq

# locust looks for this file to contain your test runner             
(locust) $ touch locustfile.py          
```

###### Making a locustfile.py
A locustfile must minimally define two objects. A client class (HttpLocust), that manages interactions with the API and a TaskSet class that defines the types of behaviors to test against the API.

*Note: You can use any file as the source of the locust behavior with the -f flag: `locust -f /tests/load_tests.py`*


Here's an extremely simple example:
```python
from locust import TaskSet, task, HttpLocust

class ApiClientBehavior(TaskSet):
    """
    The @task decorator declares a locust task.
    The argument passed the task decorator determines
    the relative frequency with which the task
    will be spawned within a swarm. For example
    a task with a relative frequency of 1 will be
    spawned half as often as a task with a
    relative frequency of 2.
    """
    @task(1)
    def get_a_random_response(self):
        # any call to locustio.TaskSet.get creates a
        # response that will be logged in the load
        # testing report
        self.client.get("/random",

        # name will give you a name that groups
        # all calls from this method in the same
        # report row, even if the URI is being
        # randomly or procedurally generated
        name='A Random HTTP Status',

        # Headers is just a Dict(). Everything
        # in locust is a POPO.
        headers={
            "Accept": "application/json"
        })

    @task(2)
    def get_a_success_response(self):
        self.client.get("/success",
        name='A 200 Status',
        headers={
            "Accept": "application/json"
        })

class ApiClient(HttpLocust):
    # taskset is just a POPO
    task_set = ApiClientBehavior

    # How long should a task wait after the batch
    # member is spawned before executing. This creates
    # randomness in the traffic patterns rather than
    # having every member of the batch try to execute
    # at once.
    min_wait = 1000
    max_wait = 5000
```

##### Running your tests

###### On the command line
```sh
(locust) ~/git/locust  $ locust --no-web \
  --host=prism.wpd.bsd.net \
  --clients=5 \
  --hatch-rate=100 \
  --num-requests=1000

[2016-03-25 09:29:45,892] bmd-mbp.local/INFO/locust.main: Starting Locust 0.7.3
[2016-03-25 09:29:45,892] bmd-mbp.local/INFO/locust.runners: Hatching and swarming 5 clients at the rate 100 clients/s...
...later...
[2016-03-25 09:29:48,949] bmd-mbp.local/INFO/locust.runners: All locusts hatched: ApiClient: 5
[2016-03-25 09:29:48,950] bmd-mbp.local/INFO/locust.runners: Resetting stats
[2016-03-25 09:29:48,950] bmd-mbp.local/INFO/locust.runners: All locusts dead
[2016-03-25 09:29:48,950] bmd-mbp.local/INFO/locust.main: Shutting down (exit code 0), bye.
```

**Explanation:**

`--host` - the domain to receive the locust traffic. You can also define this directly in your `HttpLocust` class, although this flag will still override it.

`--clients` - the number of concurrent clients to use (one of the knobs you can use to control the volume of traffic in your test) - this setting is more important in distributed tests than local tests, and will affect the peak attack rate of the swarm.

`--hatch-rate=` - the number of Locusts to hatch per second (remember that a locust isn't necessarily executed when it hatches immediately - the `min_wait` and `max_wait` parameters control how long it will wait to execute its request.

`--num-requests=` - the total number of requests to execute. An estimate for the duration of the attack can be derived as `(hatch-rate / num-requests) + max_wait` seconds.

###### Using the web UI
```sh
(locust) ~/git/locust  $ locust
[2016-03-25 10:18:42,742] bmd-mbp.local/INFO/locust.main: Starting web monitor at *:8089
[2016-03-25 10:18:42,743] bmd-mbp.local/INFO/locust.main: Starting Locust 0.7.3
````

Meanwhile back at ~~the ranch~~ `localhost:8089`...
![Locust Intro Screen](https://www.dropbox.com/s/f4vrfpimt9c0rdd/Screenshot%202016-03-25%2009.40.45.png?dl=1)

Once you specify a swarm size and hatch rate per second, you can watch the swarm go in real time, and then download results and logs direcly from the web UI:
![Locust Results Screen](https://www.dropbox.com/s/je3h7e47wrth3sw/Screenshot%202016-03-28%2012.15.16.png?dl=1)

### Challenges
* Getting traffic distribution correct - especially if your app is going to be exposed to real world users, it's hard to know what a realistic usage pattern for your application will look like.
* Ensuring sufficient coverage (Locust doesn't give you any kind of coverage reports, since it doesn't know the application) can be difficult for complex APIs

### Useful Locust Tricks

##### Check the overall distribution of tasks within your swarms
```sh
(locust) ~/git/locust $ locust --show-task-ratio-json 2>&1 | jq .
{
  "per_class": {
    "ApiClient": {
      "tasks": {
        "get_a_random_response": {
          "ratio": 0.3333333333333333
        },
        "get_a_success_response": {
          "ratio": 0.6666666666666666
        }
      },
      "ratio": 1
    }
  },
  "total": {
    "ApiClient": {
      "tasks": {
        "get_a_random_response": {
          "ratio": 0.3333333333333333
        },
        "get_a_success_response": {
          "ratio": 0.6666666666666666
        }
      },
      "ratio": 1
    }
  }
}
```
