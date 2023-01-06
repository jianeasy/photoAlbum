module.exports = {
    setting:{
        "import/resolver": {
            alias:{
                map:[[
                    '@','./src'
                            ], [
                                '@components', './src/components'
                            ]],
                extensions:[ '.jsx', '.tsx', '.ts', '.js', '.scss']
            }
        },
       
    }
}
