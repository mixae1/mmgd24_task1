var t=globalThis,e={},r={},n=t.parcelRequireb6bd;null==n&&((n=function(t){if(t in e)return e[t].exports;if(t in r){var n=r[t];delete r[t];var i={id:t,exports:{}};return e[t]=i,n.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},t.parcelRequireb6bd=n);var i=n.register;i("cRiUH",function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var i=u(n("7zFg5")),o=u(n("228AS"));function u(t){return t&&t.__esModule?t:{default:t}}function a(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(a=function(){return!!t})()}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}t.exports.default=function(t){var e;function n(t,e,i,o,u,l,f){(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,n),h=n,y=["RightFig",t,e,u,l],h=s(h),(c=function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,a()?Reflect.construct(h,y||[],s(this).constructor):h.apply(this,y))).angle=f,c.vx=i,c.vy=o,c.points=[];for(var c,h,y,d=0;d<c.N;d++)c.points.push({x:Math.cos(2*Math.PI/c.N*d+c.angle)*c.r,y:Math.sin(2*Math.PI/c.N*d+c.angle)*c.r});return c}return function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(n,t),e=[{key:"point",value:function(t){return new o.default(this.points[t].x+this.x,this.points[t].y+this.y)}},{key:"contains",value:function(t){for(var e=0;e<this.N;e++){var r=o.default.minus(this.point(e),this.center),n=o.default.minus(this.point((e+1)%this.N),this.center),i=o.default.add(r,n).norm(),u=new o.default(t.x,t.y).minus(r);if(u.x*i.x+u.y*i.y>0)return!1}return!0}},{key:"intersects",value:function(t){if(!this.possible_intersects2(t))return!1;if("RightFig"==t.type){for(var e=0;e<this.N;e++){for(var r=this.point(e),n=this.point((e+1)%this.N),i=o.default.add(o.default.minus(r,this.center),o.default.minus(n,this.center)).norm(),u=-1,a=!0,s=void 0,l=void 0,f=0;f<t.N;f++){var c=o.default.minus(t.point(f),r);if(s=c.x*i.x+c.y*i.y>0?1:0,0==f&&(0==(u=s)&&(a=!1),l=s),u!=s){0==(u=s)&&(a=!1);var h=t.point(f-1),y=t.point(f),d=o.default.add(o.default.minus(h,t.center),o.default.minus(y,t.center)).norm();if((r.x-h.x)*d.x+(r.y-h.y)*d.y>0!=(n.x-h.x)*d.x+(n.y-h.y)*d.y>0)return this.decrement_live(t)}}if(l!=s){var p=t.point(t.N-1),v=t.point(0),b=o.default.add(o.default.minus(p,t.center),o.default.minus(v,t.center)).norm();if((r.x-p.x)*b.x+(r.y-p.y)*b.y>0!=(n.x-p.x)*b.x+(n.y-p.y)*b.y>0)return this.decrement_live(t)}if(a)return!1}if(this.inner_intersects(t))return this.decrement_live(t)}return"Circle"==t.type&&t.intersects(this)}}],function(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,function(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=r(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==r(e)?e:String(e)}(i.key),i)}}(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}(i.default)}),i("7zFg5",function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var r,i,o,u,a=(r=n("228AS"))&&r.__esModule?r:{default:r};function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t){var e=function(t,e){if("object"!=s(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=s(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==s(e)?e:String(e)}i=t.exports.default=function(){var t;function e(t,r,n,i,o){(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,e),this.type=t,this.x=r,this.y=n,this.N=i,this.r=o,this.inner_r=Math.cos(Math.PI/this.N)*this.r,this.lives=3,this.color="green"}return t=[{key:"possible_intersects",value:function(t){return!(Math.sqrt(Math.pow(t.x-this.x,2)+Math.pow(t.y-this.y,2))>this.r+t.r)}},{key:"inner_intersects",value:function(t){return!(Math.sqrt(Math.pow(t.x-this.x,2)+Math.pow(t.y-this.y,2))>this.inner_r+t.inner_r)}},{key:"decrement_live",value:function(t){return t.lives-=1,this.lives-=1,t.color=e.colors[Math.max(t.lives,0)],this.color=e.colors[Math.max(this.lives,0)],!0}},{key:"possible_intersects2",value:function(t){return!(Math.abs(t.x-this.x)>this.r+t.r||Math.abs(t.y-this.y)>this.r+t.r)}},{key:"center",get:function(){return new a.default(this.x,this.y)}},{key:"left",get:function(){return this.x-this.r}},{key:"right",get:function(){return this.x+this.r}},{key:"top",get:function(){return this.y-this.r}},{key:"bottom",get:function(){return this.y+this.r}},{key:"topLeft",get:function(){return new a.default(this.left,this.top)}},{key:"size",get:function(){return new a.default(this.right-this.left,this.bottom-this.top)}},{key:"w",get:function(){return 2*this.r}},{key:"h",get:function(){return 2*this.r}},{key:"r_contains",value:function(t){return t.x>=this.x&&t.x<this.x+this.w&&t.y>=this.y&&t.y<this.y+this.h}},{key:"r_intersects_",value:function(t){return(this.x<t.right&&t.left<this.x+this.w||this.x>=t.right&&t.left>=this.x+this.w)&&this.y<t.bottom&&t.top<this.y+this.w||this.y>=t.bottom&&t.top>=this.y+this.w}},{key:"r_contains_",value:function(t){return this.x<t.left&&this.right>t.right&&this.y<t.top&&this.bottom>t.bottom}},{key:"computeQuads",value:function(){var t=this.w/2,e=this.h/2;return[new Rectangle(this.x,this.y,t,e),new Rectangle(this.x+t,this.y,t,e),new Rectangle(this.x,this.y+e,t,e),new Rectangle(this.x+t,this.y+e,t,e)]}},{key:"getQuadrant",value:function(t){return(center=new a.default(this.x+this.w/2,this.y+this.h/2),t.right<center.x)?t.bottom<center.y?0:t.top>=center.y?2:-1:t.left>=center.x?t.bottom<center.y?1:t.top>=center.y?3:-1:-1}}],function(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,l(n.key),n)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(),u=["black","red","blue","green"],(o=l(o="colors"))in i?Object.defineProperty(i,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[o]=u}),i("228AS",function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,function(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=r(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==r(e)?e:String(e)}(i.key),i)}}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0,t.exports.default=function(){var t,e;function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,r),this.x=t,this.y=e}return t=[{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"devide",value:function(t){return this.x/=t,this.y/=t,this}},{key:"minus",value:function(t){return this.x-=t.x,this.y-=t.y,this}},{key:"norm",value:function(){var t=Math.abs(this.x)+Math.abs(this.y);return t?this.devide(t):this}}],e=[{key:"add",value:function(t,e){return new r(t.x+e.x,t.y+e.y)}},{key:"minus",value:function(t,e){return new r(t.x-e.x,t.y-e.y)}}],t&&n(r.prototype,t),e&&n(r,e),Object.defineProperty(r,"prototype",{writable:!1}),r}()}),i("6SaXD",function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var i=o(n("7zFg5"));function o(t){return t&&t.__esModule?t:{default:t}}function u(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(u=function(){return!!t})()}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}o(n("228AS")),t.exports.default=function(t){var e;function n(t,e,i,o,s){var l,f,c;return function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,n),f=n,c=["Circle",t,e,1,s],f=a(f),(l=function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,u()?Reflect.construct(f,c||[],a(this).constructor):f.apply(this,c))).vx=i,l.vy=o,l.points=[],l}return function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e)}(n,t),e=[{key:"contains",value:function(t){return!(Math.sqrt(Math.pow(t.x-this.x,2)+Math.pow(t.y-this.y,2))>this.r)}},{key:"intersects",value:function(t){if(!this.possible_intersects(t))return!1;if("RightFig"==t.type){for(var e=0;e<t.N;e++)if(this.contains(t.point(e)))return this.decrement_live(t);if(this.inner_intersects(t))return this.decrement_live(t)}return!!("Circle"==t.type&&this.possible_intersects(t))&&this.decrement_live(t)}}],function(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,function(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=r(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==r(e)?e:String(e)}(i.key),i)}}(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}(i.default)}),i("83Vcn",function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var r=u(n("dhOfn")),i=u(n("gig6K")),o=u(n("228AS"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return l(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,void 0)}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){a=!0,o=t},f:function(){try{u||null==r.return||r.return()}finally{if(a)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}t.exports.default=function(){var t;function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;if(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e),!t)throw TypeError("boundary is null or undefined");if(!(t instanceof i.default))throw TypeError("boundary should be a Rectangle");this._parent=n,this._boundary=t,this._quads=[],this._children=new r.default,this._depth=o}return t=[{key:"insert",value:function(t){var e;if(this._depth<=0||-1==(e=this._boundary.getQuadrant(t))){this._children.add(t);return}0==this._quads.length&&this._subdivide(),this._quads[e].insert(t)}},{key:"length",get:function(){return this._children.length}},{key:"hasChildren",get:function(){return this._children.length>0}},{key:"_updateChild",value:function(t){if(!this._boundary.contains_(t)){this._parent._updateChild(t);return}this.insert(t)}},{key:"updateTree",value:function(t){for(var e=this._children.head;e;e=e.next){var r=e.data;if(!this._boundary.contains_(r)){this._children.remove(e),this._parent._updateChild(r);continue}var n=void 0;this._depth<=0||-1==(n=this._boundary.getQuadrant(r))||(this._children.remove(e),0==this._quads.length&&this._subdivide(),this._quads[n].insert(r))}var i,o=s(this._quads);try{for(o.s();!(i=o.n()).done;)i.value.updateTree(t)}catch(t){o.e(t)}finally{o.f()}}},{key:"processCollisions",value:function(){this._processCollisions1(this._boundary.size);var t,e=s(this._quads);try{for(e.s();!(t=e.n()).done;)t.value._processCollisions2([this._children.head])}catch(t){e.e(t)}finally{e.f()}this.updateTree(this._boundary.size)}},{key:"_processCollisions1",value:function(t){for(var e=this._children.head;e;){for(var r=e.data,n=e.next;n;){var i=n.data;if(r.intersects(i)){var u=new o.default(r.x-i.x,r.y-i.y).norm();r.vx=u.x,r.vy=u.y,i.vx=-u.x,i.vy=-u.y}n=n.next}(r.left<2||r.right+2>t.x)&&(r.vx=-r.vx),(r.top<2||r.bottom+2>t.y)&&(r.vy=-r.vy),r.x+=r.vx,r.y+=r.vy,r.lives<=0&&this._children.remove(e),e=e.next}var a,l=s(this._quads);try{for(l.s();!(a=l.n()).done;)a.value._processCollisions1(t)}catch(t){l.e(t)}finally{l.f()}}},{key:"_processCollisions2",value:function(t){var e,r=s(t);try{for(r.s();!(e=r.n()).done;)for(var n=e.value;n;n=n.next)for(var i=n.data,u=this._children.head;u;u=u.next){var a=u.data;if(i.intersects(a)){var l=new o.default(i.x-a.x,i.y-a.y).norm();i.vx=l.x,i.vy=l.y,a.vx=-l.x,a.vy=-l.y}}}catch(t){r.e(t)}finally{r.f()}t.push(this._children.head);var f,c=s(this._quads);try{for(c.s();!(f=c.n()).done;)f.value._processCollisions2(t)}catch(t){c.e(t)}finally{c.f()}}},{key:"_subdivide",value:function(){var t,r=s(this._boundary.computeQuads());try{for(r.s();!(t=r.n()).done;){var n=t.value;this._quads.push(new e(n,this,this._depth-1))}}catch(t){r.e(t)}finally{r.f()}}},{key:"clear",value:function(){this._children=new r.default}},{key:"draw",value:function(t){for(var e=this._children.head;e;e=e.next){var r=e.data;if(t.beginPath(),"RightFig"==r.type){t.moveTo(r.point(0).x,r.point(0).y);for(var n=1;n<r.N;n++){var i=r.point(n);t.lineTo(i.x,i.y)}}"Circle"==r.type&&t.arc(r.x,r.y,r.r,0,2*Math.PI),t.fillStyle=r.color,t.fill()}var o,u=s(this._quads);try{for(u.s();!(o=u.n()).done;)o.value.draw(t)}catch(t){u.e(t)}finally{u.f()}}}],function(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,function(t){var e=function(t,e){if("object"!=a(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=a(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==a(e)?e:String(e)}(n.key),n)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}()}),i("dhOfn",function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,function(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=r(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==r(e)?e:String(e)}(i.key),i)}}function i(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=t.exports.Node=void 0;var u=t.exports.Node=i(function t(e){o(this,t),this.data=e,this.next=null,this.prev=null});t.exports.default=function(){function t(){o(this,t),this.head=null,this.tail=null,this.length=0}return i(t,[{key:"add",value:function(t){var e=new u(t);return this.head?(e.prev=this.tail,this.tail.next=e):this.head=e,this.tail=e,this.length++,this}},{key:"remove",value:function(t){return t.prev?t.prev.next=t.next:this.head=t.next,t.next?t.next.prev=t.prev:this.tail=t.prev,this.length--,this}}]),t}()}),i("gig6K",function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var r,i=(r=n("228AS"))&&r.__esModule?r:{default:r};function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports.default=function(){var t;function e(t,r,n,i){(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,e),this.x=t,this.y=r,this.w=n,this.h=i}return t=[{key:"left",get:function(){return this.x}},{key:"right",get:function(){return this.x+this.w}},{key:"top",get:function(){return this.y}},{key:"bottom",get:function(){return this.y+this.h}},{key:"topLeft",get:function(){return new i.default(this.x,this.y)}},{key:"size",get:function(){return new i.default(this.w,this.h)}},{key:"contains",value:function(t){return t.x>=this.x&&t.x<this.x+this.w&&t.y>=this.y&&t.y<this.y+this.h}},{key:"intersects_",value:function(t){return(this.x<t.right&&t.left<this.x+this.w||this.x>=t.right&&t.left>=this.x+this.w)&&this.y<t.bottom&&t.top<this.y+this.w||this.y>=t.bottom&&t.top>=this.y+this.w}},{key:"contains_",value:function(t){return this.x<t.left&&this.right>t.right&&this.y<t.top&&this.bottom>t.bottom}},{key:"computeQuads",value:function(){var t=this.w/2,r=this.h/2;return[new e(this.x,this.y,t,r),new e(this.x+t,this.y,t,r),new e(this.x,this.y+r,t,r),new e(this.x+t,this.y+r,t,r)]}},{key:"getQuadrant",value:function(t){var e=new i.default(this.x+this.w/2,this.y+this.h/2);return t.right<e.x?t.bottom<e.y?0:t.top>=e.y?2:-1:t.left>=e.x?t.bottom<e.y?1:t.top>=e.y?3:-1:-1}}],function(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,function(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=o(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==o(e)?e:String(e)}(n.key),n)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}()});var o=f(n("cRiUH")),u=f(n("6SaXD"));f(n("7zFg5"));var a=f(n("228AS")),s=f(n("83Vcn")),l=f(n("gig6K"));function f(t){return t&&t.__esModule?t:{default:t}}var c=document.getElementById("cnvs"),h={figs:[]},y=0,d=0,p=0;!function(){c.width=window.innerWidth,c.height=window.innerHeight,h.lastTick=performance.now(),h.lastRender=h.lastTick,h.tickLength=15,h.QTRoot=new s.default(new l.default(0,0,c.width,c.height));for(var t=0;t<1e3;t++){var e=new a.default(2*Math.random()-1,2*Math.random()-1).norm(),r=2*Math.random()+5,n=Math.random()*(c.width-2*r)+r,i=Math.random()*(c.height-2*r)+r,f=new o.default(n,i,e.x,e.y,3,r,Math.random()*Math.PI);h.QTRoot.insert(f)}for(var y=0;y<1e3;y++){var d=new a.default(2*Math.random()-1,2*Math.random()-1).norm(),p=2*Math.random()+5,v=Math.random()*(c.width-2*p)+p,b=Math.random()*(c.height-2*p)+p,m=new o.default(v,b,d.x,d.y,6,p,Math.random()*Math.PI);h.QTRoot.insert(m)}for(var x=0;x<1e3;x++){var g=new a.default(2*Math.random()-1,2*Math.random()-1).norm(),_=2*Math.random()+5,w=Math.random()*(c.width-2*_)+_,k=Math.random()*(c.height-2*_)+_,S=new u.default(w,k,g.x,g.y,_);h.QTRoot.insert(S)}}(),function t(e){h.stopCycle=window.requestAnimationFrame(t);var r=h.lastTick+h.tickLength,n=0;e>r&&(n=Math.floor((e-h.lastTick)/h.tickLength)),function(t){for(var e,r=0;r<t;r++)h.lastTick=h.lastTick+h.tickLength,h.lastTick,h.QTRoot.processCollisions()}(n),function(t){var e=c.getContext("2d");if(e.font="20px serif",e.clearRect(0,0,c.width,c.height),h.QTRoot.draw(e),t){var r=t-h.lastTick;d++,(y+=r)>=1e3&&(y-=1e3,p=d,d=0),e.fillStyle="black",e.fillText(p,10,20)}}(e),h.lastRender=e}();
//# sourceMappingURL=index.13141eff.js.map
