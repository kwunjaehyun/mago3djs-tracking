define(["exports","./GeometryOffsetAttribute-718fa138","./Transforms-79117a7b","./Cartesian2-8646c5a1","./ComponentDatatype-1a100acd","./CylinderGeometryLibrary-85e5e690","./when-54335d57","./Check-24483042","./GeometryAttribute-374f805d","./GeometryAttributes-caa08d6c","./IndexDatatype-82ceea78","./Math-d6182036","./VertexFormat-81ec7207"],function(t,I,U,S,B,Y,Z,e,J,W,j,q,u){"use strict";var H=new S.Cartesian2,K=new S.Cartesian3,Q=new S.Cartesian3,X=new S.Cartesian3,$=new S.Cartesian3;function d(t){var e=(t=Z.defaultValue(t,Z.defaultValue.EMPTY_OBJECT)).length,a=t.topRadius,r=t.bottomRadius,n=Z.defaultValue(t.vertexFormat,u.VertexFormat.DEFAULT),o=Z.defaultValue(t.slices,128);this._length=e,this._topRadius=a,this._bottomRadius=r,this._vertexFormat=u.VertexFormat.clone(n),this._slices=o,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderGeometry"}d.packedLength=u.VertexFormat.packedLength+5,d.pack=function(t,e,a){return a=Z.defaultValue(a,0),u.VertexFormat.pack(t._vertexFormat,e,a),a+=u.VertexFormat.packedLength,e[a++]=t._length,e[a++]=t._topRadius,e[a++]=t._bottomRadius,e[a++]=t._slices,e[a]=Z.defaultValue(t._offsetAttribute,-1),e};var a,p=new u.VertexFormat,y={vertexFormat:p,length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,offsetAttribute:void 0};d.unpack=function(t,e,a){e=Z.defaultValue(e,0);var r=u.VertexFormat.unpack(t,e,p);e+=u.VertexFormat.packedLength;var n=t[e++],o=t[e++],i=t[e++],s=t[e++],m=t[e];return Z.defined(a)?(a._vertexFormat=u.VertexFormat.clone(r,a._vertexFormat),a._length=n,a._topRadius=o,a._bottomRadius=i,a._slices=s,a._offsetAttribute=-1===m?void 0:m,a):(y.length=n,y.topRadius=o,y.bottomRadius=i,y.slices=s,y.offsetAttribute=-1===m?void 0:m,new d(y))},d.createGeometry=function(t){var e=t._length,a=t._topRadius,r=t._bottomRadius,n=t._vertexFormat,o=t._slices;if(!(e<=0||a<0||r<0||0===a&&0===r)){var i=o+o,s=o+i,m=i+i,u=Y.CylinderGeometryLibrary.computePositions(e,a,r,o,!0),d=n.st?new Float32Array(2*m):void 0,p=n.normal?new Float32Array(3*m):void 0,y=n.tangent?new Float32Array(3*m):void 0,l=n.bitangent?new Float32Array(3*m):void 0,f=n.normal||n.tangent||n.bitangent;if(f){var c=n.tangent||n.bitangent,b=0,v=0,A=0,g=Math.atan2(r-a,e),h=K;h.z=Math.sin(g);for(var x=Math.cos(g),_=X,C=Q,F=0;F<o;F++){var w=F/o*q.CesiumMath.TWO_PI,G=x*Math.cos(w),D=x*Math.sin(w);f&&(h.x=G,h.y=D,c&&(_=S.Cartesian3.normalize(S.Cartesian3.cross(S.Cartesian3.UNIT_Z,h,_),_)),n.normal&&(p[b++]=h.x,p[b++]=h.y,p[b++]=h.z,p[b++]=h.x,p[b++]=h.y,p[b++]=h.z),n.tangent&&(y[v++]=_.x,y[v++]=_.y,y[v++]=_.z,y[v++]=_.x,y[v++]=_.y,y[v++]=_.z),n.bitangent&&(C=S.Cartesian3.normalize(S.Cartesian3.cross(h,_,C),C),l[A++]=C.x,l[A++]=C.y,l[A++]=C.z,l[A++]=C.x,l[A++]=C.y,l[A++]=C.z))}for(F=0;F<o;F++)n.normal&&(p[b++]=0,p[b++]=0,p[b++]=-1),n.tangent&&(y[v++]=1,y[v++]=0,y[v++]=0),n.bitangent&&(l[A++]=0,l[A++]=-1,l[A++]=0);for(F=0;F<o;F++)n.normal&&(p[b++]=0,p[b++]=0,p[b++]=1),n.tangent&&(y[v++]=1,y[v++]=0,y[v++]=0),n.bitangent&&(l[A++]=0,l[A++]=1,l[A++]=0)}var R=12*o-12,V=j.IndexDatatype.createTypedArray(m,R),T=0,O=0;for(F=0;F<o-1;F++)V[T++]=O,V[T++]=O+2,V[T++]=O+3,V[T++]=O,V[T++]=O+3,V[T++]=O+1,O+=2;for(V[T++]=i-2,V[T++]=0,V[T++]=1,V[T++]=i-2,V[T++]=1,V[T++]=i-1,F=1;F<o-1;F++)V[T++]=i+F+1,V[T++]=i+F,V[T++]=i;for(F=1;F<o-1;F++)V[T++]=s,V[T++]=s+F,V[T++]=s+F+1;var L=0;if(n.st){var P=Math.max(a,r);for(F=0;F<m;F++){var k=S.Cartesian3.fromArray(u,3*F,$);d[L++]=(k.x+P)/(2*P),d[L++]=(k.y+P)/(2*P)}}var M=new W.GeometryAttributes;n.position&&(M.position=new J.GeometryAttribute({componentDatatype:B.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u})),n.normal&&(M.normal=new J.GeometryAttribute({componentDatatype:B.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:p})),n.tangent&&(M.tangent=new J.GeometryAttribute({componentDatatype:B.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:y})),n.bitangent&&(M.bitangent=new J.GeometryAttribute({componentDatatype:B.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:l})),n.st&&(M.st=new J.GeometryAttribute({componentDatatype:B.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:d})),H.x=.5*e,H.y=Math.max(r,a);var z,E,N=new U.BoundingSphere(S.Cartesian3.ZERO,S.Cartesian2.magnitude(H));return Z.defined(t._offsetAttribute)&&(e=u.length,z=new Uint8Array(e/3),E=t._offsetAttribute===I.GeometryOffsetAttribute.NONE?0:1,I.arrayFill(z,E),M.applyOffset=new J.GeometryAttribute({componentDatatype:B.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:z})),new J.Geometry({attributes:M,indices:V,primitiveType:J.PrimitiveType.TRIANGLES,boundingSphere:N,offsetAttribute:t._offsetAttribute})}},d.getUnitCylinder=function(){return Z.defined(a)||(a=d.createGeometry(new d({topRadius:1,bottomRadius:1,length:1,vertexFormat:u.VertexFormat.POSITION_ONLY}))),a},t.CylinderGeometry=d});
