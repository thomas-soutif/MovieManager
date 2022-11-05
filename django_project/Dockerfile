FROM python:3.11.0-bullseye
ENV AppPath=/app
RUN mkdir -p $AppPath
WORKDIR $AppPath

COPY ./src/poetry.lock $AppPath
COPY ./src/pyproject.toml $AppPath
RUN curl -sSL https://install.python-poetry.org/ | python - \
&& echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.profile \
&& echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc \
&& export PATH="$HOME/.local/bin:$PATH" \
&& pip install -U pip \
&& poetry config virtualenvs.create false \
&& poetry install

# Add docker-compose-wait tool -------------------
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

ADD launch_django_server.sh /launch_django_server
RUN chmod +x /launch_django_server