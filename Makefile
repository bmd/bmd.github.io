default: run

run:
	npm run start

build:
	npm run build

deploy: build
	cross-env NODE_ENV=production webpack --progress

lint:
	npm run prettier
