# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0](https://github.com/blacha/st/compare/v1.0.0...v2.0.0) (2020-01-24)


* feat!: player names are not case sensitive for ea accounts ([6de1c45](https://github.com/blacha/st/commit/6de1c4502b355d207f4eac8f8760f81470686f73))


### Features

* check player exist command ([0d972f8](https://github.com/blacha/st/commit/0d972f8f3bbe21aebc5c8ffc85cbbdb896fdc347))


### BREAKING CHANGES

* this splits PlayerName into two
- PlayerNameDisplay: case sensitive player name
- PlayerNameId: lowercased player name





# [1.0.0](https://github.com/blacha/st/compare/v0.10.1...v1.0.0) (2020-01-23)

**Note:** Version bump only for package @cncta/client





## [0.10.1](https://github.com/blacha/st/compare/v0.10.0...v0.10.1) (2020-01-20)


### Bug Fixes

* switch away from npmignore to limit what is published ([26b4cbe](https://github.com/blacha/st/commit/26b4cbe4ffdd5595aba6153e752b41b3d3fb4638))





# [0.10.0](https://github.com/blacha/st/compare/v0.9.0...v0.10.0) (2020-01-20)


### Features

* headless game client ([0c6c5cb](https://github.com/blacha/st/commit/0c6c5cb01d82a49a505d211a22a1192be608dcea))
* improve sector parser ([634af87](https://github.com/blacha/st/commit/634af8728c8b9cb1b299a9c33308c3a3e03161c7))
* load and parse world data ([0a97630](https://github.com/blacha/st/commit/0a976309c52e30fe95315f3c04249aa0e2b04f09))
* parse and decode sector data ([b3ac867](https://github.com/blacha/st/commit/b3ac86774d536ad9d37b97a5e75aa44fc948f979))
* send simple command types ([0395217](https://github.com/blacha/st/commit/0395217c7f2ca84707adbf1cf38738344b653d6c))
* switch to a base-n implementation to share the logic between 58 and 91 ([8dc124c](https://github.com/blacha/st/commit/8dc124c384e69d9662733b99facb37da89018c69))