/* eslint-disable  */
!(function (e) {
  var t,
    n,
    o,
    i,
    c,
    d,
    s =
      '<svg><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M946.222 844.994 727.729 624.668c-2.543-2.549-5.353-4.496-8.036-6.617 36.908-57.103 58.459-125.121 58.459-198.387 0-201.282-161.79-364.428-361.498-364.428-199.596 0-361.498 163.146-361.498 364.428 0 201.31 161.902 364.42 361.498 364.42 72.648 0 140.196-21.784 196.926-58.999 2.066 2.768 3.961 5.521 6.463 8.05l218.521 220.353c14.919 14.997 34.35 22.472 53.809 22.472 19.472 0 38.916-7.474 53.822-22.436C975.879 923.528 975.879 874.967 946.222 844.994M416.654 669.007c-136.347 0-247.334-111.872-247.334-249.343 0-137.45 110.988-249.351 247.334-249.351s247.334 111.901 247.334 249.351C663.989 557.134 553 669.007 416.654 669.007"  ></path></symbol></svg>',
    a = (a = document.getElementsByTagName('script'))[
      a.length - 1
    ].getAttribute('data-injectcss');
  if (a && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function l() {
    c || ((c = !0), o());
  }
  (t = function () {
    var e, t, n, o;
    ((o = document.createElement('div')).innerHTML = s),
      (s = null),
      (n = o.getElementsByTagName('svg')[0]) &&
        (n.setAttribute('aria-hidden', 'true'),
        (n.style.position = 'absolute'),
        (n.style.width = 0),
        (n.style.height = 0),
        (n.style.overflow = 'hidden'),
        (e = n),
        (t = document.body).firstChild
          ? ((o = e), (n = t.firstChild).parentNode.insertBefore(o, n))
          : t.appendChild(e));
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener('DOMContentLoaded', n, !1), t();
          }),
          document.addEventListener('DOMContentLoaded', n, !1))
      : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (c = !1),
        (d = function () {
          try {
            i.documentElement.doScroll('left');
          } catch (e) {
            return void setTimeout(d, 50);
          }
          l();
        })(),
        (i.onreadystatechange = function () {
          'complete' == i.readyState && ((i.onreadystatechange = null), l());
        }));
})(window);
