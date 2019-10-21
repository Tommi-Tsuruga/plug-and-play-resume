<h1 align="center">django-app</h1>

<h2>Status</h2>
<h4>Frontend</h4>
    <li>Home</li>
    <li>Login page (without functionality)</li>
    <li>Header</li>
    <li>Experience Page</li>
    <li>Help Page</li>
<h4>Backend</h4>
    <li>Created a django app</li>
    <li>Connected to frontend</li>

<h2>Todo</h2>
<h4>Frontend</h4>
    <li>Add authentication and fix router</li>
    <li>Fix logic in EditExperience page</li>

<h4>Backend</h4>
    <li>Create and connect db</li>
    <li>Language processing logic</li>
    
<h2>Development</h2>
    <h4>Frontend</h4>
        <li>Build for development <pre>yarn run build:dev</pre> </li>
        <li>Build as product <pre>yarn run build:prod</pre> </li>
        <li>Start server<pre>yarn serve</pre></li>
        <li>Run dev-server <pre>yarn run dev-server</pre> </li>
    <h4>Backend</h4>
        <li>Build for development (with running client server)
            <pre>./manage.py runserver</pre> </li>

<h2>Directory Structure</h2>
<pre>
.
├── plug-and-play-resume
│   └── __pycache__
├── backendapp
│   ├── migrations
│   │   └── __pycache__
│   └── __pycache__
├── frontendapp
│   ├── migrations
│   │   └── __pycache__
│   ├── __pycache__
│   ├── src
│   │   ├── actions
│   │   ├── components
│   │   ├── reducers
│   │   ├── routers
│   │   ├── store
│   │   └── styles
│   │       ├── base
│   │       └── components
│   └── template
└── public
    ├── bundles
    └── images
</pre>

<h2>Authors</h2>

