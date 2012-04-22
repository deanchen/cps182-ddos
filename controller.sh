#!/usr/bin
SCRIPT=$1
IP=$2
WORKERS=$3
for (( i=1; i <= ${WORKERS}; i++ )) 
do
  echo "starting $i node"
  node ${SCRIPT}.js $IP $i & 
done
