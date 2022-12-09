# pull official base image
FROM python:3.9

# set work directory
WORKDIR /app/

RUN apt-get update \
  && apt-get upgrade -y && apt-get install -y libsasl2-dev libldap2-dev libssl-dev poppler-utils postgresql-client-13
# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV SHELL /bin/sh


RUN apt-get clean \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

# install dependencies
RUN pip install --upgrade pip
COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt
# copy entrypoint.sh
COPY ./entrypoint.sh /app/entrypoint.sh

# copy project
COPY . /app

ENV PYTHONPATH "${PYTHONPATH}:/app"
EXPOSE 8000
# run entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]
