#!/bin/bash

aws s3 sync --delete ./www s3://phatnode-cloudfront-static-sites/bvalosek.com
aws cloudfront create-invalidation --distribution-id E38BD2AROPFP8E --paths "/*"
