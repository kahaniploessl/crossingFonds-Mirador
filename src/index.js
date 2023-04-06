import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';


// const config = {
//   id: 'demo',
//   windows: [{
//     imageToolsEnabled: true,
//     imageToolsOpen: true,
//     manifestId: 'http://localhost:4444/assets/JSON/case1.json',

//     // 'https://purl.stanford.edu/sn904cj3429/iiif/manifest',
//   }],
//   theme: {
//     palette: {
//       primary: {
//         main: '#1967d2',
//       },
//     },
//   },
// };

    const config = {
      id: 'demo',
      windows: [

      {
        imageToolsEnabled: true,
        imageToolsOpen: true,
        manifestId: 'http://localhost:4444/assets/JSON/example.json',
      },
      {
        imageToolsEnabled: true,
        imageToolsOpen: true,
        manifestId: 'http://localhost:4444/assets/JSON/case1.json',
      }
      ]
    };

Mirador.viewer(config, [
  ...miradorImageToolsPlugin,
]);
