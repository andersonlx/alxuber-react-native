 /**
 * Created: Anderson Xavier,
 * Date: 19/06/2019,
 * Follow: @andersonx. 
 * Desafio: Rocketseat
 */

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */



module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
