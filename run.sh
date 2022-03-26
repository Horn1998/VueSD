#!/bin/bash


sudo cnpm install
sudo cnpm run build
sudo docker cp ./dist/ /usr/share/nginx/html/ c2ff2b54ab68

