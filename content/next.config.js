/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
	reactStrictMode: true,
	webpack(config, { isServer }) {
		config.plugins.push(
			new NextFederationPlugin({
				name: 'content',
				filename: 'static/chunks/remoteEntry.js',
				exposes: {
					'./Header': './components/Header.tsx'
				}
			})
		);
		return config;
	}
};

module.exports = nextConfig;
