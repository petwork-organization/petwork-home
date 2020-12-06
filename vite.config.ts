const pathAliasMap = {
  '@/': '/src/',
  '@atoms/': '/src/components/atoms/',
  '@molecules/': '/src/components/molecules/',
  '@organisms/': '/src/components/organisms/',
  '@templates/': '/src/components/templates/',
  '@pages/': '/src/components/pages/',
};

export default {
  resolvers: [
    {
      alias(path: string) {
        for (const [slug, res] of Object.entries(pathAliasMap)) {
          if (path.startsWith(slug)) {
            return path.replace(slug, res);
          }
        }
      },
    },
  ],
};
