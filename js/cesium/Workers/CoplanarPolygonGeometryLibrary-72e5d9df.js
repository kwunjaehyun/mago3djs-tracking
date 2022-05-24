define(["exports","./Matrix2-b06ef836","./RuntimeError-ffe03243","./OrientedBoundingBox-e0ef2593"],(function(e,n,t,r){"use strict";var i={},a=new n.Cartesian3,o=new n.Cartesian3,u=new n.Cartesian3,s=new n.Cartesian3,C=new r.OrientedBoundingBox;function d(e,t,r,i,o){var u=n.Cartesian3.subtract(e,t,a),s=n.Cartesian3.dot(r,u),C=n.Cartesian3.dot(i,u);return n.Cartesian2.fromElements(s,C,o)}i.validOutline=function(e){t.Check.defined("positions",e);var i=r.OrientedBoundingBox.fromPoints(e,C).halfAxes,a=n.Matrix3.getColumn(i,0,o),d=n.Matrix3.getColumn(i,1,u),c=n.Matrix3.getColumn(i,2,s),f=n.Cartesian3.magnitude(a),l=n.Cartesian3.magnitude(d),m=n.Cartesian3.magnitude(c);return!(0===f&&(0===l||0===m)||0===l&&0===m)},i.computeProjectTo2DArguments=function(e,i,a,d){t.Check.defined("positions",e),t.Check.defined("centerResult",i),t.Check.defined("planeAxis1Result",a),t.Check.defined("planeAxis2Result",d);var c,f,l=r.OrientedBoundingBox.fromPoints(e,C),m=l.halfAxes,g=n.Matrix3.getColumn(m,0,o),x=n.Matrix3.getColumn(m,1,u),h=n.Matrix3.getColumn(m,2,s),B=n.Cartesian3.magnitude(g),M=n.Cartesian3.magnitude(x),P=n.Cartesian3.magnitude(h),p=Math.min(B,M,P);return(0!==B||0!==M&&0!==P)&&(0!==M||0!==P)&&(p!==M&&p!==P||(c=g),p===B?c=x:p===P&&(f=x),p!==B&&p!==M||(f=h),n.Cartesian3.normalize(c,a),n.Cartesian3.normalize(f,d),n.Cartesian3.clone(l.center,i),!0)},i.createProjectPointsTo2DFunction=function(e,n,t){return function(r){for(var i=new Array(r.length),a=0;a<r.length;a++)i[a]=d(r[a],e,n,t);return i}},i.createProjectPointTo2DFunction=function(e,n,t){return function(r,i){return d(r,e,n,t,i)}},e.CoplanarPolygonGeometryLibrary=i}));
//# sourceMappingURL=CoplanarPolygonGeometryLibrary-72e5d9df.js.map