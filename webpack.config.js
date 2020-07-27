const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry : ['react-hot-loader/patch','./src/index.js'],
	output:{
		path: path.join(__dirname,'/dist'),
		filename: 'main.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}, {
				test: /\.html$/,
				use: ['html-loader']
			}, {
				test: /\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		})
	],
  resolve: {
		alias: {
			components: path.resolve(__dirname, 'src/components'),
			css: path.resolve(__dirname, 'src/css/'),
			img: path.resolve(__dirname, 'src/img/'),
		}
	},

	devServer: {
		watchContentBase: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};