#!/usr/bin
SCRIPT=$1
IP=$2
WORKERS=$3
x=1
while [ $x -le $WORKERS ]
do
  echo "starting $x node"
  node ${SCRIPT}.js $IP $x & 
  x=$(($x+1))
done
