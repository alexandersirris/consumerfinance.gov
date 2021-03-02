FROM centos:8

# Ensure that the environment uses UTF-8 encoding by default
ENV LANG C.UTF-8

# Disables pip cache, which reduces build time, and suppresses warnings when
# run as non-root.
ENV PIP_NO_CACHE_DIR true

ENV BUILD_DIR /src/consumerfinance.gov

# Must be world writable since alternate uid:gid may be patched in at `docker
# run` time.
RUN mkdir -p ${BUILD_DIR} && chmod 777 ${BUILD_DIR}
WORKDIR ${BUILD_DIR}

# Sets a consistent $HOME no matter which user the container runs under. This
# prevents permissions issues caused by Docker's default `/` home directory.
ENV HOME /tmp/dfd-home
RUN mkdir -p ${HOME} && chmod 777 ${HOME}

# Install all build requirements including Python 3 and the latest
# versions of the Python packages pip, setuptools, and wheel. Configure
# Python 3 to be enabled at login.
RUN dnf -y update && \
    curl -sL https://rpm.nodesource.com/setup_12.x | bash - && \
    curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | tee /etc/yum.repos.d/yarn.repo && \
    dnf install -y python36 gcc git nodejs yarn && \
    source /etc/profile && \
    pip3 install -U pip setuptools wheel

COPY _build.sh docker-entrypoint.sh ./

ENTRYPOINT ["./docker-entrypoint.sh"]
