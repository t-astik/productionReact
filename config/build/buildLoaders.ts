import * as webpack from "webpack"

export function buildLoaders(): webpack.RuleSetRule[] {
    const typscriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typscriptLoader,
    ]
}