# Learn ember-frost-bunsen

## Getting Started

This tutorial will show you how to get started with `ember-frost-bunsen` by having you create a new application with a bunsen form for creating a new user account. You won't actually wire this form up to an API but will learn step-by-step how to go about creating this form in an intuitive process. Ideally after following this tutorial you will have the knowledge necessary to start using `ember-frost-bunsen` within your own application and generate the beautiful forms you desire.

### Initialize application

First lets create a new Ember application to get started:

```bash
ember new bunsen-demo && cd bunsen-demo
```

### Install `ember-frost-bunsen`

Now that we have an Ember application lets install `ember-frost-bunsen`:

```bash
ember install ember-frost-bunsen
```

Go ahead and run the application and verify it works:

```bash
ember serve
```

Verify your [local instance](http://localhost:4200) is running and you get the following:

![Initialized application](images/initialized-app.png)

### Setup Application

Now that we have initialized our project we can start by creating a new route for the sign up page:

```bash
ember g route signup
```

Now lets create a template for our index and add a link to the sign up page:

```bash
ember g template index
```

*app/templates/index.hbs*

```handlebars
{{#frost-link 'signup'
  priority='secondary'
  size='small'
}}
  Sign Up
{{/frost-link}}
```

Now your page should look like following:

![Index page](images/index-page.png)

### Create Sign Up Form

Now that we have our application and routes setup we can start digging into creating forms with bunsen.

*Rest of tutorial coming soon…*
