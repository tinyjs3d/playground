import 'tinyjs-types';
import type * as Three from 'tinyjs-plugin-three';

declare global {
  namespace Tiny {
    const three: typeof Three;
  }
}




