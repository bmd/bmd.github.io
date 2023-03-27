default: run

run:
	npm run start

build:
	npm run build

deploy: build
	./node_modules/.bin/cross-env NODE_ENV=production ./node_modules/.bin/webpack --progress

lint:
	npm run prettier

install:
	yarn install