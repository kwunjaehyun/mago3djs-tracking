define(["exports","./Transforms-79117a7b","./Cartesian2-8646c5a1","./Check-24483042","./ComponentDatatype-1a100acd","./when-54335d57","./GeometryAttribute-374f805d","./GeometryAttributes-caa08d6c","./Math-d6182036","./Plane-13ae4b1b","./VertexFormat-81ec7207"],function(t,F,V,e,E,O,P,z,i,f,l){"use strict";function h(t){this.planes=O.defaultValue(t,[])}var p=[new V.Cartesian3,new V.Cartesian3,new V.Cartesian3];V.Cartesian3.clone(V.Cartesian3.UNIT_X,p[0]),V.Cartesian3.clone(V.Cartesian3.UNIT_Y,p[1]),V.Cartesian3.clone(V.Cartesian3.UNIT_Z,p[2]);var d=new V.Cartesian3,c=new V.Cartesian3,u=new f.Plane(new V.Cartesian3(1,0,0),0);function r(t){t=O.defaultValue(t,O.defaultValue.EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=O.defaultValue(t.near,1),this._near=this.near,this.far=O.defaultValue(t.far,5e8),this._far=this.far,this._cullingVolume=new h,this._orthographicMatrix=new F.Matrix4}function s(t){t.top===t._top&&t.bottom===t._bottom&&t.left===t._left&&t.right===t._right&&t.near===t._near&&t.far===t._far||(t._left=t.left,t._right=t.right,t._top=t.top,t._bottom=t.bottom,t._near=t.near,t._far=t.far,t._orthographicMatrix=F.Matrix4.computeOrthographicOffCenter(t.left,t.right,t.bottom,t.top,t.near,t.far,t._orthographicMatrix))}h.fromBoundingSphere=function(t,e){O.defined(e)||(e=new h);var a=p.length,i=e.planes;i.length=2*a;for(var r=t.center,n=t.radius,o=0,s=0;s<a;++s){var f=p[s],u=i[o],l=i[o+1];O.defined(u)||(u=i[o]=new F.Cartesian4),O.defined(l)||(l=i[o+1]=new F.Cartesian4),V.Cartesian3.multiplyByScalar(f,-n,d),V.Cartesian3.add(r,d,d),u.x=f.x,u.y=f.y,u.z=f.z,u.w=-V.Cartesian3.dot(f,d),V.Cartesian3.multiplyByScalar(f,n,d),V.Cartesian3.add(r,d,d),l.x=-f.x,l.y=-f.y,l.z=-f.z,l.w=-V.Cartesian3.dot(V.Cartesian3.negate(f,c),d),o+=2}return e},h.prototype.computeVisibility=function(t){for(var e=this.planes,a=!1,i=0,r=e.length;i<r;++i){var n=t.intersectPlane(f.Plane.fromCartesian4(e[i],u));if(n===F.Intersect.OUTSIDE)return F.Intersect.OUTSIDE;n===F.Intersect.INTERSECTING&&(a=!0)}return a?F.Intersect.INTERSECTING:F.Intersect.INSIDE},h.prototype.computeVisibilityWithPlaneMask=function(t,e){if(e===h.MASK_OUTSIDE||e===h.MASK_INSIDE)return e;for(var a=h.MASK_INSIDE,i=this.planes,r=0,n=i.length;r<n;++r){var o=r<31?1<<r:0;if(!(r<31&&0==(e&o))){var s=t.intersectPlane(f.Plane.fromCartesian4(i[r],u));if(s===F.Intersect.OUTSIDE)return h.MASK_OUTSIDE;s===F.Intersect.INTERSECTING&&(a|=o)}}return a},h.MASK_OUTSIDE=4294967295,h.MASK_INSIDE=0,h.MASK_INDETERMINATE=2147483647,Object.defineProperties(r.prototype,{projectionMatrix:{get:function(){return s(this),this._orthographicMatrix}}});var m=new V.Cartesian3,C=new V.Cartesian3,_=new V.Cartesian3,y=new V.Cartesian3;function v(t){t=O.defaultValue(t,O.defaultValue.EMPTY_OBJECT),this._offCenterFrustum=new r,this.width=t.width,this._width=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=O.defaultValue(t.near,1),this._near=this.near,this.far=O.defaultValue(t.far,5e8),this._far=this.far}function n(t){var e,a=t._offCenterFrustum;t.width===t._width&&t.aspectRatio===t._aspectRatio&&t.near===t._near&&t.far===t._far||(t._aspectRatio=t.aspectRatio,t._width=t.width,t._near=t.near,t._far=t.far,e=1/t.aspectRatio,a.right=.5*t.width,a.left=-a.right,a.top=e*a.right,a.bottom=-a.top,a.near=t.near,a.far=t.far)}function o(t){t=O.defaultValue(t,O.defaultValue.EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=O.defaultValue(t.near,1),this._near=this.near,this.far=O.defaultValue(t.far,5e8),this._far=this.far,this._cullingVolume=new h,this._perspectiveMatrix=new F.Matrix4,this._infinitePerspective=new F.Matrix4}function g(t){var e=t.top,a=t.bottom,i=t.right,r=t.left,n=t.near,o=t.far;e===t._top&&a===t._bottom&&r===t._left&&i===t._right&&n===t._near&&o===t._far||(t._left=r,t._right=i,t._top=e,t._bottom=a,t._near=n,t._far=o,t._perspectiveMatrix=F.Matrix4.computePerspectiveOffCenter(r,i,a,e,n,o,t._perspectiveMatrix),t._infinitePerspective=F.Matrix4.computeInfinitePerspectiveOffCenter(r,i,a,e,n,t._infinitePerspective))}r.prototype.computeCullingVolume=function(t,e,a){var i=this._cullingVolume.planes,r=this.top,n=this.bottom,o=this.right,s=this.left,f=this.near,u=this.far,l=V.Cartesian3.cross(e,a,m);V.Cartesian3.normalize(l,l);var h=C;V.Cartesian3.multiplyByScalar(e,f,h),V.Cartesian3.add(t,h,h);var p=_;V.Cartesian3.multiplyByScalar(l,s,p),V.Cartesian3.add(h,p,p);var d=i[0];return O.defined(d)||(d=i[0]=new F.Cartesian4),d.x=l.x,d.y=l.y,d.z=l.z,d.w=-V.Cartesian3.dot(l,p),V.Cartesian3.multiplyByScalar(l,o,p),V.Cartesian3.add(h,p,p),d=i[1],O.defined(d)||(d=i[1]=new F.Cartesian4),d.x=-l.x,d.y=-l.y,d.z=-l.z,d.w=-V.Cartesian3.dot(V.Cartesian3.negate(l,y),p),V.Cartesian3.multiplyByScalar(a,n,p),V.Cartesian3.add(h,p,p),d=i[2],O.defined(d)||(d=i[2]=new F.Cartesian4),d.x=a.x,d.y=a.y,d.z=a.z,d.w=-V.Cartesian3.dot(a,p),V.Cartesian3.multiplyByScalar(a,r,p),V.Cartesian3.add(h,p,p),d=i[3],O.defined(d)||(d=i[3]=new F.Cartesian4),d.x=-a.x,d.y=-a.y,d.z=-a.z,d.w=-V.Cartesian3.dot(V.Cartesian3.negate(a,y),p),d=i[4],O.defined(d)||(d=i[4]=new F.Cartesian4),d.x=e.x,d.y=e.y,d.z=e.z,d.w=-V.Cartesian3.dot(e,h),V.Cartesian3.multiplyByScalar(e,u,p),V.Cartesian3.add(t,p,p),d=i[5],O.defined(d)||(d=i[5]=new F.Cartesian4),d.x=-e.x,d.y=-e.y,d.z=-e.z,d.w=-V.Cartesian3.dot(V.Cartesian3.negate(e,y),p),this._cullingVolume},r.prototype.getPixelDimensions=function(t,e,a,i,r){s(this);var n=i*(this.right-this.left)/t,o=i*(this.top-this.bottom)/e;return r.x=n,r.y=o,r},r.prototype.clone=function(t){return O.defined(t)||(t=new r),t.left=this.left,t.right=this.right,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t},r.prototype.equals=function(t){return O.defined(t)&&t instanceof r&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far},r.prototype.equalsEpsilon=function(t,e,a){return t===this||O.defined(t)&&t instanceof r&&i.CesiumMath.equalsEpsilon(this.right,t.right,e,a)&&i.CesiumMath.equalsEpsilon(this.left,t.left,e,a)&&i.CesiumMath.equalsEpsilon(this.top,t.top,e,a)&&i.CesiumMath.equalsEpsilon(this.bottom,t.bottom,e,a)&&i.CesiumMath.equalsEpsilon(this.near,t.near,e,a)&&i.CesiumMath.equalsEpsilon(this.far,t.far,e,a)},v.packedLength=4,v.pack=function(t,e,a){return a=O.defaultValue(a,0),e[a++]=t.width,e[a++]=t.aspectRatio,e[a++]=t.near,e[a]=t.far,e},v.unpack=function(t,e,a){return e=O.defaultValue(e,0),O.defined(a)||(a=new v),a.width=t[e++],a.aspectRatio=t[e++],a.near=t[e++],a.far=t[e],a},Object.defineProperties(v.prototype,{projectionMatrix:{get:function(){return n(this),this._offCenterFrustum.projectionMatrix}}}),v.prototype.computeCullingVolume=function(t,e,a){return n(this),this._offCenterFrustum.computeCullingVolume(t,e,a)},v.prototype.getPixelDimensions=function(t,e,a,i,r){return n(this),this._offCenterFrustum.getPixelDimensions(t,e,a,i,r)},v.prototype.clone=function(t){return O.defined(t)||(t=new v),t.aspectRatio=this.aspectRatio,t.width=this.width,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._width=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t},v.prototype.equals=function(t){return!!(O.defined(t)&&t instanceof v)&&(n(this),n(t),this.width===t.width&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))},v.prototype.equalsEpsilon=function(t,e,a){return!!(O.defined(t)&&t instanceof v)&&(n(this),n(t),i.CesiumMath.equalsEpsilon(this.width,t.width,e,a)&&i.CesiumMath.equalsEpsilon(this.aspectRatio,t.aspectRatio,e,a)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,e,a))},Object.defineProperties(o.prototype,{projectionMatrix:{get:function(){return g(this),this._perspectiveMatrix}},infiniteProjectionMatrix:{get:function(){return g(this),this._infinitePerspective}}});var w=new V.Cartesian3,x=new V.Cartesian3,M=new V.Cartesian3,b=new V.Cartesian3;function R(t){t=O.defaultValue(t,O.defaultValue.EMPTY_OBJECT),this._offCenterFrustum=new o,this.fov=t.fov,this._fov=void 0,this._fovy=void 0,this._sseDenominator=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=O.defaultValue(t.near,1),this._near=this.near,this.far=O.defaultValue(t.far,5e8),this._far=this.far,this.xOffset=O.defaultValue(t.xOffset,0),this._xOffset=this.xOffset,this.yOffset=O.defaultValue(t.yOffset,0),this._yOffset=this.yOffset}function S(t){var e=t._offCenterFrustum;t.fov===t._fov&&t.aspectRatio===t._aspectRatio&&t.near===t._near&&t.far===t._far&&t.xOffset===t._xOffset&&t.yOffset===t._yOffset||(t._aspectRatio=t.aspectRatio,t._fov=t.fov,t._fovy=t.aspectRatio<=1?t.fov:2*Math.atan(Math.tan(.5*t.fov)/t.aspectRatio),t._near=t.near,t._far=t.far,t._sseDenominator=2*Math.tan(.5*t._fovy),t._xOffset=t.xOffset,t._yOffset=t.yOffset,e.top=t.near*Math.tan(.5*t._fovy),e.bottom=-e.top,e.right=t.aspectRatio*e.top,e.left=-e.right,e.near=t.near,e.far=t.far,e.right+=t.xOffset,e.left+=t.xOffset,e.top+=t.yOffset,e.bottom+=t.yOffset)}o.prototype.computeCullingVolume=function(t,e,a){var i=this._cullingVolume.planes,r=this.top,n=this.bottom,o=this.right,s=this.left,f=this.near,u=this.far,l=V.Cartesian3.cross(e,a,w),h=x;V.Cartesian3.multiplyByScalar(e,f,h),V.Cartesian3.add(t,h,h);var p=M;V.Cartesian3.multiplyByScalar(e,u,p),V.Cartesian3.add(t,p,p);var d=b;V.Cartesian3.multiplyByScalar(l,s,d),V.Cartesian3.add(h,d,d),V.Cartesian3.subtract(d,t,d),V.Cartesian3.normalize(d,d),V.Cartesian3.cross(d,a,d),V.Cartesian3.normalize(d,d);var c=i[0];return O.defined(c)||(c=i[0]=new F.Cartesian4),c.x=d.x,c.y=d.y,c.z=d.z,c.w=-V.Cartesian3.dot(d,t),V.Cartesian3.multiplyByScalar(l,o,d),V.Cartesian3.add(h,d,d),V.Cartesian3.subtract(d,t,d),V.Cartesian3.cross(a,d,d),V.Cartesian3.normalize(d,d),c=i[1],O.defined(c)||(c=i[1]=new F.Cartesian4),c.x=d.x,c.y=d.y,c.z=d.z,c.w=-V.Cartesian3.dot(d,t),V.Cartesian3.multiplyByScalar(a,n,d),V.Cartesian3.add(h,d,d),V.Cartesian3.subtract(d,t,d),V.Cartesian3.cross(l,d,d),V.Cartesian3.normalize(d,d),c=i[2],O.defined(c)||(c=i[2]=new F.Cartesian4),c.x=d.x,c.y=d.y,c.z=d.z,c.w=-V.Cartesian3.dot(d,t),V.Cartesian3.multiplyByScalar(a,r,d),V.Cartesian3.add(h,d,d),V.Cartesian3.subtract(d,t,d),V.Cartesian3.cross(d,l,d),V.Cartesian3.normalize(d,d),c=i[3],O.defined(c)||(c=i[3]=new F.Cartesian4),c.x=d.x,c.y=d.y,c.z=d.z,c.w=-V.Cartesian3.dot(d,t),c=i[4],O.defined(c)||(c=i[4]=new F.Cartesian4),c.x=e.x,c.y=e.y,c.z=e.z,c.w=-V.Cartesian3.dot(e,h),V.Cartesian3.negate(e,d),c=i[5],O.defined(c)||(c=i[5]=new F.Cartesian4),c.x=d.x,c.y=d.y,c.z=d.z,c.w=-V.Cartesian3.dot(d,p),this._cullingVolume},o.prototype.getPixelDimensions=function(t,e,a,i,r){g(this);var n=1/this.near,o=2*i*a*(this.top*n)/e,s=2*i*a*(this.right*n)/t;return r.x=s,r.y=o,r},o.prototype.clone=function(t){return O.defined(t)||(t=new o),t.right=this.right,t.left=this.left,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t},o.prototype.equals=function(t){return O.defined(t)&&t instanceof o&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far},o.prototype.equalsEpsilon=function(t,e,a){return t===this||O.defined(t)&&t instanceof o&&i.CesiumMath.equalsEpsilon(this.right,t.right,e,a)&&i.CesiumMath.equalsEpsilon(this.left,t.left,e,a)&&i.CesiumMath.equalsEpsilon(this.top,t.top,e,a)&&i.CesiumMath.equalsEpsilon(this.bottom,t.bottom,e,a)&&i.CesiumMath.equalsEpsilon(this.near,t.near,e,a)&&i.CesiumMath.equalsEpsilon(this.far,t.far,e,a)},R.packedLength=6,R.pack=function(t,e,a){return a=O.defaultValue(a,0),e[a++]=t.fov,e[a++]=t.aspectRatio,e[a++]=t.near,e[a++]=t.far,e[a++]=t.xOffset,e[a]=t.yOffset,e},R.unpack=function(t,e,a){return e=O.defaultValue(e,0),O.defined(a)||(a=new R),a.fov=t[e++],a.aspectRatio=t[e++],a.near=t[e++],a.far=t[e++],a.xOffset=t[e++],a.yOffset=t[e],a},Object.defineProperties(R.prototype,{projectionMatrix:{get:function(){return S(this),this._offCenterFrustum.projectionMatrix}},infiniteProjectionMatrix:{get:function(){return S(this),this._offCenterFrustum.infiniteProjectionMatrix}},fovy:{get:function(){return S(this),this._fovy}},sseDenominator:{get:function(){return S(this),this._sseDenominator}}}),R.prototype.computeCullingVolume=function(t,e,a){return S(this),this._offCenterFrustum.computeCullingVolume(t,e,a)},R.prototype.getPixelDimensions=function(t,e,a,i,r){return S(this),this._offCenterFrustum.getPixelDimensions(t,e,a,i,r)},R.prototype.clone=function(t){return O.defined(t)||(t=new R),t.aspectRatio=this.aspectRatio,t.fov=this.fov,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._fov=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t},R.prototype.equals=function(t){return!!(O.defined(t)&&t instanceof R)&&(S(this),S(t),this.fov===t.fov&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))},R.prototype.equalsEpsilon=function(t,e,a){return!!(O.defined(t)&&t instanceof R)&&(S(this),S(t),i.CesiumMath.equalsEpsilon(this.fov,t.fov,e,a)&&i.CesiumMath.equalsEpsilon(this.aspectRatio,t.aspectRatio,e,a)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,e,a))};function T(t){var e,a,i=t.frustum,r=t.orientation,n=t.origin,o=O.defaultValue(t.vertexFormat,l.VertexFormat.DEFAULT),s=O.defaultValue(t._drawNearPlane,!0);i instanceof R?(e=0,a=R.packedLength):i instanceof v&&(e=1,a=v.packedLength),this._frustumType=e,this._frustum=i.clone(),this._origin=V.Cartesian3.clone(n),this._orientation=F.Quaternion.clone(r),this._drawNearPlane=s,this._vertexFormat=o,this._workerName="createFrustumGeometry",this.packedLength=2+a+V.Cartesian3.packedLength+F.Quaternion.packedLength+l.VertexFormat.packedLength}T.pack=function(t,e,a){a=O.defaultValue(a,0);var i=t._frustumType,r=t._frustum;return 0===(e[a++]=i)?(R.pack(r,e,a),a+=R.packedLength):(v.pack(r,e,a),a+=v.packedLength),V.Cartesian3.pack(t._origin,e,a),a+=V.Cartesian3.packedLength,F.Quaternion.pack(t._orientation,e,a),a+=F.Quaternion.packedLength,l.VertexFormat.pack(t._vertexFormat,e,a),e[a+=l.VertexFormat.packedLength]=t._drawNearPlane?1:0,e};var k=new R,A=new v,D=new F.Quaternion,I=new V.Cartesian3,q=new l.VertexFormat;function B(t,e,a,i,r,n,o,s){for(var f=t/3*2,u=0;u<4;++u)O.defined(e)&&(e[t]=n.x,e[t+1]=n.y,e[t+2]=n.z),O.defined(a)&&(a[t]=o.x,a[t+1]=o.y,a[t+2]=o.z),O.defined(i)&&(i[t]=s.x,i[t+1]=s.y,i[t+2]=s.z),t+=3;r[f]=0,r[1+f]=0,r[2+f]=1,r[3+f]=0,r[4+f]=1,r[5+f]=1,r[6+f]=0,r[7+f]=1}T.unpack=function(t,e,a){e=O.defaultValue(e,0);var i,r=t[e++];0===r?(i=R.unpack(t,e,k),e+=R.packedLength):(i=v.unpack(t,e,A),e+=v.packedLength);var n=V.Cartesian3.unpack(t,e,I);e+=V.Cartesian3.packedLength;var o=F.Quaternion.unpack(t,e,D);e+=F.Quaternion.packedLength;var s=l.VertexFormat.unpack(t,e,q),f=1===t[e+=l.VertexFormat.packedLength];if(!O.defined(a))return new T({frustum:i,origin:n,orientation:o,vertexFormat:s,_drawNearPlane:f});var u=r===a._frustumType?a._frustum:void 0;return a._frustum=i.clone(u),a._frustumType=r,a._origin=V.Cartesian3.clone(n,a._origin),a._orientation=F.Quaternion.clone(o,a._orientation),a._vertexFormat=l.VertexFormat.clone(s,a._vertexFormat),a._drawNearPlane=f,a};var L=new F.Matrix3,N=new F.Matrix4,G=new F.Matrix4,j=new V.Cartesian3,U=new V.Cartesian3,Q=new V.Cartesian3,K=new V.Cartesian3,Y=new V.Cartesian3,J=new V.Cartesian3,W=new Array(3),X=new Array(4);X[0]=new F.Cartesian4(-1,-1,1,1),X[1]=new F.Cartesian4(1,-1,1,1),X[2]=new F.Cartesian4(1,1,1,1),X[3]=new F.Cartesian4(-1,1,1,1);for(var Z=new Array(4),a=0;a<4;++a)Z[a]=new F.Cartesian4;T._computeNearFarPlanes=function(t,e,a,i,r,n,o,s){var f=F.Matrix3.fromQuaternion(e,L),u=O.defaultValue(n,j),l=O.defaultValue(o,U),h=O.defaultValue(s,Q),u=F.Matrix3.getColumn(f,0,u),l=F.Matrix3.getColumn(f,1,l),h=F.Matrix3.getColumn(f,2,h);V.Cartesian3.normalize(u,u),V.Cartesian3.normalize(l,l),V.Cartesian3.normalize(h,h),V.Cartesian3.negate(u,u);var p,d,c,m,C=F.Matrix4.computeView(t,h,l,u,N);0===a?(d=i.projectionMatrix,c=F.Matrix4.multiply(d,C,G),m=F.Matrix4.inverse(c,G)):p=F.Matrix4.inverseTransformation(C,G),O.defined(m)?(W[0]=i.near,W[1]=i.far):(W[0]=0,W[1]=i.near,W[2]=i.far);for(var _=0;_<2;++_)for(var y=0;y<4;++y){var v,g,w,x,M=F.Cartesian4.clone(X[y],Z[y]);O.defined(m)?(v=1/(M=F.Matrix4.multiplyByVector(m,M,M)).w,V.Cartesian3.multiplyByScalar(M,v,M),V.Cartesian3.subtract(M,t,M),V.Cartesian3.normalize(M,M),g=V.Cartesian3.dot(h,M),V.Cartesian3.multiplyByScalar(M,W[_]/g,M),V.Cartesian3.add(M,t,M)):(O.defined(i._offCenterFrustum)&&(i=i._offCenterFrustum),w=W[_],x=W[_+1],M.x=.5*(M.x*(i.right-i.left)+i.left+i.right),M.y=.5*(M.y*(i.top-i.bottom)+i.bottom+i.top),M.z=.5*(M.z*(w-x)-w-x),M.w=1,F.Matrix4.multiplyByVector(p,M,M)),r[12*_+3*y]=M.x,r[12*_+3*y+1]=M.y,r[12*_+3*y+2]=M.z}},T.createGeometry=function(t){var e=t._frustumType,a=t._frustum,i=t._origin,r=t._orientation,n=t._drawNearPlane,o=t._vertexFormat,s=n?6:5,f=new Float64Array(72);T._computeNearFarPlanes(i,r,e,a,f);var u=24;f[u]=f[12],f[u+1]=f[13],f[u+2]=f[14],f[u+3]=f[0],f[u+4]=f[1],f[u+5]=f[2],f[u+6]=f[9],f[u+7]=f[10],f[u+8]=f[11],f[u+9]=f[21],f[u+10]=f[22],f[u+11]=f[23],f[u+=12]=f[15],f[u+1]=f[16],f[u+2]=f[17],f[u+3]=f[3],f[u+4]=f[4],f[u+5]=f[5],f[u+6]=f[0],f[u+7]=f[1],f[u+8]=f[2],f[u+9]=f[12],f[u+10]=f[13],f[u+11]=f[14],f[u+=12]=f[3],f[u+1]=f[4],f[u+2]=f[5],f[u+3]=f[15],f[u+4]=f[16],f[u+5]=f[17],f[u+6]=f[18],f[u+7]=f[19],f[u+8]=f[20],f[u+9]=f[6],f[u+10]=f[7],f[u+11]=f[8],f[u+=12]=f[6],f[u+1]=f[7],f[u+2]=f[8],f[u+3]=f[18],f[u+4]=f[19],f[u+5]=f[20],f[u+6]=f[21],f[u+7]=f[22],f[u+8]=f[23],f[u+9]=f[9],f[u+10]=f[10],f[u+11]=f[11],n||(f=f.subarray(12));var l,h,p,d,c,m,C,_,y,v,g=new z.GeometryAttributes({position:new P.GeometryAttribute({componentDatatype:E.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:f})});(O.defined(o.normal)||O.defined(o.tangent)||O.defined(o.bitangent)||O.defined(o.st))&&(l=O.defined(o.normal)?new Float32Array(12*s):void 0,h=O.defined(o.tangent)?new Float32Array(12*s):void 0,p=O.defined(o.bitangent)?new Float32Array(12*s):void 0,d=O.defined(o.st)?new Float32Array(8*s):void 0,c=j,m=U,C=Q,_=V.Cartesian3.negate(c,K),y=V.Cartesian3.negate(m,Y),v=V.Cartesian3.negate(C,J),u=0,n&&(B(u,l,h,p,d,v,c,m),u+=12),B(u,l,h,p,d,C,_,m),B(u+=12,l,h,p,d,_,v,m),B(u+=12,l,h,p,d,y,v,_),B(u+=12,l,h,p,d,c,C,m),B(u+=12,l,h,p,d,m,C,_),O.defined(l)&&(g.normal=new P.GeometryAttribute({componentDatatype:E.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:l})),O.defined(h)&&(g.tangent=new P.GeometryAttribute({componentDatatype:E.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:h})),O.defined(p)&&(g.bitangent=new P.GeometryAttribute({componentDatatype:E.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:p})),O.defined(d)&&(g.st=new P.GeometryAttribute({componentDatatype:E.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:d})));for(var w=new Uint16Array(6*s),x=0;x<s;++x){var M=6*x,b=4*x;w[M]=b,w[1+M]=1+b,w[2+M]=2+b,w[3+M]=b,w[4+M]=2+b,w[5+M]=3+b}return new P.Geometry({attributes:g,indices:w,primitiveType:P.PrimitiveType.TRIANGLES,boundingSphere:F.BoundingSphere.fromVertices(f)})},t.FrustumGeometry=T,t.OrthographicFrustum=v,t.PerspectiveFrustum=R});
