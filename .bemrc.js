module.exports = {
    root: true,
    modules: {
        "bem-tools": {
            plugins: {
                create: {
                    techs: "scss",
                    levels: {
                        "src/scss": {
                            default: true
                        }
                    }
                }
            }
        }
    }
};
