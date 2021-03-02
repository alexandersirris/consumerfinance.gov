FROM centos:8
ARG python_version
ENV PYTHON_VERSION ${python_version}
RUN dnf install -y which gcc gcc-c++ kernel-devel make epel-release && \
    dnf install -y ${PYTHON_VERSION} && \
    dnf clean all
COPY requirements /src/requirements
RUN python3.6 -m ensurepip && \
    pip3 install -U pip && \
    pip3 install -r /src/requirements/docs.txt
