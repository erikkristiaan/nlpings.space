FROM python:3.9
RUN apt-get update && apt-get -y install cron vim
WORKDIR /app
ENV PYTHONPATH /app

COPY requirements.txt ./
COPY scraper.py ./
COPY crontab /etc/cron.d/crontab

RUN pip3 install -r requirements.txt

RUN chmod 0644 /etc/cron.d/crontab
RUN crontab /etc/cron.d/crontab

# Add env variables to /etc/environment to be used by python
CMD ["/bin/bash", "-c", "printenv > /etc/environment && cron -f"]