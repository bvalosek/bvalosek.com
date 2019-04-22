setup:
	npm --version
	npm install

build:
	npm run build

deploy:
	aws s3 sync --delete ./public s3://phatnode-cloudfront-static-sites/bvalosek.com
	aws cloudfront create-invalidation --distribution-id E38BD2AROPFP8E --paths "/*"

