FROM hayd/alpine-deno:1.2.0

EXPOSE 6505

WORKDIR /app

USER deno

COPY deps.ts .
RUN deno cache deps.ts

ADD . . 

RUN deno cache index.ts

CMD ['run', '--allow-net', 'index.ts']
