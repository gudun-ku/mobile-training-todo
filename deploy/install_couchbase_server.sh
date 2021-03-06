#!/usr/bin/env bash

set -e
set -x

if [ "$#" -ne 0 ]; then
    echo "This script does not take any arguments"
    exit 1
fi

if [[ $EUID -ne 0 ]]; then
   echo "This script must be run as root"
   exit 1
fi

# Download Couchbase Server 4.1
if [ ! -f couchbase-server-community-4.1.0-centos6.x86_64.rpm ]; then
    wget http://packages.couchbase.com/releases/4.1.0/couchbase-server-community-4.1.0-centos6.x86_64.rpm
fi

# Install Couchbase Server 4.1
yum install -y couchbase-server-community-4.1.0-centos6.x86_64.rpm

# Start Couchbase Server 4.1
/opt/couchbase/etc/couchbase_init.d start

# Waiting for server
sleep 10

# Initialize the cluster and a new user (Administrator/password)
/opt/couchbase/bin/couchbase-cli cluster-init -c 127.0.0.1 --cluster-init-username=Administrator --cluster-init-password=password --cluster-init-ramsize=600 -u admin -p password

# Create a new bucket called todo
/opt/couchbase/bin/couchbase-cli bucket-create -c 127.0.0.1:8091 --bucket=todo --bucket-type=couchbase --bucket-port=11211 --bucket-ramsize=600 --bucket-replica=1 -u Administrator -p password
