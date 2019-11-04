Step 1: https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-django-application-on-ubuntu-14-04
sudo su - postgres
psql

CREATE DATABASE plugandplay;
CREATE USER test WITH PASSWORD 'test';
ALTER ROLE test SET client_encoding TO 'utf8';
ALTER ROLE test SET default_transaction_isolation TO 'read committed';
ALTER ROLE test SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE plugandplay TO test;
\q
exit

root directory npm run dev

need to enter things separated by commas now

frontend todo:
on sections page make it so fields are editable or individually deletable

add flexible input fields
https://redux-form.com/6.0.0-rc.4/examples/fieldarrays/
