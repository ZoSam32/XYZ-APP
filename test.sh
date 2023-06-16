#!/bin/bash

SAMPLE=`kubectl get svc -n xyz-app --output jsonpath="{.items[0].status.loadBalancer.ingress[0].ip}"`

sleep 10

STATUS=`curl --silent --head $SAMPLE/ready | head -1 | cut -f 2 -d' '`

if [ "$STATUS" != "200" ] 
then
    echo "FAILURE. Readiness probes having issues."
    exit 1
else
    echo "SUCCESS"
fi
