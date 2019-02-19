FROM nginx
MAINTAINER li xu cheng "lixucheng@zhigui.com"

ENV WORK_DIR /data/www

RUN mkdir -p ${WORK_DIR}
COPY build ${WORK_DIR}
WORKDIR ${WORK_DIR}
