import path from 'path'
import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  distDir: 'dist',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    mdxRs: true,
    serverActions: true,
    esmExternals: 'loose',
    outputFileTracingRoot: path.join(__dirname, '../../'),
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl',
        'node_modules/@esbuild/linux-x64',
      ],
    },
  },
  webpack: (config) => {
    config.resolve.modules = [path.resolve(__dirname), 'node_modules'];
    config.resolve.alias = {
      '@': path.resolve(__dirname),
      '@/lib': path.resolve(__dirname, './lib'),
      '@/components': path.resolve(__dirname, './components'),
      '@/store': path.resolve(__dirname, './store'),
      '@/hooks': path.resolve(__dirname, './hooks'),
      '@/styles': path.resolve(__dirname, './styles'),
      '@/types': path.resolve(__dirname, './types'),
      '@/actions': path.resolve(__dirname, './actions'),
      '@/services': path.resolve(__dirname, './services')
    }
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false
    }
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx']
    }
    return config
  },
}

const withMDX = nextMDX()
export default withMDX(nextConfig)
