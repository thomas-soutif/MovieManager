FROM python:3.11-slim-buster
ENV AppPath=/app
RUN mkdir -p $AppPath

RUN pip install poetry

ENV POETRY_NO_INTERACTION=1 \
    POETRY_VIRTUALENVS_IN_PROJECT=1 \
    POETRY_VIRTUALENVS_CREATE=1 \
    POETRY_CACHE_DIR=/tmp/poetry_cache

WORKDIR $AppPath
COPY ./src/poetry.lock $AppPath
COPY ./src/pyproject.toml $AppPath
RUN poetry config virtualenvs.create false
RUN --mount=type=cache,target=$POETRY_CACHE_DIR poetry install --no-dev --no-root

# Add docker-compose-wait tool -------------------
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

ADD launch_django_server.sh /launch_django_server
RUN chmod +x /launch_django_server
