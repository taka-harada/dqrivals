FROM hivelocityinc/mantle:php5

MAINTAINER Ryuichi Komeda <komeda@hivelocity.co.jp>

RUN set -e \
  && echo "http://dl-cdn.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories \
  && echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories \
  && apk update \
  && mkdir -p /var/www/html/dqrivals

COPY ./src /var/www/html/dqrivals
COPY ./infra/default.conf.tmpl /etc/nginx/conf.d/default.conf.tmpl
COPY ./infra/htpasswd /etc/nginx/htpasswd

RUN set -e \
  && cd /var/www/html/dqrivals && composer install