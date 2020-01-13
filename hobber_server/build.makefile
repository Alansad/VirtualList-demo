default: copy

copy: clean

	mkdir -p ./dist/statics
	mkdir -p ./dist/views

	cp -r ./src/statics/* ./dist/statics/
	cp -r ./src/views/* ./dist/views/

clean:
	rm -rf ./dist/statics/*
	rm -rf ./dist/views/*
