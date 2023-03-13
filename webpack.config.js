const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		bundle: path.resolve(__dirname, 'src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		assetModuleFilename: '[name][ext]',
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
			watch: true,
		},
		port: 3000,
		open: true,
		compress: true,
	},
	module: {
		rules: [
			{
				test: /\.scss/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(jpg|jpeg|png|svg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
};
