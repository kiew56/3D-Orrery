function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,n={},o={},r=t.parcelRequirefea6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequirefea6=r);var i=r.register;i("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>n,set:e=>n=e,enumerable:!0,configurable:!0});var n,o=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)o.set(t[n],{baseUrl:e,path:t[n+1]})}}),i("8tLg9",function(e,t){e.exports=new URL("2k_stars_milky_way.724715d3.jpg",import.meta.url).toString()}),i("6dVhZ",function(e,t){e.exports=new URL("2k_venus_atmosphere.6b67833a.jpg",import.meta.url).toString()}),i("bneSh",function(e,t){e.exports=new URL("RS3_EarthC.aaeaa98f.jpg",import.meta.url).toString()}),i("boFjS",function(e,t){e.exports=new URL("2k_jupiter.6180ba4a.jpg",import.meta.url).toString()}),i("3fSvu",function(e,t){e.exports=new URL("2k_uranus.d1e141cb.jpg",import.meta.url).toString()}),i("cri0F",function(e,t){e.exports=new URL("2k_neptune.5fc74549.jpg",import.meta.url).toString()}),i("3j72e",function(e,t){e.exports=new URL("th.097e04fb.jpeg",import.meta.url).toString()}),i("7Hsmk",function(e,t){e.exports=new URL("2k_moon.7ce750a3.jpg",import.meta.url).toString()}),i("lkuI6",function(e,t){e.exports=new URL("2k_sun.defafe91.jpg",import.meta.url).toString()}),i("afWdh",function(e,t){e.exports=new URL("2k_mercury.42e2b735.jpg",import.meta.url).toString()}),i("21K3A",function(e,t){e.exports=new URL("2k_mars.6e9645ec.jpg",import.meta.url).toString()}),i("4qH3O",function(e,t){e.exports=new URL("2k_saturn.024c2f02.jpg",import.meta.url).toString()}),i("8vFPr",function(e,t){e.exports=new URL("2k_saturn_ring_alpha.d9c19af5.png",import.meta.url).toString()}),r("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["eF8Sb","hazardous-neo.72e2990d.js","kkm0a","2k_stars_milky_way.724715d3.jpg","kYCeB","2k_venus_atmosphere.6b67833a.jpg","ko2HD","RS3_EarthC.aaeaa98f.jpg","bcu87","2k_jupiter.6180ba4a.jpg","hxmPk","2k_uranus.d1e141cb.jpg","9alQm","2k_neptune.5fc74549.jpg","8Qzke","th.097e04fb.jpeg","hDmsS","2k_moon.7ce750a3.jpg","dB8VS","2k_sun.defafe91.jpg","g3ADe","2k_mercury.42e2b735.jpg","lA6ca","2k_mars.6e9645ec.jpg","3NBD5","2k_saturn.024c2f02.jpg","gkBSn","2k_saturn_ring_alpha.d9c19af5.png","gitrq","Solar System.8b519564.js"]'));var a=r("ilwiq"),s=r("5Rd1x");r("8tLg9"),r("lkuI6"),r("afWdh"),r("6dVhZ"),r("21K3A");var p=r("bneSh");r("boFjS"),r("4qH3O"),r("8vFPr");var c=r("3fSvu");r("cri0F"),r("3j72e");var d=r("7Hsmk");const _=new a.WebGLRenderer;_.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(_.domElement);const u=new a.Scene,m=new a.PerspectiveCamera(65,window.innerWidth/window.innerHeight,.1,1e3);new s.OrbitControls(m,_.domElement).update();const w=new a.AmbientLight(3355443);u.add(w);const l=new a.CubeTextureLoader;u.background=l.load([/*@__PURE__*/e(c)]);const H=new a.TextureLoader;m.position.z=300;const S=new a.SphereGeometry(20,30,30),g=new a.MeshBasicMaterial({map:H.load(/*@__PURE__*/e(p))}),f=new a.Mesh(S,g);u.add(f);const b=new a.SphereGeometry(4.6,16,16),h=new a.MeshBasicMaterial({map:H.load(/*@__PURE__*/e(d))}),R=new a.Mesh(b,h),k=new a.Object3D;k.add(R),u.add(k),R.position.x=38,R.position.y=20;const E=new a.SphereGeometry(1,5,7),F=new a.MeshBasicMaterial({map:H.load(/*@__PURE__*/e(d))}),j=new a.Mesh(E,F);u.add(j),j.position.x=180;const x=new a.CylinderGeometry(1,.001,25,8),A=new a.MeshBasicMaterial({color:1048575,transparent:!0,opacity:.5}),y=new a.Mesh(x,A);u.add(y),y.position.z=-11,y.position.y=-4.7,y.position.x=180,y.rotateX(20);const M=new a.SphereGeometry(1,1,7),L=new a.MeshBasicMaterial({map:H.load(/*@__PURE__*/e(d))}),v=new a.Mesh(M,L);u.add(v),v.position.x=-180;const U=new a.CylinderGeometry(1,.001,25,8),z=new a.MeshBasicMaterial({color:1048575,transparent:!0,opacity:.5}),B=new a.Mesh(U,z);u.add(B),B.position.z=10,B.position.y=4.5,B.position.x=-187,B.rotateX(20),B.rotateZ(10);const C=new a.SphereGeometry(1,13,7),G=new a.MeshBasicMaterial({map:H.load(/*@__PURE__*/e(d))}),O=new a.Mesh(C,G);u.add(O),O.position.z=-180;const D=new a.CylinderGeometry(1,.001,25,8),W=new a.MeshBasicMaterial({color:1048575,transparent:!0,opacity:.5}),q=new a.Mesh(D,W);u.add(q),q.position.y=-5.5,q.position.z=-191,q.rotateX(20),_.setAnimationLoop(function(){f.rotateY(.004),R.rotateY(.004),k.rotateY(.03),_.render(u,m)}),window.addEventListener("resize",function(){m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),_.setSize(window.innerWidth,window.innerHeight)}),document.getElementById("dateInput").addEventListener("click",function(){j.position.y=-1,j.position.x=170,y.position.z=-11,y.position.y=-6,y.position.x=170,v.position.z=10,B.position.z=20,B.position.y=4.5,B.position.x=-187,O.position.x=80,q.position.x=80});
//# sourceMappingURL=hazardous-neo.72e2990d.js.map
