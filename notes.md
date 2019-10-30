Step 1: https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-django-application-on-ubuntu-14-04
"CREATE DATABASE plugandplay;
CREATE USER test WITH PASSWORD 'test';
ALTER ROLE test SET client_encoding TO 'utf8';
ALTER ROLE test SET default_transaction_isolation TO 'read committed';
ALTER ROLE test SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE plugandplay TO test;
"
root directory npm run dev