#!/bin/bash -e

if ! test -f .env; then
  echo $(pwd)
  echo 'no .env file'
  exit 1
fi

test -f .env && source .env
psql $DATABASE_URL -f database/schema.sql -f database/data.sql
