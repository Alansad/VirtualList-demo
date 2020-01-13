NPM_REGISTRY=http://registry.npmjs.lianjia.com:7001
DIST_DIR=$(shell node -p "require('./package.json').name.replace(/\//g, '_')")
# DIST_DIR_FE=${DIST_DIR}_fe
RELEASES_DIR=releases

default: pack

init: clean
	mkdir -p $(RELEASES_DIR)/$(DIST_DIR)
	# mkdir -p $(RELEASES_DIR)/$(DIST_DIR_FE)/public

pack: init
	npm install --registry=$(NPM_REGISTRY)

	npm run build

	rm -rf ./node_modules

	npm install --production --registry=$(NPM_REGISTRY)

	cp -r bin dist node_modules package.json package-lock.json tsconfig.json ./$(RELEASES_DIR)/$(DIST_DIR)/
	# cp -r dist/statics/* ./$(RELEASES_DIR)/$(DIST_DIR_FE)/public/

	cd ./$(RELEASES_DIR) && tar czf $(DIST_DIR).tar.gz ./$(DIST_DIR)/
	# cd ./$(RELEASES_DIR) && tar czf $(DIST_DIR_FE).tar.gz ./$(DIST_DIR_FE)/

clean:
	rm -rf ./$(RELEASES_DIR)
