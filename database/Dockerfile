FROM postgres:latest
ENV POSTGRES_DB=farmacia_db
ENV POSTGRES_PASSWORD=Inacap.654321
COPY init.sql /docker-entrypoint-initdb.d/
EXPOSE 5432
