[//]: # (README.md)

[//]: # (Title)
<h1 style="text-align: center"> PlugAndPlayResume </h1>
<p style="text-align: center; font-weight:bold"> Description </p>
<p style="text-align: center">
    PlugAndPlayResume creates resumes optimized for specific job positions
</p>


[//]: # (Motivation)
## Motivation ##
  In order to make getting your dream job easier, our product will solve the
  job-hunter's problem of resume customization by giving them an adaptive webapp
  to identify their most relevant experience.


[//]: # (Development)
## Development ##

> #### Front-end ####
  > - To get started, clone this repository:
  >     ```shell
  >        git clone https://github.com/Tommi-Tsuruga/plug-and-play-resume.git
  >      ```
  > - Please install Yarn if you haven't. It can be done easily by following
  >    [their documentation](https://yarnpkg.com/lang/en/docs/install).
  > - Go to *plug-and-playresume/frontend* and install the dependencies by running:
  >     ```shell
  >        yarn install
  >     ```
  > - Build webpack bundles.
  >   - Development - `yarn build:dev`
  >   - Production - `yarn build:prod`
  > - Finally, run webpack-dev-server:
  >     ```shell
  >        yarn dev-server
  >     ```
  > - It should now be serving the files to
  >   [http://localhost:3000]  
  >   **NOTE**: It does not show the interface because the dev-server's proxy is
  >    set for port 8000
  > - Leave this server running, and open another tab and go back to project
  >   root directory for the operations below.

> #### Postgres ####
  > - Install postgres by following [this instruction](
      https://www.postgresql.org/docs/current/tutorial-install.html).
  > - Open postgres shell as root user:
  > - For macOS - `psql postgres`
  > - Other - `sudo su - postgres` then `psql`
  > - Once you are in the shell create a database:
  >     ```postgresql
  >        create database plugandplay;
  >     ```
  > - Create a user for this project
  >   ```postgresql
  >      create user plugandplayuser with password 'password';
  >   ```
  > - Now, let's make the user accessible to the database:
  >   ```postgresql
  >      grant all privileges on database plugandplay to plugandplayuser;
  >   ```

> #### Python ####
  > 1. We need python3 to build our project. You can download it from [here](
       https://www.python.org/downloads/).
  > 2. Install pip if not installed. You can follow [this instruction](
       https://pip.pypa.io/en/stable/installing/).
  > 3. Create virtual environment:
  >    ```shell
  >       python3 -m venv plug-and-play-resume/venv
  >    ```
  > 4. To activate virtual environment:
  >    ```shell
  >       cd plug-and-play-resume && source ./venv/bin/activate
  >    ```
  > 5. Install requirements with virtual environment activated:
  >    ```shell
  >       pip3 install -r requirements.txt
  >    ```
  > 6. We need to download stopwords from nltk. Open python shell and run:
  >    ```python
  >    >>>  import nltk
  >    >>>  nltk.download('stopwords')
  >    ```
  >    Then, exit the shell by typing:
  >    ```python
  >    >>> exit()
  >    ```
  > 7. We also need to create a .env file to configure Django with user and database
  >    we created on postgres.
  >    ```shell
  >       cat  >>  .env <<  EOF
  >       DB_NAME=plugandplay  
  >       DB_USER=plugandplayuser  
  >       DB_PASS=password  
  >       EOF
  >    ```
  > 8. We are almost done with setting up.  
  >    Let's connect the database to Django by running:
  >    ```shell
  >       python3 manage.py makemigrations && python3 manage.py migrate
  >    ```
  > 9. Finally, to start django dev-server, run:
  >    ```shell
  >       python3 manage.py runserver
  >    ```
  >  The website should now be served at [http://localhost:8000]


[//]: # (Todo)
## Todo ##
 - Deploy to aws elastic beanstalk or lambda


[//]: # (Directory Structure)
## Directory Structure ##

##### / #####
```
    .
    ├── README.md
    ├── accounts
    │   ├── admin.py
    │   ├── api.py
    │   ├── apps.py
    │   ├── models.py
    │   ├── serializers.py
    │   ├── tests.py
    │   └── urls.py
    ├── frontend
    │   ├── admin.py
    │   ├── apps.py
    │   ├── models.py
    │   ├── package.json
    │   ├── static
    │   │   ├── images
    │   │   │   ├── favicon.png
    │   │   │   └── loader.gif
    │   │   └── index.html
    │   ├── template
    │   │   └── index.html
    │   ├── tests.py
    │   ├── urls.py
    │   ├── views.py
    │   ├── webpack-stats.json
    │   ├── webpack.config.js
    │   └── yarn.lock
    ├── listing
    │   ├── admin.py
    │   ├── api.py
    │   ├── apps.py
    │   ├── models.py
    │   ├── serializers.py
    │   ├── tests.py
    │   ├── urls.py
    │   └── views.py
    ├── manage.py
    ├── plug-and-play-resume
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    ├── requirements.txt
    └── resume
           ├── admin.py
           ├── api.py
           ├── apps.py
           ├── models.py
           ├── serializers.py
           ├── tests.py
           ├── urls.py
           └── utils.py
```

##### /frontend/ #####
```text
    .
    ├── admin.py
    ├── apps.py
    ├── models.py
    ├── package.json
    ├── src
    │   ├── actions
    │   │   ├── auth.js
    │   │   ├── basicInfo.js
    │   │   ├── educations.js
    │   │   ├── experiences.js
    │   │   ├── generated.js
    │   │   ├── jobHistories.js
    │   │   ├── listings.js
    │   │   ├── messages.js
    │   │   └── types.js
    │   ├── app.js
    │   ├── components
    │   │   ├── Header.js
    │   │   ├── NotFoundPage.js
    │   │   ├── PlugResumePage.js
    │   │   ├── ProfilePage.js
    │   │   ├── accounts
    │   │   │   ├── AccountFrom.js
    │   │   │   ├── LoginPage.js
    │   │   │   └── RegisterPage.js
    │   │   ├── basic-info
    │   │   │   └── BasicInfoForm.js
    │   │   ├── education
    │   │   │   ├── EducationForm.js
    │   │   │   ├── EducationList.js
    │   │   │   └── EducationListItem.js
    │   │   ├── experience
    │   │   │   ├── EditExperiencePage.js
    │   │   │   ├── ExperienceList.js
    │   │   │   └── ExperienceListItem.js
    │   │   ├── generated
    │   │   │   ├── GeneratedDocument.js
    │   │   │   ├── GeneratedList.js
    │   │   │   ├── GeneratedListItems.js
    │   │   │   ├── GeneratedStyle.js
    │   │   │   └── ResumePage.js
    │   │   ├── listings
    │   │   │   ├── EditListingPage.js
    │   │   │   ├── ListingForm.js
    │   │   │   ├── ListingItems.js
    │   │   │   ├── ListingPage.js
    │   │   │   └── ListingSections.js
    │   │   ├── profile
    │   │   │   ├── ProfilePage.js
    │   │   │   ├── basic-info
    │   │   │   │   ├── BasicInfo.js
    │   │   │   │   └── BasicInfoForm.js
    │   │   │   ├── education
    │   │   │   │   ├── AddEducation.js
    │   │   │   │   ├── EditEducationPage.js
    │   │   │   │   ├── EducationForm.js
    │   │   │   │   ├── EducationList.js
    │   │   │   │   └── EducationListItem.js
    │   │   │   ├── experience
    │   │   │   │   ├── AddExperience.js
    │   │   │   │   ├── EditExperiencePage.js
    │   │   │   │   ├── ExperienceForm.js
    │   │   │   │   ├── ExperienceList.js
    │   │   │   │   └── ExperienceListItem.js
    │   │   │   └── job-history
    │   │   │       ├── AddJobHistory.js
    │   │   │       ├── EditJobHistoryPage.js
    │   │   │       ├── JobHisotryListItems.js
    │   │   │       ├── JobHistoryForm.js
    │   │   │       └── JobHistoryList.js
    │   │   └── utils
    │   │       ├── DateRangeSelector.js
    │   │       └── Loading.js
    │   ├── lib.js
    │   ├── reducers
    │   │   ├── auth.js
    │   │   ├── basicInfo.js
    │   │   ├── educations.js
    │   │   ├── errors.js
    │   │   ├── experiences.js
    │   │   ├── generated.js
    │   │   ├── jobHistories.js
    │   │   ├── listings.js
    │   │   └── messages.js
    │   ├── routers
    │   │   ├── AppRouter.js
    │   │   ├── PrivateRoute.js
    │   │   └── PublicRoute.js
    │   ├── store
    │   │   └── configureStore.js
    │   └── styles
    │       ├── fontawesome-free
    │       └── scss
    │           ├── base
    │           │   ├── _page.scss
    │           │   └── _variables.scss
    │           ├── components
    │           │   ├── _buttons.scss
    │           │   ├── _divider.scss
    │           │   └── _loader.scss
    │           ├── layout
    │           │   ├── _form.scss
    │           │   ├── _lists.scss
    │           │   ├── _navbar.scss
    │           │   └── _section.scss
    │           └── styles.scss
    ├── static
    │   ├── images
    │   │   ├── favicon.png
    │   │   └── loader.gif
    │   └── index.html
    ├── template
    │   └── index.html
    ├── tests.py
    ├── urls.py
    ├── views.py
    ├── webpack-stats.json
    ├── webpack.config.js
    └── yarn.lock
```


[//]: # (Authors)
## Authors ##
- Aisha Khoja
- Keisuke Suzuki
- Tommi Ann Tsuruga
