var t=Object.defineProperty,e=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,h=(e,s,i)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,a=(t,e)=>{for(var s in e||(e={}))r.call(e,s)&&h(t,s,e[s]);if(i)for(var s of i(e))n.call(e,s)&&h(t,s,e[s]);return t};import{_ as o,m as l,R as c,B as u,T as m,I as y,D as _,a as d,b as x,S as p,c as z,d as M}from"./vendor.752360b2.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const s of t)if("childList"===s.type)for(const t of s.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const g=[];for(let L=0;L<256;L++)g[L]=(L<16?"0":"")+L.toString(16);let f=1234567;const w={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,s=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(g[255&t]+g[t>>8&255]+g[t>>16&255]+g[t>>24&255]+"-"+g[255&e]+g[e>>8&255]+"-"+g[e>>16&15|64]+g[e>>24&255]+"-"+g[63&s|128]+g[s>>8&255]+"-"+g[s>>16&255]+g[s>>24&255]+g[255&i]+g[i>>8&255]+g[i>>16&255]+g[i>>24&255]).toUpperCase()},clamp:function(t,e,s){return Math.max(e,Math.min(s,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,s,i,r){return i+(t-e)*(r-i)/(s-e)},inverseLerp:function(t,e,s){return t!==e?(s-t)/(e-t):0},lerp:function(t,e,s){return(1-s)*t+s*e},damp:function(t,e,s,i){return w.lerp(t,e,1-Math.exp(-s*i))},pingpong:function(t,e=1){return e-Math.abs(w.euclideanModulo(t,2*e)-e)},smoothstep:function(t,e,s){return t<=e?0:t>=s?1:(t=(t-e)/(s-e))*t*(3-2*t)},smootherstep:function(t,e,s){return t<=e?0:t>=s?1:(t=(t-e)/(s-e))*t*t*(t*(6*t-15)+10)},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){return void 0!==t&&(f=t%2147483647),f=16807*f%2147483647,(f-1)/2147483646},degToRad:function(t){return t*w.DEG2RAD},radToDeg:function(t){return t*w.RAD2DEG},isPowerOfTwo:function(t){return 0==(t&t-1)&&0!==t},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,s,i,r){const n=Math.cos,h=Math.sin,a=n(s/2),o=h(s/2),l=n((e+i)/2),c=h((e+i)/2),u=n((e-i)/2),m=h((e-i)/2),y=n((i-e)/2),_=h((i-e)/2);switch(r){case"XYX":t.set(a*c,o*u,o*m,a*l);break;case"YZY":t.set(o*m,a*c,o*u,a*l);break;case"ZXZ":t.set(o*u,o*m,a*c,a*l);break;case"XZX":t.set(a*c,o*_,o*y,a*l);break;case"YXY":t.set(o*y,a*c,o*_,a*l);break;case"ZYZ":t.set(o*_,o*y,a*c,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};class b{constructor(t=0,e=0,s=0,i=1){this._x=t,this._y=e,this._z=s,this._w=i}static slerp(t,e,s,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),s.slerpQuaternions(t,e,i)}static slerpFlat(t,e,s,i,r,n,h){let a=s[i+0],o=s[i+1],l=s[i+2],c=s[i+3];const u=r[n+0],m=r[n+1],y=r[n+2],_=r[n+3];if(0===h)return t[e+0]=a,t[e+1]=o,t[e+2]=l,void(t[e+3]=c);if(1===h)return t[e+0]=u,t[e+1]=m,t[e+2]=y,void(t[e+3]=_);if(c!==_||a!==u||o!==m||l!==y){let t=1-h;const e=a*u+o*m+l*y+c*_,s=e>=0?1:-1,i=1-e*e;if(i>Number.EPSILON){const r=Math.sqrt(i),n=Math.atan2(r,e*s);t=Math.sin(t*n)/r,h=Math.sin(h*n)/r}const r=h*s;if(a=a*t+u*r,o=o*t+m*r,l=l*t+y*r,c=c*t+_*r,t===1-h){const t=1/Math.sqrt(a*a+o*o+l*l+c*c);a*=t,o*=t,l*=t,c*=t}}t[e]=a,t[e+1]=o,t[e+2]=l,t[e+3]=c}static multiplyQuaternionsFlat(t,e,s,i,r,n){const h=s[i],a=s[i+1],o=s[i+2],l=s[i+3],c=r[n],u=r[n+1],m=r[n+2],y=r[n+3];return t[e]=h*y+l*c+a*m-o*u,t[e+1]=a*y+l*u+o*c-h*m,t[e+2]=o*y+l*m+h*u-a*c,t[e+3]=l*y-h*c-a*u-o*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,s,i){return this._x=t,this._y=e,this._z=s,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!t||!t.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const s=t._x,i=t._y,r=t._z,n=t._order,h=Math.cos,a=Math.sin,o=h(s/2),l=h(i/2),c=h(r/2),u=a(s/2),m=a(i/2),y=a(r/2);switch(n){case"XYZ":this._x=u*l*c+o*m*y,this._y=o*m*c-u*l*y,this._z=o*l*y+u*m*c,this._w=o*l*c-u*m*y;break;case"YXZ":this._x=u*l*c+o*m*y,this._y=o*m*c-u*l*y,this._z=o*l*y-u*m*c,this._w=o*l*c+u*m*y;break;case"ZXY":this._x=u*l*c-o*m*y,this._y=o*m*c+u*l*y,this._z=o*l*y+u*m*c,this._w=o*l*c-u*m*y;break;case"ZYX":this._x=u*l*c-o*m*y,this._y=o*m*c+u*l*y,this._z=o*l*y-u*m*c,this._w=o*l*c+u*m*y;break;case"YZX":this._x=u*l*c+o*m*y,this._y=o*m*c+u*l*y,this._z=o*l*y-u*m*c,this._w=o*l*c-u*m*y;break;case"XZY":this._x=u*l*c-o*m*y,this._y=o*m*c-u*l*y,this._z=o*l*y+u*m*c,this._w=o*l*c+u*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return!1!==e&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const s=e/2,i=Math.sin(s);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,s=e[0],i=e[4],r=e[8],n=e[1],h=e[5],a=e[9],o=e[2],l=e[6],c=e[10],u=s+h+c;if(u>0){const t=.5/Math.sqrt(u+1);this._w=.25/t,this._x=(l-a)*t,this._y=(r-o)*t,this._z=(n-i)*t}else if(s>h&&s>c){const t=2*Math.sqrt(1+s-h-c);this._w=(l-a)/t,this._x=.25*t,this._y=(i+n)/t,this._z=(r+o)/t}else if(h>c){const t=2*Math.sqrt(1+h-s-c);this._w=(r-o)/t,this._x=(i+n)/t,this._y=.25*t,this._z=(a+l)/t}else{const t=2*Math.sqrt(1+c-s-h);this._w=(n-i)/t,this._x=(r+o)/t,this._y=(a+l)/t,this._z=.25*t}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let s=t.dot(e)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(w.clamp(this.dot(t),-1,1)))}rotateTowards(t,e){const s=this.angleTo(t);if(0===s)return this;const i=Math.min(1,e/s);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return void 0!==e?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const s=t._x,i=t._y,r=t._z,n=t._w,h=e._x,a=e._y,o=e._z,l=e._w;return this._x=s*l+n*h+i*o-r*a,this._y=i*l+n*a+r*h-s*o,this._z=r*l+n*o+s*a-i*h,this._w=n*l-s*h-i*a-r*o,this._onChangeCallback(),this}slerp(t,e){if(0===e)return this;if(1===e)return this.copy(t);const s=this._x,i=this._y,r=this._z,n=this._w;let h=n*t._w+s*t._x+i*t._y+r*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=n,this._x=s,this._y=i,this._z=r,this;const a=1-h*h;if(a<=Number.EPSILON){const t=1-e;return this._w=t*n+e*this._w,this._x=t*s+e*this._x,this._y=t*i+e*this._y,this._z=t*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const o=Math.sqrt(a),l=Math.atan2(o,h),c=Math.sin((1-e)*l)/o,u=Math.sin(e*l)/o;return this._w=n*c+this._w*u,this._x=s*c+this._x*u,this._y=i*c+this._y*u,this._z=r*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,s){this.copy(t).slerp(e,s)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}b.prototype.isQuaternion=!0;class E{constructor(t=0,e=0,s=0){this.x=t,this.y=e,this.z=s}set(t,e,s){return void 0===s&&(s=this.z),this.x=t,this.y=e,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return void 0!==e?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return void 0!==e?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return void 0!==e?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(k.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(k.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,s=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*s+r[6]*i,this.y=r[1]*e+r[4]*s+r[7]*i,this.z=r[2]*e+r[5]*s+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,s=this.y,i=this.z,r=t.elements,n=1/(r[3]*e+r[7]*s+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*s+r[8]*i+r[12])*n,this.y=(r[1]*e+r[5]*s+r[9]*i+r[13])*n,this.z=(r[2]*e+r[6]*s+r[10]*i+r[14])*n,this}applyQuaternion(t){const e=this.x,s=this.y,i=this.z,r=t.x,n=t.y,h=t.z,a=t.w,o=a*e+n*i-h*s,l=a*s+h*e-r*i,c=a*i+r*s-n*e,u=-r*e-n*s-h*i;return this.x=o*a+u*-r+l*-h-c*-n,this.y=l*a+u*-n+c*-r-o*-h,this.z=c*a+u*-h+o*-n-l*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,s=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*s+r[8]*i,this.y=r[1]*e+r[5]*s+r[9]*i,this.z=r[2]*e+r[6]*s+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(e,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this.z=t.z+(e.z-t.z)*s,this}cross(t,e){return void 0!==e?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const s=t.x,i=t.y,r=t.z,n=e.x,h=e.y,a=e.z;return this.x=i*a-r*h,this.y=r*n-s*a,this.z=s*h-i*n,this}projectOnVector(t){const e=t.lengthSq();if(0===e)return this.set(0,0,0);const s=t.dot(this)/e;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return C.copy(this).projectOnVector(t),this.sub(C)}reflect(t){return this.sub(C.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(0===e)return Math.PI/2;const s=this.dot(t)/e;return Math.acos(w.clamp(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,s=this.y-t.y,i=this.z-t.z;return e*e+s*s+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,s){const i=Math.sin(e)*t;return this.x=i*Math.sin(s),this.y=Math.cos(e)*t,this.z=i*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,s){return this.x=t*Math.sin(e),this.y=s,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=s,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,s){return void 0!==s&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}E.prototype.isVector3=!0;const C=new E,k=new b;class T{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,s,i,r,n,h,a,o,l,c,u,m,y,_,d){const x=this.elements;return x[0]=t,x[4]=e,x[8]=s,x[12]=i,x[1]=r,x[5]=n,x[9]=h,x[13]=a,x[2]=o,x[6]=l,x[10]=c,x[14]=u,x[3]=m,x[7]=y,x[11]=_,x[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return(new T).fromArray(this.elements)}copy(t){const e=this.elements,s=t.elements;return e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[8]=s[8],e[9]=s[9],e[10]=s[10],e[11]=s[11],e[12]=s[12],e[13]=s[13],e[14]=s[14],e[15]=s[15],this}copyPosition(t){const e=this.elements,s=t.elements;return e[12]=s[12],e[13]=s[13],e[14]=s[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,s){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,e,s){return this.set(t.x,e.x,s.x,0,t.y,e.y,s.y,0,t.z,e.z,s.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,s=t.elements,i=1/v.setFromMatrixColumn(t,0).length(),r=1/v.setFromMatrixColumn(t,1).length(),n=1/v.setFromMatrixColumn(t,2).length();return e[0]=s[0]*i,e[1]=s[1]*i,e[2]=s[2]*i,e[3]=0,e[4]=s[4]*r,e[5]=s[5]*r,e[6]=s[6]*r,e[7]=0,e[8]=s[8]*n,e[9]=s[9]*n,e[10]=s[10]*n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,s=t.x,i=t.y,r=t.z,n=Math.cos(s),h=Math.sin(s),a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r);if("XYZ"===t.order){const t=n*l,s=n*c,i=h*l,r=h*c;e[0]=a*l,e[4]=-a*c,e[8]=o,e[1]=s+i*o,e[5]=t-r*o,e[9]=-h*a,e[2]=r-t*o,e[6]=i+s*o,e[10]=n*a}else if("YXZ"===t.order){const t=a*l,s=a*c,i=o*l,r=o*c;e[0]=t+r*h,e[4]=i*h-s,e[8]=n*o,e[1]=n*c,e[5]=n*l,e[9]=-h,e[2]=s*h-i,e[6]=r+t*h,e[10]=n*a}else if("ZXY"===t.order){const t=a*l,s=a*c,i=o*l,r=o*c;e[0]=t-r*h,e[4]=-n*c,e[8]=i+s*h,e[1]=s+i*h,e[5]=n*l,e[9]=r-t*h,e[2]=-n*o,e[6]=h,e[10]=n*a}else if("ZYX"===t.order){const t=n*l,s=n*c,i=h*l,r=h*c;e[0]=a*l,e[4]=i*o-s,e[8]=t*o+r,e[1]=a*c,e[5]=r*o+t,e[9]=s*o-i,e[2]=-o,e[6]=h*a,e[10]=n*a}else if("YZX"===t.order){const t=n*a,s=n*o,i=h*a,r=h*o;e[0]=a*l,e[4]=r-t*c,e[8]=i*c+s,e[1]=c,e[5]=n*l,e[9]=-h*l,e[2]=-o*l,e[6]=s*c+i,e[10]=t-r*c}else if("XZY"===t.order){const t=n*a,s=n*o,i=h*a,r=h*o;e[0]=a*l,e[4]=-c,e[8]=o*l,e[1]=t*c+r,e[5]=n*l,e[9]=s*c-i,e[2]=i*c-s,e[6]=h*l,e[10]=r*c+t}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(R,t,F)}lookAt(t,e,s){const i=this.elements;return V.subVectors(t,e),0===V.lengthSq()&&(V.z=1),V.normalize(),X.crossVectors(s,V),0===X.lengthSq()&&(1===Math.abs(s.z)?V.x+=1e-4:V.z+=1e-4,V.normalize(),X.crossVectors(s,V)),X.normalize(),I.crossVectors(V,X),i[0]=X.x,i[4]=I.x,i[8]=V.x,i[1]=X.y,i[5]=I.y,i[9]=V.y,i[2]=X.z,i[6]=I.z,i[10]=V.z,this}multiply(t,e){return void 0!==e?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const s=t.elements,i=e.elements,r=this.elements,n=s[0],h=s[4],a=s[8],o=s[12],l=s[1],c=s[5],u=s[9],m=s[13],y=s[2],_=s[6],d=s[10],x=s[14],p=s[3],z=s[7],M=s[11],g=s[15],f=i[0],w=i[4],b=i[8],E=i[12],C=i[1],k=i[5],T=i[9],v=i[13],S=i[2],R=i[6],F=i[10],X=i[14],I=i[3],V=i[7],P=i[11],Y=i[15];return r[0]=n*f+h*C+a*S+o*I,r[4]=n*w+h*k+a*R+o*V,r[8]=n*b+h*T+a*F+o*P,r[12]=n*E+h*v+a*X+o*Y,r[1]=l*f+c*C+u*S+m*I,r[5]=l*w+c*k+u*R+m*V,r[9]=l*b+c*T+u*F+m*P,r[13]=l*E+c*v+u*X+m*Y,r[2]=y*f+_*C+d*S+x*I,r[6]=y*w+_*k+d*R+x*V,r[10]=y*b+_*T+d*F+x*P,r[14]=y*E+_*v+d*X+x*Y,r[3]=p*f+z*C+M*S+g*I,r[7]=p*w+z*k+M*R+g*V,r[11]=p*b+z*T+M*F+g*P,r[15]=p*E+z*v+M*X+g*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],s=t[4],i=t[8],r=t[12],n=t[1],h=t[5],a=t[9],o=t[13],l=t[2],c=t[6],u=t[10],m=t[14];return t[3]*(+r*a*c-i*o*c-r*h*u+s*o*u+i*h*m-s*a*m)+t[7]*(+e*a*m-e*o*u+r*n*u-i*n*m+i*o*l-r*a*l)+t[11]*(+e*o*c-e*h*m-r*n*c+s*n*m+r*h*l-s*o*l)+t[15]*(-i*h*l-e*a*c+e*h*u+i*n*c-s*n*u+s*a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,s){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=s),this}invert(){const t=this.elements,e=t[0],s=t[1],i=t[2],r=t[3],n=t[4],h=t[5],a=t[6],o=t[7],l=t[8],c=t[9],u=t[10],m=t[11],y=t[12],_=t[13],d=t[14],x=t[15],p=c*d*o-_*u*o+_*a*m-h*d*m-c*a*x+h*u*x,z=y*u*o-l*d*o-y*a*m+n*d*m+l*a*x-n*u*x,M=l*_*o-y*c*o+y*h*m-n*_*m-l*h*x+n*c*x,g=y*c*a-l*_*a-y*h*u+n*_*u+l*h*d-n*c*d,f=e*p+s*z+i*M+r*g;if(0===f)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/f;return t[0]=p*w,t[1]=(_*u*r-c*d*r-_*i*m+s*d*m+c*i*x-s*u*x)*w,t[2]=(h*d*r-_*a*r+_*i*o-s*d*o-h*i*x+s*a*x)*w,t[3]=(c*a*r-h*u*r-c*i*o+s*u*o+h*i*m-s*a*m)*w,t[4]=z*w,t[5]=(l*d*r-y*u*r+y*i*m-e*d*m-l*i*x+e*u*x)*w,t[6]=(y*a*r-n*d*r-y*i*o+e*d*o+n*i*x-e*a*x)*w,t[7]=(n*u*r-l*a*r+l*i*o-e*u*o-n*i*m+e*a*m)*w,t[8]=M*w,t[9]=(y*c*r-l*_*r-y*s*m+e*_*m+l*s*x-e*c*x)*w,t[10]=(n*_*r-y*h*r+y*s*o-e*_*o-n*s*x+e*h*x)*w,t[11]=(l*h*r-n*c*r-l*s*o+e*c*o+n*s*m-e*h*m)*w,t[12]=g*w,t[13]=(l*_*i-y*c*i+y*s*u-e*_*u-l*s*d+e*c*d)*w,t[14]=(y*h*i-n*_*i-y*s*a+e*_*a+n*s*d-e*h*d)*w,t[15]=(n*c*i-l*h*i+l*s*a-e*c*a-n*s*u+e*h*u)*w,this}scale(t){const e=this.elements,s=t.x,i=t.y,r=t.z;return e[0]*=s,e[4]*=i,e[8]*=r,e[1]*=s,e[5]*=i,e[9]*=r,e[2]*=s,e[6]*=i,e[10]*=r,e[3]*=s,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,s,i))}makeTranslation(t,e,s){return this.set(1,0,0,t,0,1,0,e,0,0,1,s,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,e,-s,0,0,s,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,0,s,0,0,1,0,0,-s,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,-s,0,0,s,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const s=Math.cos(e),i=Math.sin(e),r=1-s,n=t.x,h=t.y,a=t.z,o=r*n,l=r*h;return this.set(o*n+s,o*h-i*a,o*a+i*h,0,o*h+i*a,l*h+s,l*a-i*n,0,o*a-i*h,l*a+i*n,r*a*a+s,0,0,0,0,1),this}makeScale(t,e,s){return this.set(t,0,0,0,0,e,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,e,s){return this.set(1,e,s,0,t,1,s,0,t,e,1,0,0,0,0,1),this}compose(t,e,s){const i=this.elements,r=e._x,n=e._y,h=e._z,a=e._w,o=r+r,l=n+n,c=h+h,u=r*o,m=r*l,y=r*c,_=n*l,d=n*c,x=h*c,p=a*o,z=a*l,M=a*c,g=s.x,f=s.y,w=s.z;return i[0]=(1-(_+x))*g,i[1]=(m+M)*g,i[2]=(y-z)*g,i[3]=0,i[4]=(m-M)*f,i[5]=(1-(u+x))*f,i[6]=(d+p)*f,i[7]=0,i[8]=(y+z)*w,i[9]=(d-p)*w,i[10]=(1-(u+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,s){const i=this.elements;let r=v.set(i[0],i[1],i[2]).length();const n=v.set(i[4],i[5],i[6]).length(),h=v.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],S.copy(this);const a=1/r,o=1/n,l=1/h;return S.elements[0]*=a,S.elements[1]*=a,S.elements[2]*=a,S.elements[4]*=o,S.elements[5]*=o,S.elements[6]*=o,S.elements[8]*=l,S.elements[9]*=l,S.elements[10]*=l,e.setFromRotationMatrix(S),s.x=r,s.y=n,s.z=h,this}makePerspective(t,e,s,i,r,n){void 0===n&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const h=this.elements,a=2*r/(e-t),o=2*r/(s-i),l=(e+t)/(e-t),c=(s+i)/(s-i),u=-(n+r)/(n-r),m=-2*n*r/(n-r);return h[0]=a,h[4]=0,h[8]=l,h[12]=0,h[1]=0,h[5]=o,h[9]=c,h[13]=0,h[2]=0,h[6]=0,h[10]=u,h[14]=m,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,s,i,r,n){const h=this.elements,a=1/(e-t),o=1/(s-i),l=1/(n-r),c=(e+t)*a,u=(s+i)*o,m=(n+r)*l;return h[0]=2*a,h[4]=0,h[8]=0,h[12]=-c,h[1]=0,h[5]=2*o,h[9]=0,h[13]=-u,h[2]=0,h[6]=0,h[10]=-2*l,h[14]=-m,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,s=t.elements;for(let i=0;i<16;i++)if(e[i]!==s[i])return!1;return!0}fromArray(t,e=0){for(let s=0;s<16;s++)this.elements[s]=t[s+e];return this}toArray(t=[],e=0){const s=this.elements;return t[e]=s[0],t[e+1]=s[1],t[e+2]=s[2],t[e+3]=s[3],t[e+4]=s[4],t[e+5]=s[5],t[e+6]=s[6],t[e+7]=s[7],t[e+8]=s[8],t[e+9]=s[9],t[e+10]=s[10],t[e+11]=s[11],t[e+12]=s[12],t[e+13]=s[13],t[e+14]=s[14],t[e+15]=s[15],t}}T.prototype.isMatrix4=!0;const v=new E,S=new T,R=new E(0,0,0),F=new E(1,1,1),X=new E,I=new E,V=new E,P=new T,Y=new b;class Z{constructor(t=0,e=0,s=0,i=Z.DefaultOrder){this._x=t,this._y=e,this._z=s,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,s,i){return this._x=t,this._y=e,this._z=s,this._order=i||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e,s){const i=w.clamp,r=t.elements,n=r[0],h=r[4],a=r[8],o=r[1],l=r[5],c=r[9],u=r[2],m=r[6],y=r[10];switch(e=e||this._order){case"XYZ":this._y=Math.asin(i(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,y),this._z=Math.atan2(-h,n)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-i(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,y),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(i(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-u,y),this._z=Math.atan2(-h,l)):(this._y=0,this._z=Math.atan2(o,n));break;case"ZYX":this._y=Math.asin(-i(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(o,n)):(this._x=0,this._z=Math.atan2(-h,l));break;case"YZX":this._z=Math.asin(i(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(a,y));break;case"XZY":this._z=Math.asin(-i(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(a,n)):(this._x=Math.atan2(-c,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,!1!==s&&this._onChangeCallback(),this}setFromQuaternion(t,e,s){return P.makeRotationFromQuaternion(t),this.setFromRotationMatrix(P,e,s)}setFromVector3(t,e){return this.set(t.x,t.y,t.z,e||this._order)}reorder(t){return Y.setFromEuler(this),this.setFromQuaternion(Y,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],void 0!==t[3]&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}toVector3(t){return t?t.set(this._x,this._y,this._z):new E(this._x,this._y,this._z)}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}Z.prototype.isEuler=!0,Z.DefaultOrder="XYZ",Z.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class O extends Tiny.Container{constructor(t){var e,s;super(),h(this,"symbol"!=typeof(e="option")?e+"":e,s),this.option=t,this.init()}async init(){try{const t=await this.loadResource(),e=this.option.scene?t.scene.gltf:t.model.gltf;this.setSky(e),this.setCamera(e.descriptor),this.setLights(e);const s=Tiny.three.Model.from(t.model.gltf);this.addChild(s)}catch(t){alert("模型渲染失败，请检查你输入的 gltf 链接")}}loadResource(){const{model:t,scene:e}=this.option,s=new Tiny.loaders.Loader;return s.add({name:"model",url:t}),e&&s.add({name:"scene",url:e}),new Promise(((t,e)=>{s.load(((e,s)=>{t(s)})).on("error",(t=>{e(t)}))}))}setSky(t){if(t._descriptor.extensions&&t._descriptor.extensions.EXT_lights_image_based&&t._descriptor.extensions.EXT_lights_image_based.lights){const e=t._descriptor.extensions.EXT_lights_image_based.lights[0],s=t._images,i=[],r=[],n=["POSITIVE_X","NEGATIVE_X","POSITIVE_Y","NEGATIVE_Y","NEGATIVE_Z","POSITIVE_Z"];for(let t=0;t<n.length;t++){const h=`TEXTURE_CUBE_MAP_${n[t]}`,a=[],o=[];for(let i=0;i<e.specularImages.length;i++){const r=s[e.specularImages[i][t]];i===e.specularImages.length-1&&a.push(r),o.push(r)}i.push(new Tiny.three.MipmapResource(a,Tiny.three.TARGETS[h])),r.push(new Tiny.three.MipmapResource(o,Tiny.three.TARGETS[h]))}const h=new Tiny.three.CubeMipmapResource(i,1),a=new Tiny.three.CubeMipmapTexture(h),o=new Tiny.three.CubeMipmapResource(r,e.specularImages.length),l=new Tiny.three.CubeMipmapTexture(o),c=new Tiny.three.ImageBasedLighting(a,l);Tiny.three.LightingEnvironment.main.imageBasedLighting=c,this.addChild(new Tiny.three.Skybox(l))}}setCamera(t){const e=Tiny.three.Camera.main,s=t.nodes.find((t=>void 0!==t.camera));if(s){if(s.translation&&e.position.set(...s.translation),s.rotation){const t=new b(...s.rotation),i=(new Z).setFromQuaternion(t,"YXZ");e.rotationQuaternion.setEulerAngles(180*-i.x/Math.PI,180+180*i.y/Math.PI,180*i.z/Math.PI)}const i=t.cameras[s.camera];e.near=i.perspective.znear,e.far=i.perspective.zfar}}setLights(t){new Tiny.three.glTFLightParser(t).getLightCfg().forEach(((t,e)=>{const s=Object.assign(new Tiny.three.Light,t);Tiny.three.LightingEnvironment.main.lights.push(s)}))}}function A(){const[t,i]=o.exports.useState(null),[r,n]=o.exports.useState(""),[h,x]=o.exports.useState([]),p=o.exports.useCallback((()=>{try{const t=localStorage.getItem("gltfPreviewRecords")||"";x(JSON.parse(t))}catch(t){}}),[]),z=o.exports.useCallback((t=>{const e=[...h];e.push({name:t,url:t,key:e.length?e[e.length-1].key+1:0,previewTime:(new Date).toLocaleString()}),x(e),localStorage.setItem("gltfPreviewRecords",JSON.stringify(e))}),[h]),M=o.exports.useCallback((t=>{const e=[...h],s=e.findIndex((e=>e.key===t.key));-1!==s&&(e.splice(s,1),x(e)),localStorage.setItem("gltfPreviewRecords",JSON.stringify(e))}),[h]),g=o.exports.useCallback((()=>{const t=prompt("请为JSON文件命名",""),e=document.createElement("a");e.download=`${t}.json`,e.style.display="none";var s=new Blob([JSON.stringify(h.map((t=>({name:t.name,url:t.url}))))]);e.href=URL.createObjectURL(s),document.body.appendChild(e),e.click(),document.body.removeChild(e)}),[[h]]),f=o.exports.useCallback((t=>{const i=prompt("请输入模型名称",t.name);if(!i)return;const r=(n=a({},t),e(n,s({name:i})));var n;const o=[...h],l=o.findIndex((e=>e.key===t.key));-1!==l&&(o.splice(l,1,r),x(o)),localStorage.setItem("gltfPreviewRecords",JSON.stringify(o))}),[h]),w=o.exports.useCallback((()=>{if(!t)return;const e=t.view.parentElement;Tiny.three.Camera.main=null,Tiny.three.LightingEnvironment.main.destroy(),Tiny.three.destroyTextureCache(),t.renderer3d.destroy(),Tiny.three.detach(t),t.destroy(!0,{children:!0,texture:!0,baseTexture:!0});const s=document.createElement("canvas");s.id="J-canvas",null==e||e.appendChild(s),i(null)}),[t,i]),b=o.exports.useCallback((t=>{w();const e={width:375,height:812};setTimeout((()=>{var s,n,h;const a=document.getElementById("J-canvas");a&&"screen"===(null==(s=a.parentElement)?void 0:s.className)&&(e.width=null==(n=a.parentElement)?void 0:n.clientWidth,e.height=null==(h=a.parentElement)?void 0:h.clientHeight);const o=new Tiny.Application({showFPS:!0,dpi:2,canvasId:"J-canvas",width:e.width,height:e.height,fixSize:!0,renderType:Tiny.RENDERER_TYPE.WEBGL,renderOptions:{antialias:!0,backgroundColor:2765125}});Tiny.three.attach(o);const l=new O({model:t||r});o.run(l),i(o);const c=new Tiny.three.CameraOrbitControl(o.view),u=Tiny.three.Camera.main.position;c.distance=Math.sqrt(u.x*u.x+u.y*u.y+u.z*u.z)}),100)}),[w,i,r]);o.exports.useEffect((()=>{p()}),[]);const E=o.exports.useCallback((t=>{const e=document.createElement("input");document.body.appendChild(e),e.setAttribute("value",t),e.select(),document.execCommand("copy")&&(document.execCommand("copy"),l.success("复制成功")),document.body.removeChild(e)}),[]),C=[{title:"模型名称",dataIndex:"name",key:"name",render:(t,e)=>c.createElement("a",{href:e.url},t)},{title:"预览时间",dataIndex:"previewTime",key:"previewTime"},{title:"操作",key:"action",render:(t,e)=>c.createElement(c.Fragment,null,c.createElement(u,{onClick:()=>k(e.url)},"预览"),c.createElement(u,{onClick:()=>E(e.url)},"复制模型链接"),c.createElement(u,{onClick:()=>M(e)},"删除记录"),c.createElement(u,{onClick:()=>f(e)},"重命名"))}],k=t=>{n(t),b(t)};return c.createElement("div",{className:"app"},c.createElement("div",{className:"left-side"},c.createElement("h2",null,"预览记录"),c.createElement(u,{onClick:()=>g()},"批量导出JSON"),c.createElement(m,{columns:C,dataSource:h})),c.createElement("main",null,c.createElement("div",{className:"preview-input"},c.createElement(y.Search,{placeholder:"请输入 gltf 链接",allowClear:!0,enterButton:"预览",size:"large",onSearch:t=>{t?(n(t),b(t),z(t)):l.error("请先输入 gltf 链接")}})),c.createElement(_,{onChange:()=>{b()}},(t=>c.createElement(d.DeviceFrameset,a({},t),c.createElement("canvas",{id:"J-canvas"}))))))}function q(){return c.createElement(x,null,c.createElement(p,null,c.createElement(z,{path:"/"},c.createElement(A,null))))}M.render(c.createElement(c.StrictMode,null,c.createElement(q,null)),document.getElementById("root"));
